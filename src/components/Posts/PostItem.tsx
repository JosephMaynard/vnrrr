import React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  title: string;
  subreddit: string;
  author: string;
}

const PostItem: React.FC<IProps> = ({
  title,
  subreddit,
  author,
}: IProps): JSX.Element => {
  return (
    <li className="PostItem">
      {title}
      <br />
      <Link to={`/${subreddit}`}>{subreddit}</Link>
      <br />
      {author}
    </li>
  );
};

export default PostItem;
