import Card from '@components/Card.tsx'
import ArrowTrendingUp from '@components/Icons/ArrowTrendingUp.tsx'
import Calendar from '@components/Icons/Calendar.tsx'
import CheckCircle from '@components/Icons/CheckCircle.tsx'

const DashboardStats = () => {
	const stats = {
		completionRate: 87,
		currentStreak: 12,
		totalCompletions: 342,
		improvementRate: 23,
	}

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<div className='flex flex-row items-center justify-between p-4 pb-2'>
					<h3 className='typography-md-semibold'>Completion Rate</h3>
					<span className='w-4 h-4 text-text-secondary'>
						<CheckCircle/>
					</span>
				</div>
				<div className='p-4 pt-0'>
					<div className='typography-jumbo-bold'>{stats.completionRate}%</div>
					<p className='typography-sm-regular text-text-secondary'>+2% from last month</p>
				</div>
			</Card>
			<Card>
				<div className='flex flex-row items-center justify-between p-4 pb-2'>
					<h3 className='typography-md-semibold'>Current Streak</h3>
					<span className='w-4 h-4 text-text-secondary'>
						<Calendar/>
					</span>
				</div>
				<div className='p-4 pt-0'>
					<div className='typography-jumbo-bold'>{stats.currentStreak} days</div>
					<p className='typography-sm-regular text-text-secondary'>Best streak: 21 days</p>
				</div>
			</Card>
			<Card>
				<div className="flex flex-row items-center justify-between p-4 pb-2">
					<h3 className="typography-md-semibold">Total Completions</h3>
					<span className='w-4 h-4 text-text-secondary'>
						<CheckCircle/>
					</span>
				</div>
				<div className='p-4 pt-0'>
					<div className='typography-jumbo-bold'>{stats.totalCompletions}</div>
					<p className='typography-sm-regular text-text-secondary'>+48 from last month</p>
				</div>
			</Card>
			<Card>
				<div className='flex flex-row items-center justify-between p-4 pb-2'>
					<h3 className='typography-md-semibold'>Improvement Rate</h3>
					<span className='w-4 h-4 text-text-secondary'>
						<ArrowTrendingUp/>
					</span>
				</div>
				<div className='p-4 pt-0'>
					<div className='typography-jumbo-bold'>+{stats.improvementRate}%</div>
					<p className='typography-sm-regular text-text-secondary'>Compared to last month</p>
				</div>
			</Card>
		</div>
	)
}

export default DashboardStats
