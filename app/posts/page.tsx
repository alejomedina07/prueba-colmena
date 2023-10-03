import { Button, Container, Divider } from '@mui/material';
import Link                           from 'next/link';
import { ViewTitle }                  from '@/app/components/share/viewTitle';
import PostsList                      from '@/app/posts/components/postsList';
import { Suspense }                   from 'react';
import HeaderPost                     from '@/app/posts/components/headerPost';

function Page(  ) {
  return (
    <>
      <HeaderPost />
      <Container maxWidth="xl" className="p-4">
        <ViewTitle title={'Lista de Posts'}>
          <Link href="/posts/create">
            <Button variant="outlined">Crear Post</Button>
          </Link>
        </ViewTitle>
        <Divider />
        <Suspense >
          <PostsList />
        </Suspense>
      </Container>

    </>
  );
}

export default Page

