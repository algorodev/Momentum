import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header component', () => {
	it('renders the component', () => {
		const { container } = render(<Header />)
		expect(container).toBeDefined()
	})
})
