import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IRedditPostData } from '../../store/api-types';

export interface IProps {
  post: IRedditPostData;
}

const PostItem: React.FC<IProps> = ({ post }: IProps): JSX.Element => {
  const { title, subreddit, author, url, domain, over_18, thumbnail } = post;
  const postTitle = useMemo(() => {
    if (url === undefined || url === '') {
      return <p className="PostItem_postTitle">{title}</p>;
    } else if (url.substr(0, 23) === 'https://www.reddit.com/') {
      return (
        <Link to={url.substr(22)} className="PostItem_postTitle">
          {title}
        </Link>
      );
    }
    return (
      <a
        href={url}
        className="PostItem_postTitle"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }, [url]);
  const postThumbnail = useMemo(() => {
    if (thumbnail) {
      return (
        <span
          className="PostItem_thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      );
    }
    return (
      <span className="PostItem_thumbnail">
        {subreddit.substr(0, 1).toUpperCase()}
      </span>
    );
  }, [thumbnail, subreddit]);
  return (
    <li className="PostItem">
      {postThumbnail}
      <span className="PostItem_text">
        <span className="PostItem_text_topRow">
          {postTitle}{' '}
          {domain && <span className="PostItem_text">({domain})</span>}
        </span>
        <span className="PostItem_text_bottomRow">
          {over_18 && <span className="PostItem_nsfw">nsfw</span>}
          <Link to={`/${subreddit}`} className="PostItem_subredditLink">
            {subreddit}
          </Link>
          <span className="PostItem_author">{author}</span>
        </span>
      </span>
    </li>
  );
};

export default PostItem;
