import { all } from 'redux-saga/effects'
import authSaga from './auth/auth.saga.ts'

export default function* saga() {
	yield all([
		authSaga(),
	])
}
