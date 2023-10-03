import { createApi }      from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Post }           from '@/app/posts/dto/Post';

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.API_URL,
  baseUrl: 'https://jsonplaceholder.typicode.com/',
});


export const jsonPlaceholderApi = createApi({

  reducerPath: 'jsonPlaceholderApi',

  baseQuery,


  endpoints: (build)=> ({

    getPosts: build.query({
      query: ()=> '/posts'
    }),
    getPost: build.query({
      query: ( id )=> `/posts/${id}`
    }),
    addPost: build.mutation<Post, Post>({
      query: ( body: Post ) => ({
        url:'/posts',
        method: 'POST',
        body,
      }),
    }),
    updatePost: build.mutation<Post, Post>({
      query: ( body: Post ) => ({
        url:`/posts/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
    deletePost: build.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),

  })

})

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = jsonPlaceholderApi;

