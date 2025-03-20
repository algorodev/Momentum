import Button from '@components/Button.tsx'
import ChevronDown from '@components/Icons/ChevronDown.tsx'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders a primary button', () => {
		render(<Button type='button' variant='primary'>Click me</Button>)
		const button = screen.getByRole('button', { name: /Click me/i })
		expect(button).toHaveClass('inline-flex gap-0.5 items-center justify-center typography-lg-semibold cursor-pointer bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded transition-colors')
	})

	it('renders a secondary button', () => {
		render(<Button type='button' variant='secondary'>Click me</Button>)
		const button = screen.getByRole('button', { name: /Click me/i })
		expect(button).toHaveClass('inline-flex gap-0.5 items-center justify-center typography-lg-semibold cursor-pointer bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded transition-colors')
	})

	it('renders a button with custom class name', () => {
		render(<Button type='button' variant='primary' className='custom-class'>Click me</Button>)
		const button = screen.getByRole('button', { name: /Click me/i })
		expect(button).toHaveClass('inline-flex gap-0.5 items-center justify-center typography-lg-semibold cursor-pointer bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded transition-colors custom-class')
	})

	it('renders a button with icon', () => {
		render(<Button type='button' variant='primary'>Click me<span className='w-4 h-4 rotate-270'><ChevronDown /></span></Button>)
		const button = screen.getByRole('button', { name: /Click me/i })
		expect(button).toContainHTML('<svg')
	})
})
