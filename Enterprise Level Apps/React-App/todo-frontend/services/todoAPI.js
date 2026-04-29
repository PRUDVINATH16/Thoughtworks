import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/todo" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => '/todos',
    }),
    addTodoItem: builder.mutation({
      query: (todo) => ({
        url: '/add',
        method: 'POST',
        body: { task: todo }
      }),
    }),
    deleteTodoItem: builder.mutation({
      query: (id) => ({
        url: `/delete`,
        method: 'POST',
        body: { todoId: id }
      })
    })
  })
});

export const {
  useLazyGetAllTodosQuery,
  useAddTodoItemMutation,
  useDeleteTodoItemMutation,
} = todosApi;