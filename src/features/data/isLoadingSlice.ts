import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = true;

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
