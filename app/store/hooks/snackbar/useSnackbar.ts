import useGlobalStore                                      from '@/app/store/hooks/useGlobalStore';
import { closeSnackbar, openSnackbar } from '@/app/store/slices/snackbarSlice';

function useSnackbar() {
  const { dispatch, useTypedSelector } = useGlobalStore();

  const { open, message, type } = useTypedSelector(({ core }: any) => core.snackbar);

  const openSnackbarAction = ( data: { message: string; type: string } ) => dispatch( openSnackbar(data) )

  const closeSnackbarAction = () => dispatch( closeSnackbar() )

  return {
    open,
    message,
    type,
    openSnackbarAction,
    closeSnackbarAction
  };
}

export default useSnackbar;