import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
	isLoggedIn: boolean
	user: { email: string; password: string } | null
}

const initialState: AuthState = {
	isLoggedIn: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<{ email: string; password: string }>) {
			state.isLoggedIn = true
			state.user = action.payload
		},
	},
})

export const { login } = authSlice.actions
export default authSlice.reducer
