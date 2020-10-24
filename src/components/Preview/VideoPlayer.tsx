import React from 'react';

export interface IProps {
  src: string;
  height: number;
  width: number;
}

const VideoPlayer: React.FC<IProps> = ({ src, height, width }): JSX.Element => (
  <video
    className="VideoPlayer"
    style={{ maxWidth: `${width / 16}rem` }}
    src={src}
    controls
    autoPlay
    loop
  />
);

export default VideoPlayer;
