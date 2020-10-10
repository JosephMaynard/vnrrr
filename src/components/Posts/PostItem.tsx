import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IRedditPostData } from '../../store/api-types';
import { stringToHashedColour } from '../../utils/colour-utils';

import SVGIcon from '../SVGIcon/SVGIcon';

export interface IProps {
  post: IRedditPostData;
}

const PostItem: React.FC<IProps> = ({ post }: IProps): JSX.Element => {
  const {
    title,
    subreddit_name_prefixed,
    author,
    url,
    domain,
    over_18,
    thumbnail,
    id,
    num_comments,
    ups,
  } = post;
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
  }, [url, title]);
  const postThumbnail = useMemo(() => {
    if (
      thumbnail &&
      thumbnail !== 'self' &&
      thumbnail !== 'default' &&
      thumbnail !== 'image'
    ) {
      return (
        <span
          className="PostItem_thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      );
    }
    return (
      <span
        className="PostItem_thumbnail"
        style={{
          backgroundColor: stringToHashedColour(subreddit_name_prefixed),
        }}
      >
        <span className="PostItem_thumbnail_letter">
          {subreddit_name_prefixed.substr(2, 1).toUpperCase()}
        </span>
      </span>
    );
  }, [thumbnail, subreddit_name_prefixed]);
  return (
    <li className="PostItem">
      <span className="PostItem_inner">
        {postThumbnail}
        <span className="PostItem_text">
          <span className="PostItem_text_topRow">
            {postTitle}{' '}
            {domain && <span className="PostItem_domain">({domain})</span>}
          </span>
          <span className="PostItem_text_bottomRow">
            {over_18 && <span className="PostItem_nsfw">nsfw</span>}
            <span className="PostItem_author">{author}</span>
            <Link
              to={`/${subreddit_name_prefixed}`}
              className="PostItem_subreddit_name_prefixedLink"
            >
              {subreddit_name_prefixed}
            </Link>
          </span>
        </span>
      </span>
      <Link
        to={`/${subreddit_name_prefixed}/comments/${id}`}
        className="PostItem_commentsLink"
      >
        <span className="PostItem_commentsLink_inner">
          <span className="PostItem_commentsLink_top">
            <SVGIcon icon="comments" className="PostItem_commentsLink_icon" />
            <span className="PostItem_commentsLink_count">{num_comments}</span>
          </span>
          <span className="PostItem_upvotes">
            <SVGIcon icon="up-votes" className="PostItem_upvotes_icon" />
            {ups}
          </span>
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
