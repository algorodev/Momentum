import QuickStart from '@pages/Landing/components/QuickStart.tsx'
import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach } from 'vitest'

const steps = [
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

describe('QuickStart component', () => {
	beforeEach(() => {
		render(<QuickStart steps={steps} />)
	})

	afterEach(() => {
		vi.clearAllMocks()
		vi.resetAllMocks()
		vi.restoreAllMocks()
	})

	it('renders the Quick Start section with heading and description', () => {
		const heading = screen.getByRole('heading', { level: 2, name: /quick start/i })
		const description = screen.getByText(/start building better habits in just a few easy steps/i)
		expect(heading).toBeInTheDocument()
		expect(description).toBeInTheDocument()
	})

	it('renders a step card for each provided step', () => {
		const stepTitles = screen.getAllByRole('heading', { level: 3 })
		expect(stepTitles).toHaveLength(steps.length)
	})

	it('renders each step with correct details', () => {
		steps.forEach((step) => {
			const stepNumber = screen.getByText(step.number.toString())
			const stepTitle = screen.getByRole('heading', { level: 3, name: new RegExp(step.title, 'i') })
			const stepDescription = screen.getByText(new RegExp(step.description, 'i'))
			expect(stepNumber).toBeInTheDocument()
			expect(stepTitle).toBeInTheDocument()
			expect(stepDescription).toBeInTheDocument()
		})
	})
})
