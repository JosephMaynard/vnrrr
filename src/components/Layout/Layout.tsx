import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useHistory, Link } from 'react-router-dom';

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
  const history = useHistory();
  const sideMenuRef = useRef(null);
  const overlayRef = useRef(null);
  return (
    <div className="Layout">
      <header className="Layout_header">
        {showComments && cssBreakpoint === 'mobile' && (
          <IconButton
            icon="back"
            className="Layout_backButton"
            onClick={(): void => {
              dispatch(setShowComments(false));
              history.goBack();
            }}
            label="Back"
          />
        )}
        <Link to="/">
          <Logo className="Layout_header_logo" />
        </Link>
        <h1 className="Layout_title">
          {title === 'Frontpage' ? (
            title
          ) : (
            <Link className="Layout_title_link" to={`/${title}`}>
              {title}
            </Link>
          )}
        </h1>
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
            nodeRef={overlayRef}
            classNames="Layout_overlay"
            timeout={{ enter: 0, exit: 300 }}
          >
            <div className="Layout_overlay" ref={overlayRef} />
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
