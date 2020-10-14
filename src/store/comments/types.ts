import { IRedditPostData, IRedditPost } from '../api-types';

export interface ICommentsReducer {
  loading: boolean;
  postLoaded: boolean;
  post: IRedditPostData | null;
  commentsLoaded: boolean;
  error: boolean;
  comments: IRedditPost[] | null;
}
