import React, { useMemo } from 'react';

import VideoPlayer from './VideoPlayer';
import YoutubeEmbed from './YoutubeEmbed';

import { IRedditPostData } from '../../store/api-types';

import './styles/index.scss';

export interface IProps {
  post: IRedditPostData;
}
const renderMedia = (post: IRedditPostData): JSX.Element => {
  if (post.domain === 'youtu.be') {
    return (
      <YoutubeEmbed
        width={post.media_embed.width || 600}
        height={post.media_embed.height || 338}
        youtubeId={post.url.substr(17)}
      />
    );
  } else if (post.domain === 'youtube.com') {
    return (
      <YoutubeEmbed
        width={post.media_embed.width || 600}
        height={post.media_embed.height || 338}
        youtubeId={post.url.substr(32)}
      />
    );
  } else if (post.gallery_data && post.media_metadata) {
    return (
      <>
        {post.gallery_data.items.map(
          (item): JSX.Element => (
            <img
              key={item.media_id}
              src={
                post.media_metadata && post.media_metadata[item.media_id]
                  ? post.media_metadata[item.media_id].s.u
                  : ''
              }
            />
          )
        )}
      </>
    );
  } else if (
    post.secure_media?.reddit_video?.fallback_url ||
    (post.crosspost_parent_list &&
      post.crosspost_parent_list[0].secure_media?.reddit_video?.fallback_url)
  ) {
    const videoData =
      post.secure_media?.reddit_video ||
      (post.crosspost_parent_list &&
        post.crosspost_parent_list[0].secure_media?.reddit_video);
    return (
      <VideoPlayer
        src={videoData?.fallback_url || ''}
        height={videoData?.height || 0}
        width={videoData?.width || 0}
        redditVideo={videoData}
      />
    );
  } else if (post.preview.reddit_video_preview?.fallback_url) {
    return (
      <VideoPlayer
        src={post.preview.reddit_video_preview.fallback_url}
        height={post.preview.reddit_video_preview.height}
        width={post.preview.reddit_video_preview.width}
        redditVideo={post.preview.reddit_video_preview}
      />
    );
  } else if (
    post.preview.images &&
    post.preview.images[0].variants?.mp4?.source?.url
  ) {
    return (
      <VideoPlayer
        src={post.preview.images[0].variants.mp4.source.url}
        width={post.preview.images[0].variants.mp4.source.width}
        height={post.preview.images[0].variants.mp4.source.height}
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
