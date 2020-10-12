import React from 'react';

import Logo, { TLogoState } from '../Logo/Logo';

import './styles/index.scss';

export interface IProps {
  text?: string;
  className?: string;
  state?: TLogoState;
}

const LoadingScreen: React.FC<IProps> = ({
  text,
  className,
  state = 'loading',
}: IProps): JSX.Element => (
  <div className={`LoadingScreen${className ? ` ${className}` : ''}`}>
    <Logo state={state} />
    {text && <p className="LoadingScreen_text">{text}</p>}
  </div>
);

export default LoadingScreen;
