import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../services/todoAPI";
import { authApi } from "../services/authAPI";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todosApi.middleware, authApi.middleware)
});

setupListeners(store.dispatch);