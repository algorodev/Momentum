import Card from '@components/Card.tsx'
import Progress from '@components/Progress.tsx'
import { useEffect, useState } from 'react'
import Calendar from '@components/Icons/Calendar.tsx'

const DailyProgress = () => {
	const [date, setDate] = useState(new Date())
	const [progress, setProgress] = useState(0)

	const habitStats = {
		total: 15,
		completed: 6,
		streak: 7,
		bestStreak: 14,
		thisWeek: 18,
		lastWeek: 15,
	}
	const percentage = (habitStats.completed / habitStats.total) * 100

	useEffect(() => {
		let start = 0
		const animateProgress = () => {
			start += 2
			setProgress(Math.min(start, percentage))
			if (start < percentage) {
				requestAnimationFrame(animateProgress)
			}
		}

		animateProgress()

		const interval = setInterval(() => {
			setDate(new Date())
		}, 60000)

		return () => clearInterval(interval)
	}, [habitStats.completed, habitStats.total])

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<div className='p-4 pb-0'>
					<h2 className='typography-lg-semibold flex items-center justify-between'>
						Today's Progress
						<Calendar className='w-5 h-5 text-text-secondary' />
					</h2>
				</div>
				<div className='p-4'>
					<p className='typography-lg-bold'>{habitStats.completed}/{habitStats.total}</p>
					<Progress percentage={progress} className='mt-2' />
					<p className='typography-sm-regular text-text-secondary mt-2'>
						{date.toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
							weekday: 'long'
						})}
					</p>
				</div>
			</Card>
			<Card>
				<div className='p-4 pb-0'>
					<h2 className='typography-lg-semibold flex items-center justify-between'>
						Current Streak
					</h2>
				</div>
				<div className='p-4'>
					<p className='typography-lg-bold'>{habitStats.streak} days</p>
					<p className='typography-sm-regular text-text-secondary mt-2'>Best streak: {habitStats.bestStreak} days</p>
				</div>
			</Card>
			<Card>
				<div className='p-4 pb-0'>
					<h2 className='typography-lg-semibold flex items-center justify-between'>
						This Week
					</h2>
				</div>
				<div className='p-4'>
					<p className='typography-lg-bold'>{habitStats.thisWeek} completed</p>
					<p className='typography-sm-regular text-text-secondary mt-2'>
						{habitStats.thisWeek > habitStats.lastWeek
						? `+${habitStats.thisWeek - habitStats.lastWeek} from last week`
							: `${habitStats.lastWeek - habitStats.thisWeek} from last week`}
					</p>
				</div>
			</Card>
			<Card>
				<div className='p-4 pb-0'>
					<h2 className='typography-lg-semibold flex items-center justify-between'>
						Completion Rate
					</h2>
				</div>
				<div className='p-4'>
					<p className='typography-lg-bold'>{Math.round((habitStats.completed / habitStats.total) * 100)}%</p>
					<Progress percentage={progress} className='mt-2'/>
					<p className='typography-sm-regular text-text-secondary mt-2'>Daily average</p>
				</div>
			</Card>
		</div>
	)
}

export default DailyProgress
