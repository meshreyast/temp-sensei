import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./slice/rootReducer";
import { rootSaga } from "./sagas";

import storage from 'redux-persist-indexeddb-storage';
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: storage('myDB')
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);