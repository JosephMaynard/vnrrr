import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { TState } from '../../store';
import { setShowComments, setSideMenuOpen } from '../../store/ui/ui';

import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';
import SideMenu from './SideMenu';

import './styles/index.scss';

export interface IProps {
  refresh: () => void;
  children?: React.ReactNode;
  title: string;
}

const Layout: React.FC<IProps> = ({
  refresh,
  children,
  title,
}: IProps): JSX.Element => {
  const { showComments, cssBreakpoint, sideMenuOpen } = useSelector(
    (state: TState) => state.ui
  );
  const dispatch = useDispatch();
  const sideMenuRef = useRef(null);
  return (
    <div className="Layout">
      <header className="Layout_header">
        {showComments && cssBreakpoint === 'mobile' && (
          <IconButton
            icon="back"
            className="Layout_backButton"
            onClick={(): void => {
              dispatch(setShowComments(false));
            }}
            label="Back"
          />
        )}
        <Logo className="Layout_header_logo" />
        <span className="Layout_header_textBlock">
          <h1 className="Layout_title">{title}</h1>
        </span>
        <IconButton icon="refresh" onClick={refresh} label="Refresh posts" />
        <IconButton
          icon="menu-vertical"
          onClick={(): void => {
            dispatch(setSideMenuOpen(true));
          }}
          label="Open side menu"
        />
      </header>
      {children}
      <TransitionGroup component={null}>
        {sideMenuOpen && (
          <CSSTransition
            classNames="Layout_overlay"
            timeout={{ enter: 0, exit: 300 }}
          >
            <div className="Layout_overlay" />
          </CSSTransition>
        )}
      </TransitionGroup>
      <TransitionGroup component={null}>
        {sideMenuOpen && (
          <CSSTransition
            nodeRef={sideMenuRef}
            classNames="SideMenu_slide"
            timeout={{ enter: 0, exit: 300 }}
          >
            <SideMenu
              ref={sideMenuRef}
              close={(): void => {
                dispatch(setSideMenuOpen(false));
              }}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Layout;
