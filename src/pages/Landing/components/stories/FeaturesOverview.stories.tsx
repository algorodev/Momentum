import ArrowTrendingUp from '@components/Icons/ArrowTrendingUp.tsx'
import Calendar from '@components/Icons/Calendar.tsx'
import Graph from '@components/Icons/Graph.tsx'
import Trophy from '@components/Icons/Trophy.tsx'
import FeaturesOverview from '@pages/Landing/components/FeaturesOverview.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Landing/FeaturesOverview',
	component: FeaturesOverview,
	tags: ['autodocs'],
} satisfies Meta<typeof FeaturesOverview>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		features: [
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
	}
}

export default meta

