import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.slice.ts'
import { loadState, saveState } from './persist.ts'

const preloadedState = loadState()

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	preloadedState,
})

store.subscribe(() => {
	saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
