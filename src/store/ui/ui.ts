import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IUIReducer } from './types';

const initialState: IUIReducer = {
  showComments: false,
  darkMode: false,
  cssBreakpoint: 'not-set',
  screenWidth: 0,
  screenHeight: 0,
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowComments: (state, action: PayloadAction<boolean>) => {
      state.showComments = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setScreenProperties: (
      state,
      action: PayloadAction<{
        cssBreakpoint: string;
        screenWidth: number;
        screenHeight: number;
      }>
    ) => {
      state.cssBreakpoint = action.payload.cssBreakpoint;
      state.screenWidth = action.payload.screenWidth;
      state.screenHeight = action.payload.screenHeight;
    },
  },
});

export const { setShowComments, setDarkMode, setScreenProperties } = ui.actions;

export default ui;
