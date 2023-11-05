import {
  StateFromReducersMapObject,
  combineReducers,
  configureStore,
}                    from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PersistConfig
}                    from 'redux-persist';
import storage       from 'redux-persist/lib/storage';
import { modeSlice } from './slices/modeSlice';
import { authSlice } from './slices/authSlice';
import { api }       from './api';

export const reducers = {
  mode: modeSlice.reducer,
  auth: authSlice.reducer,
  api : api.reducer
};

export type IAppState = StateFromReducersMapObject<typeof reducers>;

export const rootReducer = combineReducers(reducers);

export const persistConfig: PersistConfig<IAppState> = {
  key      : 'root',
  whitelist: ['auth', 'mode'],
  storage
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer   : persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }).concat(api.middleware)
});

export const persistor = persistStore(store);
