import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./slice/rootReducer";

const persistConfig = {
    key: 'root',
    storage
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