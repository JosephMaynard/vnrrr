import { IRedditPostData, IRedditPost } from '../api-types/post-types';

export interface IPostsReducer {
  loading: boolean;
  error: boolean;
  posts: IRedditPostData[];
  postIDs: string[];
  currentSubreddit?: string;
  keepCurrentSubreddit: boolean;
  isFrontPage?: boolean;
}

export interface IRedditPostsResponce {
  data: {
    after: string | null;
    before: string | null;
    children: IRedditPost[];
    dist: number;
    modhash: string;
  };
  kind: string;
}
