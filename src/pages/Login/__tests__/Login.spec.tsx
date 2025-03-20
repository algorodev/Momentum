import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '@pages/Login/Login.tsx'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@components/CallToAction', () => ({
	default: ({path, type, children}) => (
		<a href={path} className='text-text-secondary hover:text-text-primary transition-colors'>
			{children}
		</a>
	)
}))

describe('LoginPage', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	beforeEach(() => {
		render(
			<MemoryRouter>
				<Login/>
			</MemoryRouter>
		)
	})

	it('renders the login page with form elements', () => {
		const emailInput = screen.getByText(/Email/i)
		expect(emailInput).toBeInTheDocument()
		const passwordInput = screen.getByText(/Password/i)
		expect(passwordInput).toBeInTheDocument()
		const submitButton = screen.getByRole('button', { name: /Log in/i })
		expect(submitButton).toBeInTheDocument()
		const signUpLink = screen.getByRole('link', { name: /Sign up/i })
		expect(signUpLink).toBeInTheDocument()
		expect(signUpLink).toHaveAttribute('href', '/signup')
	})

	it('displays an error message when submitted with empty fields', async () => {
		const user = userEvent.setup()
		const submitButton = screen.getByRole('button', { name: /Log in/i })
		await user.click(submitButton)
		const errorMessage = screen.getByText(/please fill out all fields\./i)
		expect(errorMessage).toBeInTheDocument()
	})

	it('submits the form successfully with valid inputs', async () => {
		const user = userEvent.setup()
		const consoleSpy = vi.spyOn(console, 'log')
		const emailInput = screen.getByPlaceholderText(/you@example\.com/i)
		const passwordInput = screen.getByPlaceholderText('********')
		await user.type(emailInput, 'test@example.com')
		await user.type(passwordInput, 'securepassword')
		const submitButton = screen.getByRole('button', { name: /log in/i })
		await user.click(submitButton)
		const errorMessage = screen.queryByText(/please fill out all fields\./i)
		expect(errorMessage).not.toBeInTheDocument()
		expect(consoleSpy).toHaveBeenCalledWith('Logging in:', {
			email: 'test@example.com',
			password: 'securepassword',
		})

		consoleSpy.mockRestore()
	})
})
