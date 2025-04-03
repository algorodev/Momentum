import { LoginResponse, RegisterResponse } from '@store/auth/auth.actions.ts'
import { apiRequest } from './api.ts'

export const login =
	async (payload: { email: string, password: string }): Promise<LoginResponse> =>
		await apiRequest<LoginResponse>('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify(payload),
		})

export const register =
	async (payload: { name: string, email: string, password: string }): Promise<RegisterResponse> =>
		await apiRequest('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(payload),
		})
