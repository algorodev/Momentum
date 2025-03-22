import CallToAction from '@components/CallToAction.tsx'
import { render, screen } from '@testing-library/react'
import { LinkProps } from 'react-router-dom'

vi.mock('react-router-dom', () => ({
	Link: ({to, children, className}: LinkProps) => (
		<a href={to.toString()} className={className}>
			{children}
		</a>
	)
}))

describe('CallToAction component', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the primary call-to-action button', () => {
		render(<CallToAction type='primary' path='/'>Click me</CallToAction>)
		const button = screen.getByRole('link', { name: /Click me/i })
		expect(button).toHaveAttribute('href', '/')
		expect(button).toHaveClass('bg-primary hover:bg-primary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn')
	})

	it('renders the secondary call-to-action button', () => {
		render(<CallToAction type='secondary' path='/'>Click me</CallToAction>)
		const button = screen.getByRole('link', { name: /Click me/i })
		expect(button).toHaveAttribute('href', '/')
		expect(button).toHaveClass('bg-secondary hover:bg-secondary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn')
	})

	it('renders the tertiary call-to-action button', () => {
		render(<CallToAction type='tertiary' path='/'>Click me</CallToAction>)
		const button = screen.getByRole('link', { name: /Click me/i })
		expect(button).toHaveAttribute('href', '/')
		expect(button).toHaveClass('border border-secondary text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn')
	})

	it('renders the link call-to-action button', () => {
		render(<CallToAction type='link' path='/'>Click me</CallToAction>)
		const button = screen.getByRole('link', { name: /Click me/i })
		expect(button).toHaveAttribute('href', '/')
		expect(button).toHaveClass('text-primary hover:underline typography-md-semibold')
	})

	it('renders the custom class name', () => {
		render(<CallToAction type='primary' path='/' className='custom-class'>Click me</CallToAction>)
		const button = screen.getByRole('link', { name: /Click me/i })
		expect(button).toHaveAttribute('href', '/')
		expect(button).toHaveClass('bg-primary hover:bg-primary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn custom-class')
	})
})
