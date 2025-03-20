import FormControl from '@components/FormControl.tsx'
import { fireEvent, render, screen } from '@testing-library/react'

describe('FormControl component', () => {
	const onValueChange = vi.fn()
	const props = {
		name: 'email',
		label: 'Email',
		type: 'email',
		value: '',
		placeholder: 'Enter your email',
		onValueChange,
	}

	beforeEach(() => {
		render(<FormControl {...props} />)
	})

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the label and input field', () => {
		const label = screen.getByText(/Email/i)
		const input = screen.getByRole('textbox')
		expect(label).toBeInTheDocument()
		expect(input).toBeInTheDocument()
	})

	it('calls the onValueChange function when the input value changes', async () => {
		const input = screen.getByRole('textbox')
		const value = 'email@email.com'
		fireEvent.change(input, { target: { value: 'email@email.com' } })
		expect(onValueChange).toHaveBeenCalledWith(value)
	})
})
