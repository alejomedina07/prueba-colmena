import { Suspense }  from 'react';
import FormPost      from '@/app/posts/create/components/formPost';
import { ViewTitle } from '@/app/components/share/viewTitle';
import Link                  from 'next/link';
import { Button, Container } from '@mui/material';
import HeaderPost            from '@/app/posts/components/headerPost';

function UpdatePost() {
  return (
    <>
      <HeaderPost />
      <Container maxWidth="xl" className="p-4">
        <ViewTitle title={'Crear un nuevo Post'}>
          <Link href="/posts">
            <Button variant="outlined">Lista de Post</Button>
          </Link>
        </ViewTitle>
        <Suspense >
          <FormPost />
        </Suspense>
      </Container>
    </>
  )
}

export default UpdatePost