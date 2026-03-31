import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";

import { todosApi } from "../services/todosAPI";

import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      todosApi.middleware,
    )
});

setupListeners(store.dispatch);