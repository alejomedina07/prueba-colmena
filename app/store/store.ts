import { configureStore }     from '@reduxjs/toolkit';
import core                   from './slices';
import { jsonPlaceholderApi } from '@/app/store/api/jsonPlaceholderApi';

export const store = configureStore({
  reducer: {
    core,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(jsonPlaceholderApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;