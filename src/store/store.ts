import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/reducer.ts'
import { AuthReducer } from './auth/auth.slice.ts'
import { loadState, saveState } from './persist.ts'
import createSagaMiddleware from 'redux-saga'
import saga from './saga.ts'

type Reducers = {
	auth: AuthReducer
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore<Reducers>({
	reducer: rootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
	preloadedState: loadState(),
})

sagaMiddleware.run(saga)

store.subscribe(() => {
	saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
