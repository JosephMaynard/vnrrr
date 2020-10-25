import React, { useMemo } from 'react';
import sanitizeHtml from 'sanitize-html';

import './styles/index.scss';

export interface IProps {
  html: string;
  className?: string;
}

const HTMLBlock: React.FC<IProps> = ({
  html,
  className,
}: IProps): JSX.Element => {
  const cleanHtml = useMemo(() => ({ __html: sanitizeHtml(html) }), [html]);
  return (
    <div
      className={`HTMLBlock${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={cleanHtml}
    />
  );
};

export default HTMLBlock;
