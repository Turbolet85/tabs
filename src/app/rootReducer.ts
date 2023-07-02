import { combineReducers } from '@reduxjs/toolkit';

import { btnContainerSlice } from '../features/btnContainer/btnContainerSlice';
import { dataSlice } from '../features/data/dataSlice';
import { isLoadingSlice } from '../features/data/isLoadingSlice';

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  setCurrentItem: btnContainerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
