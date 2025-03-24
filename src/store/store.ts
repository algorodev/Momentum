import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/reducer.ts'
import { AuthReducer } from './auth.slice.ts'
import { loadState, saveState } from './persist.ts'

const preloadedState = loadState()

type Reducers = {
	auth: AuthReducer
}

const store = configureStore<Reducers>({
	reducer: rootReducer(),
	preloadedState,
})

store.subscribe(() => {
	saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
