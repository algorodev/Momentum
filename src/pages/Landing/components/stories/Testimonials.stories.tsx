import Testimonials from '@pages/Landing/components/Testimonials.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Landing/Testimonials',
	component: Testimonials,
	tags: ['autodocs'],
} satisfies Meta<typeof Testimonials>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		testimonials: [
			{ author: 'Alice', quote: 'Momentum has completely transformed my daily routine!' },
			{ author: 'Bob', quote: 'I love tracking my progress with such a clean interface.' },
			{ author: 'Carol', quote: 'The habit tracking and rewards keep me motivated every day.' },
			{ author: 'Tim', quote: 'Now I can be consistent on my daily routine.' },
			{ author: 'John Doe', quote: 'This app has changed my life for the better!' },
			{ author: 'Jane Smith', quote: 'I can\'t imagine my daily routine without it.' },
			{ author: 'Emily Johnson', quote: 'The best habit tracker I\'ve ever used.' },
			{ author: 'Michael Brown', quote: 'Keeps me motivated and on track every day.' },
			{ author: 'David Wilson', quote: 'A game-changer for my productivity!' },
			{ author: 'Sophia Martinez', quote: 'I\'ve never felt more in control of my habits.' },
			{ author: 'James Anderson', quote: 'The rewards system is incredibly motivating.' },
			{ author: 'Olivia Lee', quote: 'Simple, effective, and fun to use.' },

		],
		stats: [
			{ value: '10k+', label: 'Habits Tracked' },
			{ value: '2k+', label: 'Daily Active Users' },
			{ value: '4.9/5', label: 'Average Rating' },
		]
	}
}

export default meta
