import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LandingLayout from '@layouts/LandingLayout.tsx'

vi.mock('@components/Header.tsx', () => ({
	__esModule: true,
	default: () => <div data-testid="header">Header</div>,
}))
vi.mock('@components/Footer.tsx', () => ({
	__esModule: true,
	default: () => <div data-testid="footer">Footer</div>,
}))

describe('LandingLayout Layout', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the layout with Header (non-landing) correctly', () => {
		render(
			<MemoryRouter>
				<LandingLayout />
			</MemoryRouter>
		)
		expect(screen.getByTestId('header')).toBeInTheDocument()
		expect(screen.queryByTestId('footer')).not.toBeInTheDocument()
		expect(screen.getByRole('main')).toBeInTheDocument()
	})

	it('renders the layout with Footer (landing) correctly', () => {
		render(
			<MemoryRouter>
				<LandingLayout />
			</MemoryRouter>
		)
		expect(screen.getByTestId('footer')).toBeInTheDocument()
		expect(screen.queryByTestId('header')).not.toBeInTheDocument()
		expect(screen.getByRole('main')).toBeInTheDocument()
	})

	it('renders the overall layout structure with expected classes', () => {
		const { container } = render(
			<MemoryRouter>
				<LandingLayout />
			</MemoryRouter>
		)
		const section = container.querySelector('section')
		expect(section).toHaveClass('flex flex-col min-h-screen bg-background scroll-smooth')
	})
})
