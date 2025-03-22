import { render, screen } from '@testing-library/react'
import Price from '@pages/Landing/components/Price.tsx'

type CallToActionProps = {
	path: string
	type: 'primary' | 'secondary' | 'tertiary' | 'link'
	children: string
}

vi.mock('@components/CallToAction', () => ({
	default: ({path, children}: CallToActionProps) => (
		<a href={path} className='text-text-secondary hover:text-text-primary transition-colors'>
			{children}
		</a>
	)
}))

describe('Price Component', () => {
	beforeEach(() => {
		render(<Price />)
	})

	it('renders the pricing section with heading and description', () => {
		const pricingHeading = screen.getByRole('heading', { level: 2, name: /pricing/i })
		const description = screen.getByText(
			/we believe in building better habits without barriers—so our platform is entirely free, forever\./i
		)
		expect(pricingHeading).toBeInTheDocument()
		expect(description).toBeInTheDocument()
	})

	it('renders the pricing card with "Forever Free" title and price details', () => {
		const cardTitle = screen.getByRole('heading', { level: 3, name: /forever free/i })
		const priceText = screen.getByText(/\$0/i)
		const perMonthText = screen.getByText(/\/mo/i)
		expect(priceText).toBeInTheDocument()
		expect(cardTitle).toBeInTheDocument()
		expect(perMonthText).toBeInTheDocument()
	})

	it('renders the benefits list with all expected items', () => {
		const listItems = screen.getAllByRole('listitem')
		expect(listItems).toHaveLength(4)
		expect(listItems[0]).toHaveTextContent(/no credit card required/i)
		expect(listItems[1]).toHaveTextContent(/unlimited habit tracking/i)
		expect(listItems[2]).toHaveTextContent(/full access to all features/i)
		expect(listItems[3]).toHaveTextContent(/ongoing updates & support/i)
	})

	it('renders the CallToAction button with correct text and link', () => {
		const getStartedLink = screen.getByRole('link', { name: /get started/i })
		expect(getStartedLink).toBeInTheDocument()
		expect(getStartedLink).toHaveAttribute('href', '/signup')
	})
})
