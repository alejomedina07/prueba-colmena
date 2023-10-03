'use client';
import { Alert, Slide, SlideProps, Snackbar } from '@mui/material';
import useSnackbar                            from '@/app/store/hooks/snackbar/useSnackbar';

const vertical= 'bottom', horizontal='right';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}


function SnackbarNotification(  ) {
  const { open, closeSnackbarAction, message, type } = useSnackbar();
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={106000}
      onClose={closeSnackbarAction}
      key={vertical + horizontal}
      TransitionComponent={SlideTransition}
    >
      <Alert severity={ type } sx={{ width: '100%' }} variant="filled" onClose={closeSnackbarAction}>
        { message }
      </Alert>
    </Snackbar>
  );
}

export default SnackbarNotification;