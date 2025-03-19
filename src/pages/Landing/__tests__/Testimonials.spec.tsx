import Testimonials from '@pages/Landing/components/Testimonials.tsx'
import { render } from '@testing-library/react'

describe('Landing Page - Testimonials', () => {
	it('should render the Testimonials', () => {
		const { container } = render(<Testimonials />)
		expect(container).toBeDefined()
	})
})
