'use client';
import { Button, IconButton, Paper } from '@mui/material';
import Link                          from 'next/link';
import { Post }                      from '@/app/posts/dto/Post';
import DeleteIcon                    from '@mui/icons-material/Delete';
import useDialogs                    from '@/app/store/hooks/dialogs/useDialogs';
import { useDeletePostMutation }     from '@/app/store/api/jsonPlaceholderApi';
import { useState }                  from 'react';
import useSnackbar                   from '@/app/store/hooks/snackbar/useSnackbar';


const PostCard = (props:Post) => {
  const { post } = props;
  const { openConfirmationDialog } = useDialogs();
  const [deleteId, setDeleteId] = useState( 0 );
  const [deletePost] = useDeletePostMutation();
  const { openSnackbarAction } = useSnackbar();

  const onConfirm = async () => {
    let message = 'Eliminado exitosamente', type = 'success';
    try {
      await deletePost(deleteId);
    } catch (e) {
      message = 'Error al guardar';
      type = 'error';
    }finally {
      setDeleteId(0);
      openSnackbarAction({ message, type, });
    }
  }


  const onClickAction = (id: number) => {
    setDeleteId(id);
    openConfirmationDialog('Está seguro que desea eliminar este elemento?', onConfirm, false, 'Confirmar Eliminación')
  }

  return (
    <Paper
      elevation={3}
      className="flex-1 p-3 m-4"
      key={post.id}
    >
      <div className="h-full flex flex-col items-center">
        <b>{post.id}. { post.title }</b>
        <span className="flex-1" />
        <span className="my-2">  { post.body } </span>
        <span className="flex-1" />
        <div className="!w-full flex flex-row items-center">
          <Link className="flex-1 mr-2" href={`/posts/${post.id}`}>
            <Button className="!w-full"  variant="outlined"> Ver Post </Button>
          </Link>
          <IconButton aria-label="delete" color="error" onClick={()=> onClickAction(post.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default PostCard