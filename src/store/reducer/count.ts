import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface countState {
  count: number;
}

const initialState = {
  count: 0,
} as countState;

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {},
});

export default countSlice.reducer;