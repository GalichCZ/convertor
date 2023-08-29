import { configureStore } from '@reduxjs/toolkit';
import { currencyApi } from './currencyApi';
import hintAmountReducer from './slices/hintAmountSlice';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    hintAmount: hintAmountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
