import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	LoginError,
	loginFailureAction,
	loginRequestAction,
	LoginResponse,
	loginSuccessAction,
	ProfileError,
	profileSuccessAction,
	profileFailureAction,
	ProfileResponse,
	RegisterError,
	registerFailureAction,
	registerRequestAction,
	registerSuccessAction,
} from '@store/auth/auth.actions.ts'

type AuthState = {
	isLoggedIn: boolean
	loggedUser: LoginResponse | null
	profile: ProfileResponse | null
	error: string | null
}

const initialState: AuthState = {
	isLoggedIn: false,
	loggedUser: null,
	profile: null,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginRequestAction, (state) => ({
			...state,
			error: null,
		}))
		builder.addCase(loginSuccessAction, (state, action: PayloadAction<LoginResponse>) => ({
			...state,
			isLoggedIn: true,
			loggedUser: action.payload,
		}))
		builder.addCase(loginFailureAction, (state, action: PayloadAction<LoginError>) => ({
			...state,
			error: action.payload.error,
		}))
		builder.addCase(registerRequestAction, (state) => ({
			...state,
			error: null,
		}))
		builder.addCase(registerSuccessAction, (state) => ({
			...state,
			error: null,
		}))
		builder.addCase(registerFailureAction, (state, action: PayloadAction<RegisterError>) => ({
			...state,
			error: action.payload.error,
		}))
		builder.addCase(profileSuccessAction, (state, action: PayloadAction<ProfileResponse>) => ({
			...state,
			profile: action.payload
		}))
		builder.addCase(profileFailureAction, (state, action: PayloadAction<ProfileError>) => ({
			...state,
			error: action.payload.error,
		}))
	},
})

export type AuthReducer = ReturnType<typeof authSlice.reducer>
export default authSlice.reducer
