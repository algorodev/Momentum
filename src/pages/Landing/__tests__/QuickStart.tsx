import QuickStart from '@pages/Landing/components/QuickStart.tsx'
import { render } from '@testing-library/react'

describe('Landing Page - Quick Start', () => {
	it('should render the Quick Start', () => {
		const { container } = render(<QuickStart steps={[]} />)
		expect(container).toBeDefined()
	})
})
