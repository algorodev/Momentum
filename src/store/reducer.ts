import authSlice from '@store/auth/auth.slice.ts'

const rootReducer = () => ({
	auth: authSlice,
})

export default rootReducer
