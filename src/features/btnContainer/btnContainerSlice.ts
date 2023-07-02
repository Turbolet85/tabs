import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;
export const btnContainerSlice = createSlice({
  name: 'currentItem',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setCurrentItem } = btnContainerSlice.actions;
