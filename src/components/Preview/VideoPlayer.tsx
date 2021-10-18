import React, { useRef } from 'react';
import { IRedditVideo } from '../../store/api-types';

export interface IProps {
  src: string;
  height: number;
  width: number;
  redditVideo?: IRedditVideo;
}

const VideoPlayer: React.FC<IProps> = ({
  src,
  height,
  width,
  redditVideo,
}): JSX.Element => {
  const video = useRef<HTMLVideoElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  return (
    <>
      {redditVideo ? (
        <>
          <video
            className="VideoPlayer"
            style={{ maxWidth: `${redditVideo.width / 16}rem` }}
            controls
            autoPlay
            loop
            muted
            ref={video}
            onPlay={(): void => {
              audio.current && audio.current.play();
            }}
            onPause={(): void => {
              audio.current && audio.current.pause();
            }}
            onSeeking={() => {
              audio.current
                ? (audio.current.currentTime = video.current?.currentTime || 0)
                : null;
            }}
            on
          >
            <source src={redditVideo.hls_url} />
            <source src={redditVideo.dash_url} />
            <source src={redditVideo.fallback_url} />
          </video>
          <audio controls ref={audio} muted loop>
            <source
              src={`${
                redditVideo.hls_url.split('HLSPlaylist')[0]
              }DASH_audio.mp4`}
              type="audio/mp4"
            />
            <source
              src={`${redditVideo.hls_url.split('HLSPlaylist')[0]}audio`}
              type="audio/mp4"
            />
          </audio>
        </>
      ) : (
        <video
          className="VideoPlayer"
          style={{ maxWidth: `${width / 16}rem` }}
          src={src}
          controls
          autoPlay
          loop
        />
      )}
    </>
  );
};

export default VideoPlayer;
