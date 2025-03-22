import DailyProgress from '@pages/Habits/components/DailyProgress.tsx'
import HabitTracker from '@pages/Habits/components/HabitTracker.tsx'

const Habits = () => {
	return (
			<>
				<div className='flex flex-col gap-8'>
					<section>
						<h1 className='typography-jumbo-bold mb-6'>Your Habit Tracker</h1>
						<DailyProgress/>
					</section>
					<section>
						<HabitTracker/>
					</section>
				</div>
			</>
	)
}

export default Habits
