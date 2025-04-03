import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500'
console.log('API_URL', API_URL)

export const apiRequest = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
	const response = await fetch(`${API_URL}${url}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`${response.status} ${response.statusText}: ${errorText}`)
	}

	return response.json()
}
