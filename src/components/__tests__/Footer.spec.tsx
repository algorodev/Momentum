import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

vi.mock('@components/CallToAction', () => ({
	default: ({path, type, children}) => (
		<a href={path} className='text-text-secondary hover:text-text-primary transition-colors'>
			{children}
		</a>
	)
}))

describe('Footer component', () => {
	beforeEach(() => {
		render(<Footer />)
	})

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the main title and description', () => {
		// Check for the homepage link (the site title)
		const homeLink = screen.getByRole('link', { name: /Momentum/i })
		expect(homeLink).toHaveAttribute('href', '/')

		// Check for the description text
		const description = screen.getByText(/Build better habits, every day\./i)
		expect(description).toBeInTheDocument()
	})

	it('renders resource links with correct href attributes', () => {
		const faqLink = screen.getByRole('link', { name: /FAQ/i })
		expect(faqLink).toHaveAttribute('href', '/faq')

		const blogLink = screen.getByRole('link', { name: /Blog/i })
		expect(blogLink).toHaveAttribute('href', '/blog')

		const helpLink = screen.getByRole('link', { name: /Help Center/i })
		expect(helpLink).toHaveAttribute('href', '/help')
	})

	it('renders company links with correct href attributes', () => {
		const aboutLink = screen.getByRole('link', { name: /About Us/i })
		expect(aboutLink).toHaveAttribute('href', '/about')

		const contactLink = screen.getByRole('link', { name: /Contact/i })
		expect(contactLink).toHaveAttribute('href', '/contact')

		const careersLink = screen.getByRole('link', { name: /Careers/i })
		expect(careersLink).toHaveAttribute('href', '/careers')
	})

	it('renders legal links with correct href attributes', () => {
		const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i })
		expect(privacyLink).toHaveAttribute('href', '/privacy')

		const termsLink = screen.getByRole('link', { name: /Terms of Service/i })
		expect(termsLink).toHaveAttribute('href', '/terms')
	})
})
