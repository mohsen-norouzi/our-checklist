// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Category, Response, Team, Todo } from 'model'

import { RootState } from 'redux/store'

const token = 'd0dbacc56009e884b2951bab695a507a49460d5df757891d005e4320e89374f8c7bd27b16209ad5565cd74f21b742d2d8bb26a5bdf23792824d1f73ad0df8bc4a44e04292a1ea5b02ae74da8483dbe792faaa0575ed3c95401237602d6d554f816bde21901bae9f6dfb8b4318f99d41c3db67c1bebcb84dc69952a7393746b7a'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token

      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      headers.set('authorization', `Bearer ${token}`)
      // }

      return headers
    },
  }),
  tagTypes: ['Teams', 'Categories', 'Todos'],
  endpoints: (builder) => ({
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

    // todo
    getTodosByCategory: builder.query<Response<Todo[]>, number>({
      query: (categoryId) => `/todos?filters[category][id][$eq]=${categoryId}`,
      providesTags: ['Todos']
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
  }),
})

export const {
  useGetTeamsQuery,

  useGetCategoriesQuery,

  useGetTodosByCategoryQuery,
  useUpdateTodoMutation
} = apiSlice;