import FeaturesOverview from '@pages/Landing/components/FeaturesOverview.tsx'
import { render } from '@testing-library/react'

describe('Landing Page - Features Overview', () => {
	it('should render the Features Overview', () => {
		const { container } = render(<FeaturesOverview features={[]} />)
		expect(container).toBeDefined()
	})
})
