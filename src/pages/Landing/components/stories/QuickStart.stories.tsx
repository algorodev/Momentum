import QuickStart from '@pages/Landing/components/QuickStart.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Landing/QuickStart',
	component: QuickStart,
	tags: ['autodocs'],
} satisfies Meta<typeof QuickStart>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		steps: [
			{
				number: 1,
				title: 'Create a Habit',
				description: 'Add new habits you want to track daily.',
			},
			{
				number: 2,
				title: 'Mark as Complete',
				description: 'Check off your habits once done.',
			},
			{
				number: 3,
				title: 'Review Your Progress',
				description: 'See how well you’re doing over time.',
			},
			{
				number: 4,
				title: 'Earn Rewards',
				description: 'Unlock medals for consistency and streaks.',
			},
		]
	}
}

export default meta
