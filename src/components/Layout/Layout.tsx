import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TState } from '../../store';
import { setShowComments } from '../../store/ui/ui';

import IconButton from '../IconButton/IconButton';
import Logo from '../Logo/Logo';

import './styles/index.scss';

export interface IProps {
  refresh: () => void;
  children?: React.ReactNode;
  subreddit: string;
}

const Layout: React.FC<IProps> = ({
  refresh,
  children,
  subreddit,
}: IProps): JSX.Element => {
  const { showComments, cssBreakpoint } = useSelector(
    (state: TState) => state.ui
  );
  const dispatch = useDispatch();
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
          <h1 className="Layout_title">React Reddit</h1>
          <h2 className="Layout_subtitle">r/{subreddit}</h2>
        </span>
        <IconButton icon="refresh" onClick={refresh} label="Refresh posts" />
      </header>
      {children}
    </div>
  );
};

export default Layout;
