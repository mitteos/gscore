import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userReducer } from "store/features/user"


const rootReducer = combineReducers({
	user: userReducer
})

const persistConfig = {
	key: "root",
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>