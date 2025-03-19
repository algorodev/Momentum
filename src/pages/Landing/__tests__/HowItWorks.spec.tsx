import HowItWorks from '@pages/Landing/components/HowItWorks.tsx'
import { render } from '@testing-library/react'

describe('Landing Page - How It Works', () => {
	it('should render the How It Works', () => {
		const { container } = render(<HowItWorks />)
		expect(container).toBeDefined()
	})
})
