import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";

import { todosApi } from "../services/todosAPI";
import { studentsApi } from "../services/studentsAPI";

import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      todosApi.middleware,
      studentsApi.middleware,
    )
});

setupListeners(store.dispatch);