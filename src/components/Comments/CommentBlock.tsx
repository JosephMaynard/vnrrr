import React, { useState } from 'react';

import { IRedditPost } from '../../store/api-types';

import HTMLBlock from '../HTMLBlock/HTMLBlock';

export interface IProps {
  comment: IRedditPost;
  level?: number;
}

const CommentBlock: React.FC<IProps> = ({
  comment,
  level = 0,
}: IProps): JSX.Element => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };
  return (
    <div className="CommentBlock">
      <div className="CommentBlock_header" onClick={toggleExpanded}>
        {comment.data.author}
      </div>
      {comment.data.body_html && <HTMLBlock html={comment.data.body_html} />}
      {comment.data.replies && expanded && (
        <div className="CommentBlock_replies">
          <button
            type="button"
            className={`CommentBlock_replies_button CommentBlock_replies_button_style${
              level % 2
            }`}
            onClick={toggleExpanded}
          />
          {comment.data.replies.data.children.map(
            (reply): JSX.Element => (
              <CommentBlock
                key={reply.data.name}
                comment={reply}
                level={level + 1}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CommentBlock;
