import { IRedditPostData, IRedditPost } from '../api-types';

export type TSortCommentsBy =
  | ''
  | 'best'
  | 'top'
  | 'new'
  | 'controversial'
  | 'old';

export interface ICommentsReducer {
  postLoaded: boolean;
  post: IRedditPostData | null;
  commentsLoaded: boolean;
  comments: IRedditPost[] | null;
  error: boolean;
  loadingMoreComments: boolean;
  commentsSort: TSortCommentsBy;
  postId?: string;
}
