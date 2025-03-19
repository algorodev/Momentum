import { render } from '@testing-library/react'
import Landing from '../Landing.tsx'

describe('Landing', () => {
	it('renders the page', () => {
		const { container } = render(<Landing />)
		expect(container).toBeDefined()
	})
})
