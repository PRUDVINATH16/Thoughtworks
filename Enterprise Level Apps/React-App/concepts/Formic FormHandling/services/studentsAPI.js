import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/students" }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => '/',
    }),
    addStudent: builder.mutation({
      query: (student) => ({
        url: '/',
        method: 'POST',
        body: student
      }),
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      })
    })
  })
});

export const {
  useLazyGetAllStudentsQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;