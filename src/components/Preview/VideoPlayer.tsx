import React from 'react';

export interface IProps {
  src: string;
  height: number;
  width: number;
}

const VideoPlayer: React.FC<IProps> = ({ src, height, width }): JSX.Element => (
  <div className="VideoPlayer">
    <video
      className="VideoPlayer_video"
      src={src}
      controls
      autoPlay
      height={height}
      width={width}
    />
  </div>
);

export default VideoPlayer;
