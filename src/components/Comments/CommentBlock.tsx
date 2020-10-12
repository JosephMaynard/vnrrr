import React, { useState } from 'react';

import { IRedditPost } from '../../store/api-types';

import HTMLBlock from '../HTMLBlock/HTMLBlock';
import SVGIcon from '../SVGIcon/SVGIcon';

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
        <SVGIcon
          icon="down-arrow"
          className={`CommentBlock_icon${
            expanded ? '' : ' CommentBlock_icon_collapsed'
          }`}
        />
        <span className="CommentBlock_author">{comment.data.author}</span>
        <span className="CommentBlock_pts">{comment.data.ups} pts</span>
      </div>
      {expanded && (
        <>
          {comment.data.body_html && (
            <HTMLBlock
              className="CommentBlock_comment"
              html={comment.data.body_html}
            />
          )}
          <button
            type="button"
            className={`CommentBlock_button CommentBlock_button_style_${
              level % 3
            }`}
            onClick={toggleExpanded}
          />
          {comment.data.replies &&
            comment.data.replies.data.children &&
            comment.data.replies.data.children.length > 0 && (
              <div className="CommentBlock_replies">
                {comment.data.replies.data.children.map(
                  (reply): JSX.Element | null =>
                    reply.data.name ? (
                      <CommentBlock
                        key={reply.data.name}
                        comment={reply}
                        level={level + 1}
                      />
                    ) : null
                )}
              </div>
            )}
        </>
      )}
    </div>
  );
};

export default CommentBlock;
