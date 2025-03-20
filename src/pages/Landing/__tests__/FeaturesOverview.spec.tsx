import ArrowTrendingUp from '@components/Icons/ArrowTrendingUp.tsx'
import Calendar from '@components/Icons/Calendar.tsx'
import Graph from '@components/Icons/Graph.tsx'
import Trophy from '@components/Icons/Trophy.tsx'
import { render, screen } from '@testing-library/react'
import FeaturesOverview from '@pages/Landing/components/FeaturesOverview'

vi.mock('@components/CallToAction', () => ({
	default: ({path, type, children}) => (
		<a href={path} className='text-text-secondary hover:text-text-primary transition-colors'>
			{children}
		</a>
	)
}))

const features = [
	{
		title: 'Habit Tracking',
		description: 'Monitor your daily habits easily.',
		icon: <ArrowTrendingUp/>,
		benefits: [
			'Create custom habits',
			'Track your progress',
			'Stay consistent every day',
		],
		link: '/features#habit-tracking',
	},
	{
		title: 'Calendar View',
		description: 'See your progress on a calendar.',
		icon: <Calendar/>,
		benefits: [
			'Visualize your habits',
			'Understand your trends',
			'Celebrate your wins',
		],
		link: '/features#calendar-view',
	},
	{
		title: 'Progress Graphs',
		description: 'Visualize your progress over time.',
		icon: <Graph/>,
		benefits: [
			'Understand your growth',
			'See your consistency',
			'Identify your patterns',
		],
		link: '/features#progress-graphs',
	},
	{
		title: 'Medal Rewards',
		description: 'Earn rewards for consistency.',
		icon: <Trophy/>,
		benefits: [
			'Celebrate your achievements',
			'Stay motivated every day',
			'Unlock new habits',
		],
		link: '/features#medal-rewards',
	},
]

describe('FeaturesOverview component', () => {
	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the main section with title and description', () => {
		render(<FeaturesOverview features={features} />)
		const sectionHeading = screen.getByRole('heading', { level: 2, name: /features/i })
		const description = screen.getByText(/discover how our platform helps you track habits/i)
		expect(sectionHeading).toBeInTheDocument()
		expect(description).toBeInTheDocument()
	})

	it('renders a feature card for each feature', () => {
		render(<FeaturesOverview features={features} />)
		const featureTitles = screen.getAllByRole('heading', { level: 3 })
		expect(featureTitles).toHaveLength(features.length)
	})

	it('renders benefits if provided', () => {
		render(<FeaturesOverview features={features} />)
		expect(screen.getByText(/- Create custom habits/i)).toBeInTheDocument()
		expect(screen.getByText(/- Track your progress/i)).toBeInTheDocument()
		const benefitItems = screen.getAllByText(/^- /)
		expect(benefitItems).toHaveLength(12)
	})

	it('renders CallToAction when feature has a link', () => {
		render(<FeaturesOverview features={features} />)
		const callToAction = screen.getAllByText(/Learn more/i)
		expect(callToAction).toHaveLength(4)
	})
})
