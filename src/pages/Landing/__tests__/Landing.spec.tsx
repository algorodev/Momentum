import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Landing from '../Landing.tsx'

vi.mock('@components/CallToAction', () => ({
	default: ({path, type, children}) => (
		<a href={path} className='text-text-secondary hover:text-text-primary transition-colors'>
			{children}
		</a>
	)
}))

describe('Landing', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders all the sections of the landing page', () => {
		render(
			<MemoryRouter>
				<Landing />
			</MemoryRouter>
		)

		expect(screen.getByRole('banner')).toBeInTheDocument()
		expect(screen.getByRole('heading', { level: 2, name: /features/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { level: 2, name: /quick start/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { level: 2, name: /what our users say/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { level: 2, name: /pricing/i })).toBeInTheDocument()
	})
})
