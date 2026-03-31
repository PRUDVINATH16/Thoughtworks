import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/todos" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => '/',
    }),
    addTodoItem: builder.mutation({
      query: (todo) => ({
        url: '/',
        method: 'POST',
        body: todo
      }),
    }),
    deleteTodoItem: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      })
    })
  })
});

export const {
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useAddTodoItemMutation,
  useDeleteTodoItemMutation,
} = todosApi;