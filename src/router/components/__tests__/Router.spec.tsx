import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Router from '@router/components/Router.tsx'

describe('Router Component', () => {
	it('renders Landing page for "/" route with landing layout', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Router />
			</MemoryRouter>
		)
		expect(screen.getByRole('heading', { level: 2, name: /features/i })).toBeInTheDocument()
	})

	it('renders SignUp page for "/signup" route', () => {
		render(
			<MemoryRouter initialEntries={['/signup']}>
				<Router />
			</MemoryRouter>
		)
		expect(screen.getByRole('heading', { level: 1, name: /create an account/i })).toBeInTheDocument()
	})

	it('renders Login page for "/login" route', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<Router />
			</MemoryRouter>
		)
		expect(screen.getByRole('heading', { level: 1, name: /log in/i })).toBeInTheDocument()
	})

	it('renders Landing page for "/home" route with non-landing layout', () => {
		render(
			<MemoryRouter initialEntries={['/home']}>
				<Router />
			</MemoryRouter>
		)
		expect(screen.getByRole('heading', { level: 2, name: /features/i })).toBeInTheDocument()
	})
})
