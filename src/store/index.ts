import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import reducer from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
