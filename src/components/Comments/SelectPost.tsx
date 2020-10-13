import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setShowComments } from '../../store/ui/ui';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

const SelectPost: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const hideComments = (): void => {
    dispatch(setShowComments(false));
  };
  useEffect(hideComments, []);
  return (
    <LoadingScreen
      className="SelectPost"
      text="Select a post"
      state="disabled"
    />
  );
};

export default SelectPost;
