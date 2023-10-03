'use client';
import { useAddPostMutation, useGetPostQuery, useUpdatePostMutation } from '@/app/store/api/jsonPlaceholderApi';
import { Post }                                                       from '@/app/posts/dto/Post';
import { yupResolver }                                                from '@hookform/resolvers/yup';
import { postSchema }                                                 from '@/app/posts/create/validation/PostSchema';
import { useForm, Controller }                                        from 'react-hook-form';
import { TextField, Button, Paper }                                   from '@mui/material';
import useSnackbar                                                    from '@/app/store/hooks/snackbar/useSnackbar';
import { useEffect, useState }  from 'react';
import { useParams, useRouter } from 'next/navigation';


const FormPost = () => {
  const router = useRouter();
  const params = useParams();
  const { postId } = params;

  const [defaultValues, setDefaultValues] = useState( { userId: 1 } );
  const { data } = useGetPostQuery(postId, { skip: !postId, })

  useEffect( () => {
    if (data) {
      setDefaultValues(data)
      reset(data)
    }
  }, [data] );


  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const { openSnackbarAction } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Post, Post>({
    defaultValues,
    resolver: yupResolver(postSchema),
  });

  const onSubmit = async (data: any) => {
    let message = 'Creado exitosamente', type = 'success';
    try {
      if (data.id)  await updatePost(data).unwrap();
      else await addPost(data).unwrap();
      router.push('/posts');
    } catch (e) {
      message = 'Error al guardar';
      type = 'error';
    }finally {
      openSnackbarAction({ message, type, });
    }
  };

  return (
    <Paper elevation={3} className="flex-1 p-6 m-1 mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <Controller
            name="userId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="User ID"
                variant="outlined"
                fullWidth
                error={!!errors.userId}
                helperText={errors.userId?.message}
              />
            )}
          />
        </div>
        <div className="my-4">
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
        </div>
        <div className="my-4">
          <Controller
            name="body"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Body"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                maxRows={6}
                error={!!errors.body}
                helperText={errors.body?.message}
              />
            )}
          />
        </div>
        <div className="my-4">
          <Button type="submit" variant="outlined" color="primary">
            Enviar
          </Button>
        </div>
      </form>
    </Paper>
  );
}
export default FormPost;