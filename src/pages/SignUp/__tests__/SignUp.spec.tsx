import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from '@pages/SignUp/SignUp.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('SignUpPage', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	beforeEach(() => {
		render(
			<MemoryRouter>
				<SignUp/>
			</MemoryRouter>
		)
	})

	it('renders the sign up form with all required elements', () => {
		const header = screen.getByRole('heading', { name: /create an account/i })
		expect(header).toBeInTheDocument()
		const nameInput = screen.getByPlaceholderText(/john doe/i)
		expect(nameInput).toBeInTheDocument()
		const emailInput = screen.getByPlaceholderText(/you@example\.com/i)
		expect(emailInput).toBeInTheDocument()
		const passwordInputs = screen.getAllByPlaceholderText('********')
		expect(passwordInputs).toHaveLength(2)
		const signUpButton = screen.getByRole('button', { name: /sign up/i })
		expect(signUpButton).toBeInTheDocument()
		const loginLink = screen.getByRole('link', { name: /log in/i })
		expect(loginLink).toBeInTheDocument()
		expect(loginLink).toHaveAttribute('href', '/login')
	})

	it('displays an error when submitted with empty fields', async () => {
		const user = userEvent.setup()
		const signUpButton = screen.getByRole('button', { name: /sign up/i })
		await user.click(signUpButton)
		const errorMessage = await screen.findByText(/please fill out all fields\./i)
		expect(errorMessage).toBeInTheDocument()
	})

	it('displays an error when passwords do not match', async () => {
		const user = userEvent.setup()
		await user.type(screen.getByPlaceholderText(/john doe/i), 'John Doe')
		await user.type(screen.getByPlaceholderText(/you@example\.com/i), 'john@example.com')
		const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText('********')
		await user.type(passwordInput, 'password123')
		await user.type(confirmPasswordInput, 'password321')
		const signUpButton = screen.getByRole('button', { name: /sign up/i })
		await user.click(signUpButton)
		const errorMessage = await screen.findByText(/passwords do not match\./i)
		expect(errorMessage).toBeInTheDocument()
	})

	it('submits the form successfully with valid inputs', async () => {
		const user = userEvent.setup()
		const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
		await user.type(screen.getByPlaceholderText(/john doe/i), 'John Doe')
		await user.type(screen.getByPlaceholderText(/you@example\.com/i), 'john@example.com')
		const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText('********')
		await user.type(passwordInput, 'password123')
		await user.type(confirmPasswordInput, 'password123')
		const signUpButton = screen.getByRole('button', { name: /sign up/i })
		await user.click(signUpButton)
		expect(screen.queryByText(/please fill out all fields\./i)).not.toBeInTheDocument()
		expect(screen.queryByText(/passwords do not match\./i)).not.toBeInTheDocument()
		expect(consoleSpy).toHaveBeenCalledWith('Signing up:', {
			name: 'John Doe',
			email: 'john@example.com',
			password: 'password123'
		})

		consoleSpy.mockRestore()
	})
})
