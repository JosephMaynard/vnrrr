import React, { useMemo } from 'react';
import sanitizeHtml from 'sanitize-html';

export interface IProps {
  html: string;
  className?: string;
}

const HTMLBlock: React.FC<IProps> = ({
  html,
  className,
}: IProps): JSX.Element => {
  const cleanHtml = useMemo(() => ({ __html: sanitizeHtml(html) }), [html]);
  return <div className={className} dangerouslySetInnerHTML={cleanHtml} />;
};

export default HTMLBlock;
