import { takeLatest, call, put } from 'redux-saga/effects'
import { login, profile, register } from '../../api/auth.api.ts'
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	loginFailureAction,
	loginRequestAction,
	LoginResponse,
	loginSuccessAction,
	profileFailureAction,
	ProfileResponse,
	profileSuccessAction,
	REGISTER_REQUEST,
	registerFailureAction,
	registerRequestAction,
	RegisterResponse,
	registerSuccessAction,
} from '@store/auth/auth.actions.ts'
import { queryClient } from '../../api/api.ts'

function* handleLogin(action: ReturnType<typeof loginRequestAction>) {
	try {
		const data: LoginResponse = yield call(() =>
			queryClient.fetchQuery({
				queryKey: ['login', action.payload],
				queryFn: () => login(action.payload),
			}))
		yield put(loginSuccessAction(data))
	} catch (error: any) {
		yield put(loginFailureAction({ error: error.message }))
	}
}

function* handleRegister(action: ReturnType<typeof registerRequestAction>) {
	try {
		const data: RegisterResponse = yield call(() =>
			queryClient.fetchQuery({
				queryKey: ['register', action.payload],
				queryFn: () => register(action.payload),
			}))
		yield put(registerSuccessAction(data))
	} catch (error: any) {
		yield put(registerFailureAction({ error: error.message }))
	}
}

function* handleProfile(action: ReturnType<typeof  loginSuccessAction>) {
	try {
		const data: ProfileResponse = yield call(() =>
			queryClient.fetchQuery({
				queryKey: ['profile', action.payload],
				queryFn: () => profile(action.payload.id, action.payload.token),
			}))
		yield put(profileSuccessAction(data))
	} catch (error: any) {
		yield put(profileFailureAction({ error: error.message }))
	}
}

export default function* authSaga() {
	yield takeLatest(LOGIN_REQUEST, handleLogin)
	yield takeLatest(REGISTER_REQUEST, handleRegister)
	yield takeLatest(LOGIN_SUCCESS, handleProfile)
}
