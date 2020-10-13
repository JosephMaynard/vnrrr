import React, { useMemo } from 'react';

import { IPostPreview } from '../../store/api-types';

export interface IProps {
  preview: IPostPreview;
}
const renderMedia = (preview: IPostPreview): JSX.Element => {
  if (preview.reddit_video_preview?.fallback_url) {
    return (
      <video
        className="Preview_video"
        src={preview.reddit_video_preview.fallback_url}
        controls
      />
    );
  } else if (preview.images && preview.images[0].variants?.mp4?.source?.url) {
    return (
      <video
        className="Preview_video"
        src={preview.images[0].variants.mp4.source.url}
        controls
      />
    );
  } else if (preview.images && preview.images[0].variants?.gif?.source?.url) {
    return (
      <img
        className="Preview_gif"
        src={preview.images[0].variants.gif.source.url}
      />
    );
  } else if (preview.images && preview.images[0].source.url) {
    return <img className="Preview_gif" src={preview.images[0].source.url} />;
  }
  return <p>No media found</p>;
};

const Preview: React.FC<IProps> = ({ preview }: IProps): JSX.Element => {
  const media = useMemo(() => renderMedia(preview), [preview]);
  return <div className="Preview">{media}</div>;
};

export default Preview;
