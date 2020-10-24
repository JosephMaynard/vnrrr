import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IRedditPostData } from '../../store/api-types';
import { stringToHashedColour } from '../../utils/colour-utils';

import SVGIcon from '../SVGIcon/SVGIcon';
import Timestamp from '../Timestamp/Timestamp';

export interface IProps {
  post: IRedditPostData;
  commentsOnClick: () => void;
}

const PostItem: React.FC<IProps> = ({
  post,
  commentsOnClick,
}: IProps): JSX.Element => {
  const {
    title,
    subreddit_name_prefixed,
    author,
    url,
    domain,
    over_18,
    thumbnail,
    num_comments,
    ups,
    permalink,
    is_reddit_media_domain,
    is_self,
    created_utc,
  } = post;
  const postTitle = useMemo(() => {
    if (url === undefined || url === '') {
      return <p className="PostItem_postTitle">{title}</p>;
    } else if (
      url.substr(0, 23) === 'https://www.reddit.com/' ||
      is_reddit_media_domain ||
      is_self
    ) {
      return (
        <Link
          to={permalink}
          className="PostItem_postTitle"
          onClick={commentsOnClick}
        >
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
        <SVGIcon className="PostItem_postTitle_icon" icon="launch" />
      </a>
    );
  }, [url, title, commentsOnClick, is_reddit_media_domain, is_self, permalink]);
  const postThumbnail = useMemo(() => {
    if (
      thumbnail &&
      thumbnail !== 'self' &&
      thumbnail !== 'default' &&
      thumbnail !== 'image' &&
      thumbnail !== 'nsfw'
    ) {
      return (
        <span
          className="PostItem_thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      );
    } else if (thumbnail === 'nsfw') {
      return (
        <span className="PostItem_thumbnail PostItem_thumbnail_nsfw">
          <span className="PostItem_thumbnail_nsfw_text">NSFW</span>
        </span>
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
            <span className="PostItem_upvotes">
              <SVGIcon icon="up-votes" className="PostItem_upvotes_icon" />
              {ups}
            </span>
            <Link
              to={`/${subreddit_name_prefixed}`}
              className="PostItem_subredditLink"
            >
              {subreddit_name_prefixed}
            </Link>
            <Timestamp
              createdUTC={created_utc}
              className="PostItem_timestamp"
            />
          </span>
        </span>
      </span>
      <Link
        to={permalink}
        className="PostItem_commentsLink"
        onClick={commentsOnClick}
      >
        <span className="PostItem_commentsLink_inner">
          <span className="PostItem_commentsLink_top">
            <SVGIcon icon="comments" className="PostItem_commentsLink_icon" />
            <span className="PostItem_commentsLink_count">{num_comments}</span>
          </span>
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
