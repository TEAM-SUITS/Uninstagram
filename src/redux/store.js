import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './storage/rootReducer';

// persist
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

/* persist store------------------------------------------------------------ */

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'currentUser',
    'post'
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* store--------------------------------------------------------------- */

const store = createStore(persistedReducer);
const persistor = persistStore(store);

/* store provider wrapper component----------------------------------------------------- */

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
};
