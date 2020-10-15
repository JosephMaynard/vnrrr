import React, { useMemo } from 'react';

import { IRedditPostData } from '../../store/api-types';

import './styles/index.scss';

export interface IProps {
  post: IRedditPostData;
}
const renderMedia = (post: IRedditPostData): JSX.Element => {
  if (post.secure_media?.reddit_video?.fallback_url) {
    return (
      <video
        className="Preview_video"
        src={post.secure_media.reddit_video.fallback_url}
        controls
        autoPlay
        height={post.secure_media.reddit_video.height}
        width={post.secure_media.reddit_video.width}
      />
    );
  } else if (post.preview.reddit_video_preview?.fallback_url) {
    return (
      <video
        className="Preview_video"
        src={post.preview.reddit_video_preview.fallback_url}
        controls
        autoPlay
        height={post.preview.reddit_video_preview.height}
        width={post.preview.reddit_video_preview.width}
      />
    );
  } else if (
    post.preview.images &&
    post.preview.images[0].variants?.mp4?.source?.url
  ) {
    return (
      <video
        className="Preview_video"
        src={post.preview.images[0].variants.mp4.source.url}
        controls
      />
    );
  } else if (
    post.preview.images &&
    post.preview.images[0].variants?.gif?.source?.url
  ) {
    return (
      <img
        className="Preview_gif"
        src={post.preview.images[0].variants.gif.source.url}
        alt={post.title}
      />
    );
  } else if (post.preview.images && post.preview.images[0].source.url) {
    return (
      <img
        className="Preview_image"
        src={post.preview.images[0].source.url}
        alt={post.title}
      />
    );
  }
  return <p>No media found</p>;
};

const Preview: React.FC<IProps> = ({ post }: IProps): JSX.Element => {
  const media = useMemo(() => renderMedia(post), [post]);
  return <div className="Preview">{media}</div>;
};

export default Preview;
