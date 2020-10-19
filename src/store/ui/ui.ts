import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUIReducer } from './types';

const initialState: IUIReducer = {
  sideMenuOpen: false,
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
    setSideMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.sideMenuOpen = action.payload;
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

export const {
  setShowComments,
  setDarkMode,
  setScreenProperties,
  setSideMenuOpen,
} = ui.actions;

export default ui;
