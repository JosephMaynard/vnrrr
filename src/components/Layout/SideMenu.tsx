import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

import { TState } from '../../store';
import { getPosts, clearPosts, setPostsSort } from '../../store/posts/posts';
import {
  getComments,
  clearComments,
  setCommentsSort,
} from '../../store/comments/comments';

import IconButton from '../IconButton/IconButton';
import SortSelect from './SortSelect';

export interface IProps {
  close: () => void;
}

export type TRef = HTMLDivElement;

const SideMenu = React.forwardRef<TRef, IProps>(
  ({ close }: IProps, ref): JSX.Element => {
    const dispatch = useDispatch();
    let history = useHistory();
    const {
      postsSort,
      commentsSort,
      postId,
      currentSubreddit,
      isFrontPage,
    } = useSelector((state: TState) => ({
      ...state.posts,
      ...state.comments,
    }));
    const handleSetPostsSort = (sortString: string): void => {
      if (!isFrontPage && postsSort !== sortString) {
        const [sort, t] = sortString.split(':');
        history.push({
          pathname: `/r/${currentSubreddit}${sort ? `/${sort}` : ''}`,
          search: t ? `?t=${t}` : undefined,
        });
        dispatch(setPostsSort(sortString));
        dispatch(clearPosts());
        dispatch(getPosts({ subreddit: currentSubreddit }));
      }
    };
    const handleSetCommentsSort = (sort: string): void => {
      if (commentsSort !== sort) {
        dispatch(setCommentsSort(sort));
        dispatch(clearComments());
        dispatch(getComments({ subreddit: currentSubreddit, postId }));
      }
    };
    return (
      <OutsideClickHandler onOutsideClick={close}>
        <div ref={ref} className="SideMenu">
          <IconButton
            icon="cancel"
            onClick={close}
            className="SideMenu_closeButton"
          />
          {!isFrontPage && (
            <SortSelect
              id="sortPosts"
              label="Sort Posts:"
              onChange={(e) => {
                handleSetPostsSort(e.target.value);
              }}
              value={postsSort}
            >
              <option value="">Best</option>
              <option value="hot">Hot</option>
              <optgroup label="Top">
                <option value="top:day">Day</option>
                <option value="top:week">Week</option>
                <option value="top:month">Month</option>
                <option value="top:year">Year</option>
                <option value="top:all">All time</option>
              </optgroup>
              <option value="new">New</option>
              <option value="rising">Rising</option>
              <option value="controversial">Controversial</option>
            </SortSelect>
          )}
          <SortSelect
            id="sortComments"
            label="Sort Comments:"
            onChange={(e) => {
              handleSetCommentsSort(e.target.value);
            }}
            value={commentsSort}
          >
            <option value="">Hot</option>
            <option value="best">Best</option>
            <option value="top">Top</option>
            <option value="new">New</option>
            <option value="rising">Rising</option>
            <option value="controversial">Controversial</option>
          </SortSelect>
          <Link to="/" onClick={close} className="SideMenu_link">
            Frontpage
          </Link>
          <Link to="/r/all" onClick={close} className="SideMenu_link">
            /r/all
          </Link>
          <Link to="/r/politics" onClick={close} className="SideMenu_link">
            /r/politics
          </Link>
          <Link
            to="/r/relationship_advice/"
            onClick={close}
            className="SideMenu_link"
          >
            /r/relationship_advice/
          </Link>
          <Link
            to="/r/javascript+programming+ProgrammerHumor+webdev"
            onClick={close}
            className="SideMenu_link"
          >
            Programming stuff
          </Link>
        </div>
      </OutsideClickHandler>
    );
  }
);

export default SideMenu;
