import { render, screen } from '@testing-library/react'
import Testimonials from '@pages/Landing/components/Testimonials'

const testimonials = [
	{ author: 'Alice', quote: 'Momentum has completely transformed my daily routine!' },
	{ author: 'Bob', quote: 'I love tracking my progress with such a clean interface.' },
	{ author: 'Carol', quote: 'The habit tracking and rewards keep me motivated every day.' },
	{ author: 'Tim', quote: 'Now I can be consistent on my daily routine.' },
	{ author: 'John Doe', quote: 'This app has changed my life for the better!' },
	{ author: 'Jane Smith', quote: 'I can\'t imagine my daily routine without it.' },
	{ author: 'Emily Johnson', quote: 'The best habit tracker I\'ve ever used.' },
	{ author: 'Michael Brown', quote: 'Keeps me motivated and on track every day.' },
	{ author: 'David Wilson', quote: 'A game-changer for my productivity!' },
	{ author: 'Sophia Martinez', quote: 'I\'ve never felt more in control of my habits.' },
	{ author: 'James Anderson', quote: 'The rewards system is incredibly motivating.' },
	{ author: 'Olivia Lee', quote: 'Simple, effective, and fun to use.' },

]
const data = [
	{ value: '10k+', label: 'Habits Tracked' },
	{ value: '2k+', label: 'Daily Active Users' },
	{ value: '4.9/5', label: 'Average Rating' },
]

describe('Testimonials component', () => {
	beforeEach(() => {
		render(<Testimonials stats={data} testimonials={testimonials} />)
	})

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the header and description', () => {
		const heading = screen.getByRole('heading', { name: /what our users say/i })
		const description = screen.getByText(/real feedback from our satisfied habit‑builders\./i)
		expect(heading).toBeInTheDocument()
		expect(description).toBeInTheDocument()
	})

	it('renders stats', () => {
		expect(screen.getByText(/10k\+/i)).toBeInTheDocument()
		expect(screen.getByText(/Habits Tracked/i)).toBeInTheDocument()
		expect(screen.getByText(/2k\+/i)).toBeInTheDocument()
		expect(screen.getByText(/Daily Active Users/i)).toBeInTheDocument()
	})

	it('renders testimonials when provided', () => {
		expect(screen.getByText(/Momentum has completely transformed my daily routine!/i)).toBeInTheDocument()
		expect(screen.getByText(/- Alice/i)).toBeInTheDocument()
		expect(screen.getByText(/I love tracking my progress with such a clean interface\./i)).toBeInTheDocument()
		expect(screen.getByText(/- Bob/i)).toBeInTheDocument()
	})
})
