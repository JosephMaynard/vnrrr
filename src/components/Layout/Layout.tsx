import React from 'react';

import IconButton from '../IconButton/IconButton';

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
}: IProps): JSX.Element => (
  <div className="Layout">
    <header className="Layout_header">
      <span className="Layout_header_textBlock">
        <h1 className="Layout_title">React Reddit</h1>
        <h2 className="Layout_subtitle">r/{subreddit}</h2>
      </span>
      <IconButton icon="refresh" onClick={refresh} label="Refresh posts" />
    </header>
    {children}
  </div>
);

export default Layout;
