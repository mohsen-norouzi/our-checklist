// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Category, Response, Team, Todo, User } from 'model'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('jwt');

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Teams', 'Categories', 'Todos'],
  endpoints: (builder) => ({
    // user
    login: builder.mutation<User, Partial<{ identifier: string, password: string }>>({
      query(loginData) {
        const { ...body } = loginData;
        return {
          url: 'auth/local',
          method: 'POST',
          body
        }
      },
    }),

    //team
    getTeams: builder.query<Response<Team[]>, void>({
      query: () => '/teams',
      providesTags: ['Teams']
    }),

    // category
    getCategories: builder.query<Response<Category[]>, void>({
      query: () => '/categories',
      providesTags: ['Categories']
    }),
    updateCategory: builder.mutation<Response<Category>, Partial<Category>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `categories/${id}`,
          method: 'PUT',
          body: {
            data: body,
          }
        }
      },
      invalidatesTags: ['Todos'],
    }),

    // todo
    getTodosByCategory: builder.query<Response<Todo[]>, number>({
      query: (categoryId) => `/todos?filters[category][id][$eq]=${categoryId}`,
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation<Response<Todo>, Partial<Todo>>({
      query(data) {
        const { ...body } = data;
        return {
          url: 'todos',
          method: 'POST',
          body: {
            data: body,
          }
        }
      },
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<Response<Todo>, Partial<Todo>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `todos/${id}`,
          method: 'PUT',
          body: {
            data: body,
          }
        }
      },
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<Response<Todo>, number>({
      query(id) {
        return {
          url: `todos/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const {
  // user
  useLoginMutation,

  // team
  useGetTeamsQuery,

  // category
  useGetCategoriesQuery,
  useUpdateCategoryMutation,

  // todo
  useGetTodosByCategoryQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = apiSlice;