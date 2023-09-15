import { createSlice } from '@reduxjs/toolkit';

const initialState = 'black';

export const textColorSlice = createSlice({
  name: 'color',
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = textColorSlice.actions;

export default textColorSlice.reducer;
