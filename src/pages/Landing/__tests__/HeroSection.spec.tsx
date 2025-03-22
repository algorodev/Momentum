import HeroSection from '@pages/Landing/components/HeroSection.tsx'
import { render, screen } from '@testing-library/react'

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

describe('Landing Page - HeroSection', () => {
	beforeEach(() => {
		render(<HeroSection />)
	})

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the banner section with a heading', () => {
		const banner = screen.getByRole('banner')
		const heading = screen.getByRole('heading', { level: 1, name: /welcome to/i })
		expect(banner).toBeInTheDocument()
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(/momentum/i)
	})

	it('renders the feature list', () => {
		const listItems = screen.getAllByRole('listitem')
		expect(listItems).toHaveLength(3)
		expect(listItems[0]).toHaveTextContent('Build daily habits effortlessly')
		expect(listItems[1]).toHaveTextContent('Track your progress visually')
		expect(listItems[2]).toHaveTextContent('Stay motivated every day')
	})

	it('renders CallToAction and Learn More links with correct hrefs', () => {
		const getStartedLink = screen.getByRole('link', { name: /get started/i })
		const learnMoreLink = screen.getByRole('link', { name: /learn more/i })
		expect(getStartedLink).toHaveAttribute('href', '/signup')
		expect(learnMoreLink).toHaveAttribute('href', '#features')
	})

	it('renders the hero image with correct alt text and source', () => {
		const heroImage = screen.getByAltText(/momentum app/i)
		expect(heroImage).toBeInTheDocument()
		expect(heroImage).toHaveAttribute('src', '/assets/hero.svg')
	})

	it('renders the arrow down link with correct attributes', () => {
		const arrowLink = document.querySelector('a.animate-bounce')
		expect(arrowLink).toBeInTheDocument()
		expect(arrowLink).toHaveAttribute('href', '#features')
	})
})
