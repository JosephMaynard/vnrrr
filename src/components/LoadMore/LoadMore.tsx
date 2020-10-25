import React from 'react';
import { Waypoint } from 'react-waypoint';

import Logo from '../Logo/Logo';

export interface IProps {
  getMore: () => void;
  text: string;
  loading: boolean;
}

const LoadMore: React.FC<IProps> = ({
  getMore,
  text,
  loading,
}): JSX.Element => {
  return !loading ? (
    <>
      <Waypoint onEnter={getMore} />
      <button type="button" className="LoadMore_button">
        <span className="LoadMore_inner">
          <Logo className="LoadMore_icon" state="static" />
          <span className="LoadMore_text">{text}</span>
        </span>
      </button>
    </>
  ) : (
    <div className="LoadMore_loading">
      <span className="LoadMore_inner">
        <Logo className="LoadMore_icon" state="loading" />
        <span className="LoadMore_text">Loading</span>
      </span>
    </div>
  );
};

export default LoadMore;
