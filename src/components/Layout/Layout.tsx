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
      <h2>r/{subreddit}</h2>
      <IconButton icon="refresh" onClick={refresh} label="Refresh posts" />
    </header>
    {children}
  </div>
);

export default Layout;
