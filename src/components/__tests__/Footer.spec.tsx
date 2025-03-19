import { render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer component', () => {
	it('renders the component', () => {
		const { container } = render(<Footer />)
		expect(container).toBeDefined()
	})
})
