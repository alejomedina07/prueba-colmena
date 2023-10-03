"use client";
import { store }              from '@/app/store/store';
import { Provider }           from 'react-redux';
import React                  from 'react';
import { ConfirmationDialog } from '@/app/components/notifications/confirmationDialog';
import SnackbarNotification   from '@/app/components/notifications/snackbarNotification';

interface ProvidesProps {
  children: React.ReactNode
}

export const Provides = ( props: ProvidesProps ) => {
  const {children} = props;
  return (
    <Provider store={store}>
      <ConfirmationDialog />
      <SnackbarNotification />
      {children}
    </Provider>
  );
}
