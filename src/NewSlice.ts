import { createSlice } from '@reduxjs/toolkit';

interface NewSliceType {
  test: string;
}

const initialState: NewSliceType = {
  test: '',
};

const newSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
});

export const newSliceReducer = newSlice.reducer;
