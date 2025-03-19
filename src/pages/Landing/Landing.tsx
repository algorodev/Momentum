import ArrowTrendingUp from '@components/Icons/ArrowTrendingUp.tsx'
import Calendar from '@components/Icons/Calendar.tsx'
import Graph from '@components/Icons/Graph.tsx'
import Trophy from '@components/Icons/Trophy.tsx'
import FeaturesOverview from '@pages/Landing/components/FeaturesOverview.tsx'
import HeroSection from '@pages/Landing/components/HeroSection.tsx'
import Price from '@pages/Landing/components/Price.tsx'
import QuickStart from '@pages/Landing/components/QuickStart.tsx'
import Testimonials from '@pages/Landing/components/Testimonials.tsx'

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
];

const testimonials = [
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

]
const data = [
	{ value: '10k+', label: 'Habits Tracked' },
	{ value: '2k+', label: 'Daily Active Users' },
	{ value: '4.9/5', label: 'Average Rating' },
]

const Landing = () => (
	<>
		<HeroSection/>
		<FeaturesOverview features={features}/>
		<QuickStart steps={steps}/>
		<Testimonials stats={data} testimonials={testimonials}/>
		<Price/>
	</>
)

export default Landing
