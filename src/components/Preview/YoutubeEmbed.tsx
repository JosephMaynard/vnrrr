import React from 'react';

export interface IProps {
  youtubeId: string;
  width: number;
  height: number;
}

const YoutubeEmbed: React.FC<IProps> = ({
  youtubeId,
  width,
  height,
}): JSX.Element => (
  <iframe
    className="Preview_youtube"
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${youtubeId}?feature=oembed&enablejsapi=1`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default YoutubeEmbed;
