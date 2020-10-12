import React from 'react';

import './styles/index.scss';

export type TLogoState = 'error' | 'loading';

export interface IProps {
  title?: string;
  className?: string;
  state?: TLogoState;
}

const Logo: React.FC<IProps> = ({
  title,
  className,
  state,
}: IProps): JSX.Element => (
  <svg
    role="img"
    className={`Logo${state ? ` Logo_${state}` : ''}${
      className ? ` ${className}` : ''
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
  >
    {title && <title>{title}</title>}
    <g className="Logo_backgroundRings">
      <ellipse
        className="Logo_backgroundRing Logo_backgroundRing_1"
        cx="64"
        cy="64"
        rx="55.8"
        ry="21.9"
      />
      <ellipse
        transform="matrix(0.866 -0.5 0.5 0.866 -23.4316 40.576)"
        className="Logo_backgroundRing Logo_backgroundRing_2"
        cx="64"
        cy="64"
        rx="21.9"
        ry="55.8"
      />
      <ellipse
        transform="matrix(0.5 -0.866 0.866 0.5 -23.436 87.4316)"
        className="Logo_backgroundRing Logo_backgroundRing_3"
        cx="64"
        cy="64"
        rx="55.8"
        ry="21.9"
      />
    </g>
    <g className="Logo_rings">
      <ellipse
        className="Logo_ring Logo_ring_1"
        cx="64"
        cy="64"
        rx="55.8"
        ry="21.9"
      />
      <ellipse
        transform="matrix(0.866 -0.5 0.5 0.866 -23.4316 40.576)"
        className="Logo_ring Logo_ring_2"
        cx="64"
        cy="64"
        rx="21.9"
        ry="55.8"
      />
      <ellipse
        transform="matrix(0.5 -0.866 0.866 0.5 -23.436 87.4316)"
        className="Logo_ring Logo_ring_3"
        cx="64"
        cy="64"
        rx="55.8"
        ry="21.9"
      />
    </g>
    <g className="Logo_head">
      <path
        className="Logo_headBackground"
        d="M109.8,51.3c0-5.6-4.5-10.1-10.1-10.1c-2.6,0-5.1,1-7,2.8c-6.9-4.5-16.1-7.5-26.4-7.8
		l5.6-17.7l15.2,3.6c0,0.1,0,0.1,0,0.2c0,4.6,3.7,8.2,8.2,8.3c4.6,0,8.2-3.7,8.3-8.2s-3.7-8.2-8.2-8.3c-3.4,0-6.5,2.1-7.7,5.2
		l-16.4-3.8c-0.7-0.2-1.4,0.2-1.7,0.9l-6.3,19.8c-10.8,0.1-20.5,3-27.7,7.7c-4.1-3.8-10.4-3.5-14.2,0.6C17.7,48.5,18,54.9,22,58.7
		c0.5,0.5,1.1,0.9,1.7,1.3c-0.2,1.1-0.3,2.2-0.3,3.2c0,10.1,8.3,18.9,20.6,23.5c12.8,4.7,30.8,4.3,40,0
		c12.3-4.6,20.6-13.4,20.6-23.5c0-1-0.1-2-0.3-3C107.8,58.4,109.8,55,109.8,51.3z"
      />
      <path
        className="Logo_smile"
        d="M78.8,75.7c-3,3-7.8,4.5-14.5,4.5h-0.1h-0.1c-6.7,0-11.5-1.5-14.5-4.5c-0.5-0.6-0.4-1.5,0.2-2
		c0.5-0.4,1.3-0.4,1.8,0c2.5,2.5,6.6,3.7,12.5,3.7h0.1h0.1c5.9,0,10-1.2,12.5-3.7c0.6-0.5,1.5-0.5,2,0.1
		C79.3,74.4,79.3,75.2,78.8,75.7L78.8,75.7z"
      />
      <path
        className="Logo_eyes"
        d="M44.5,57.5c0.3-3.3,3.2-5.8,6.5-5.5c3.3,0.3,5.8,3.2,5.5,6.5c-0.2,2.9-2.6,5.2-5.5,5.5
		c-3.3,0.3-6.2-2.2-6.5-5.5C44.5,58.1,44.5,57.8,44.5,57.5z M78.1,64c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6c0,0,0,0,0,0
		C84.1,61.3,81.4,64,78.1,64L78.1,64z"
      />
    </g>
  </svg>
);

export default Logo;
