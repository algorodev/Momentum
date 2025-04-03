import { LoginResponse, ProfileResponse, RegisterResponse } from '@store/auth/auth.actions.ts'
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

export const profile =
	async (userId: string, token: string): Promise<ProfileResponse> =>
		await apiRequest<ProfileResponse>(`/api/auth/profile/${userId}`, {
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
			}
		})
