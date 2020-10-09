import React from 'react';

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
      {subreddit}
      <br />
      {author}
    </li>
  );
};

export default PostItem;
