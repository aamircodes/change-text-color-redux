import { configureStore } from '@reduxjs/toolkit';
import textColorSlice from '../features/textColor/textColorSlice';

export const store = configureStore({
  reducer: textColorSlice,
});
