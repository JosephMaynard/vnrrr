import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  title: string;
  subreddit: string;
  author: string;
  url?: string;
}

const PostItem: React.FC<IProps> = ({
  title,
  subreddit,
  author,
  url,
}: IProps): JSX.Element => {
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
  return (
    <li className="PostItem">
      {postTitle}
      <br />
      <Link to={`/${subreddit}`}>{subreddit}</Link>
      <br />
      {author}
    </li>
  );
};

export default PostItem;
