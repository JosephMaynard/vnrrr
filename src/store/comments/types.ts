import { IRedditPostData, IRedditPost } from '../api-types';

export interface ICommentsReducer {
  loading: boolean;
  error: boolean;
  comments: IRedditPostData | null;
}

export interface IRedditCommentsResponce {
  data: {
    after: string | null;
    before: string | null;
    children: IRedditPost[];
    dist: number;
    modhash: string;
  };
  kind: string;
}
