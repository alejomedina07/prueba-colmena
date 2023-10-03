import { combineReducers } from '@reduxjs/toolkit';
import dialogs from './dialogsSlice';
import snackbar from './snackbarSlice';

const coreReducers = combineReducers({
  dialogs,
  snackbar,
});

export default coreReducers;