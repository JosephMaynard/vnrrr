import { IRedditPostData, IRedditPost } from '../api-types';

export interface ICommentsReducer {
  postLoaded: boolean;
  post: IRedditPostData | null;
  commentsLoaded: boolean;
  comments: IRedditPost[] | null;
  error: boolean;
  loadingMoreComments: boolean;
}
