import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useDialogs                                                    from '@/app/store/hooks/dialogs/useDialogs';

export const ConfirmationDialog = () => {
  const { message, onConfirm, dialogStatus, onClose, title, closeConfirmationDialog } = useDialogs();

  const handleCancel = () => {
    closeConfirmationDialog();
    if(onClose) onClose();
  };

  const handleOk = () => {
    closeConfirmationDialog();
    onConfirm();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      open={dialogStatus}
    >
      <DialogTitle color='primary'>{title}</DialogTitle>
      <DialogContent dividers>{message}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>No</Button>
        <Button onClick={handleOk}>Si</Button>
      </DialogActions>
    </Dialog>
  )
};
