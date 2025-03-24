import authSlice from '@store/auth.slice.ts'

const rootReducer = () => ({
	auth: authSlice,
})

export default rootReducer
