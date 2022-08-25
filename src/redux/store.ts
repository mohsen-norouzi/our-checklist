import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './slices/api-slice';

import appReducer from './slices/app-slice';
import teamReducer from './slices/team-slice';
import userReducer from './slices/user-slice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: appReducer,
    user: userReducer,
    team: teamReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware, apiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
