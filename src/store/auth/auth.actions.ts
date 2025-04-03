import { createAction } from '@reduxjs/toolkit'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export interface LoginPayload {
	email: string
	password: string
}

export interface LoginResponse {
	id: string
	token: string
}

export interface LoginError {
	error: string
}

export const loginRequestAction = createAction<LoginPayload>(LOGIN_REQUEST)
export const loginSuccessAction = createAction<LoginResponse>(LOGIN_SUCCESS)
export const loginFailureAction = createAction<LoginError>(LOGIN_FAILURE)

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export interface RegisterPayload {
	name: string
	email: string
	password: string
}

export interface RegisterResponse {
	id: string
	token: string
}

export interface RegisterError {
	error: string
}

export const registerRequestAction = createAction<RegisterPayload>(REGISTER_REQUEST)
export const registerSuccessAction = createAction<RegisterResponse>(REGISTER_SUCCESS)
export const registerFailureAction = createAction<RegisterError>(REGISTER_FAILURE)
