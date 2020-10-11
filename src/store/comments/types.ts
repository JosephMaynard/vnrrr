import { TRedditCommentsResponse } from '../api-types';

export interface ICommentsReducer {
  loading: boolean;
  error: boolean;
  comments: TRedditCommentsResponse | null;
}
