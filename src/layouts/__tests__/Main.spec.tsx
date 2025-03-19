import { render } from '@testing-library/react'
import Main from '@layouts/Main'

describe('Main Layout', () => {
	it('renders the layout', () => {
		const { container } = render(<Main />)
		expect(container).toBeDefined()
	})
})
