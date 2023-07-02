import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IData {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const initialState: IData[] = [];

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IData[]>) => {
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
