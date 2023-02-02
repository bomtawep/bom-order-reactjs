import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import reducers from './reducers';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    reducers: reducers,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;