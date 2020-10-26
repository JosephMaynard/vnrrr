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
  const cleanHtml = useMemo(
    () => ({
      __html: sanitizeHtml(html, {
        transformTags: {
          a: (tagName: string, attribs: { href: string }) => {
            if (attribs.href.substr(0, 1) === '/') {
              return {
                tagName: 'a',
                attribs: {
                  ...attribs,
                },
              };
            } else if (attribs.href.substr(0, 21) === 'https://reddit.com/r/') {
              return {
                tagName: 'a',
                attribs: {
                  href: attribs.href.substr(18),
                },
              };
            } else if (
              attribs.href.substr(0, 25) === 'https://www.reddit.com/r/'
            ) {
              return {
                tagName: 'a',
                attribs: {
                  href: attribs.href.substr(22),
                },
              };
            }
            return {
              tagName: 'a',
              attribs: {
                ...attribs,
                target: '_blank',
              },
            };
          },
        },
      }),
    }),
    [html]
  );
  return (
    <div
      className={`HTMLBlock${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={cleanHtml}
    />
  );
};

export default HTMLBlock;
