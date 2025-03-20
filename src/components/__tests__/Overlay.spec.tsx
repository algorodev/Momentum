import { render } from '@testing-library/react'
import Overlay from '@components/Overlay.tsx'

describe('Overlay component', () => {

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})
	it('renders a div with the correct classes', () => {
		const { container } = render(<Overlay />)
		const divElement = container.firstChild
		expect(divElement).toHaveClass('absolute inset-0 bg-black opacity-20')
	})
})
