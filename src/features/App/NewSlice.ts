import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface AppSliceType {
  count: number;
}

const initialState: AppSliceType = {
  count: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count++;
    },
    dicrementCount: (state) => {
      state.count--;
    },
  },
});

export const AppSliceReducer = appSlice.reducer;
export const { incrementCount, dicrementCount } = appSlice.actions;
export const selectCount = (state: RootState) => state.app.count;
