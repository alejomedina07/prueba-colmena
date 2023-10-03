import { ViewTitle }                  from '@/app/components/share/viewTitle';
import Link                           from 'next/link';
import { Button, Container, Divider } from '@mui/material';
import FormPost                       from '@/app/posts/create/components/formPost';
import { Suspense }                   from 'react';
import HeaderPost                     from '@/app/posts/components/headerPost';

function CreatePost() {
  return (
    <>
      <HeaderPost />
      <Container maxWidth="xl" className="p-4">
        <ViewTitle title={'Crear un nuevo Post'}>
          <Link href="/posts">
            <Button variant="outlined">Lista de Post</Button>
          </Link>
        </ViewTitle>
        <Divider />
        <Suspense >
          <FormPost />
        </Suspense>
      </Container>
    </>
  );
}

export default CreatePost;