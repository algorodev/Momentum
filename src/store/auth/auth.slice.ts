import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	LoginError,
	loginFailureAction,
	loginRequestAction,
	LoginResponse,
	loginSuccessAction, registerFailureAction, registerRequestAction, registerSuccessAction,
} from '@store/auth/auth.actions.ts'

type AuthState = {
	isLoggedIn: boolean
	loggedUser: { id: string; token: string } | null
	error: string | null
}

const initialState: AuthState = {
	isLoggedIn: false,
	loggedUser: null,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginRequestAction, (state) => {
			state.isLoggedIn = false
			state.loggedUser = null
			state.error = null
		})
		builder.addCase(loginSuccessAction, (state, action: PayloadAction<LoginResponse>) => {
			state.isLoggedIn = true
			state.loggedUser = action.payload
			state.error = null
		})
		builder.addCase(loginFailureAction, (state, action: PayloadAction<LoginError>) => {
			state.isLoggedIn = false
			state.loggedUser = null
			state.error = action.payload.error
		})
		builder.addCase(registerRequestAction, (state) => {
			state.isLoggedIn = false
			state.loggedUser = null
			state.error = null
		})
		builder.addCase(registerSuccessAction, (state) => {
			state.isLoggedIn = false
			state.loggedUser = null
			state.error = null
		})
		builder.addCase(registerFailureAction, (state, action) => {
			state.isLoggedIn = false
			state.loggedUser = null
			state.error = action.payload.error
		})
	},
})

export type AuthReducer = ReturnType<typeof authSlice.reducer>
export default authSlice.reducer
