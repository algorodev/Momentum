import HeroSection from '@pages/Landing/components/HeroSection.tsx'
import { render } from '@testing-library/react'

describe('Landing Page - Hero Section', () => {
	it('should render the Hero Section', () => {
		const { container } = render(<HeroSection />)
		expect(container).toBeDefined()
	})
})
