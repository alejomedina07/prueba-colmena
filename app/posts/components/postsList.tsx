'use client';

import { useGetPostsQuery } from '@/app/store/api/jsonPlaceholderApi';
import { Skeleton }         from '@mui/material';
import { Post }             from '@/app/posts/dto/Post';
import { useState }         from 'react';
import Pagination           from '@/app/components/pagination/pagination';
import PostCard             from '@/app/posts/components/postCard';

const PostsList = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { data, isLoading } = useGetPostsQuery('')

  return (
    <div className="mt-4">
      <Pagination page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} count={data?.length || 0}/>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 xs:gap-1 sm:gap-2 md:gap-3">
        {!!isLoading && (
          [...Array(10).keys()].map( (id:number) =>
            <Skeleton
              variant="rectangular"
              className="flex-1 h-40 p-2 m-4"
              height={150}
              key={`option-${id}`}
            />
          )
        )}

        { !!data?.length &&
          data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((post: Post) => {
          if (!isLoading) return (
            <PostCard post={post} key={`post-${post.id}`}/>
          )
        })}
      </div>



    </div>
  );
}


export default PostsList;