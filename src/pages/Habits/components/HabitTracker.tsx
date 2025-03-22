import TrackerTable from '@components/TrackerTable.tsx'
import { useState, useRef } from 'react'
import Button from '@components/Button.tsx'
import FormControl from '@components/FormControl.tsx'
import ChevronDown from '@components/Icons/ChevronDown.tsx'
import Plus from '@components/Icons/Plus.tsx'
import SelectControl from '@components/SelectControl.tsx'

const getMonthName = (month: number) => {
	return new Date(0, month).toLocaleString('default', { month: 'long' })
}

const categoryOptions = [
	{ value: 'personal', label: 'Personal' },
	{ value: 'work', label: 'Work' },
	{ value: 'health', label: 'Health' },
	{ value: 'wellness', label: 'Wellness' },
	{ value: 'learning', label: 'Learning' },
]

type Habit = {
	id: string;
	name: string;
	category: string;
	completedDays: number[];
};

const HabitTracker = () => {
	const today = new Date()
	const [currentMonth, setCurrentMonth] = useState(today.getMonth())
	const [currentYear, setCurrentYear] = useState(today.getFullYear())
	const [newHabitName, setNewHabitName] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('personal')
	const [habits, setHabits] = useState<Habit[]>([
		{
			id: '1',
			name: 'Morning Exercise',
			category: 'health',
			completedDays: [1, 2, 3, 5, 8, 9, 12, 15, 16, 19, 20, 21, 22],
		},
		{
			id: '2',
			name: 'Read 30 minutes',
			category: 'learning',
			completedDays: [1, 2, 4, 5, 6, 7, 8, 11, 12, 13, 18, 19, 20],
		},
		{
			id: '3',
			name: 'Meditate',
			category: 'wellness',
			completedDays: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
		},
		{
			id: '5',
			name: 'Learn VUE',
			category: 'work',
			completedDays: [1, 2, 4, 5, 6, 8, 9, 10, 12, 15, 16, 17, 22],
		},
		{
			id: '6',
			name: 'Walk 30 min before dinner',
			category: 'personal',
			completedDays: [1, 2, 3, 4, 8, 9, 11, 12, 15, 16, 17, 20, 22],
		},
	])

	const containerRef = useRef<HTMLDivElement>(null)

	const monthName = getMonthName(currentMonth)

	const previousMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11)
			setCurrentYear((prev) => prev - 1)
		} else {
			setCurrentMonth((prev) => prev - 1)
		}
	}

	const nextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0)
			setCurrentYear((prev) => prev + 1)
		} else {
			setCurrentMonth((prev) => prev + 1)
		}
	}

	const toggleHabitCompletion = (habitId: string, day: number) => {
		setHabits(
			habits.map((habit) => {
				if (habit.id === habitId) {
					const completedDays = habit.completedDays.includes(day)
						? habit.completedDays.filter((d) => d !== day)
						: [...habit.completedDays, day]
					return { ...habit, completedDays }
				}
				return habit
			}),
		)
	}

	const addHabit = () => {
		if (newHabitName.trim()) {
			setHabits([
				...habits,
				{
					id: Date.now().toString(),
					name: newHabitName,
					category: selectedCategory,
					completedDays: [],
				},
			])
			setNewHabitName('')
		}
	}

	const removeHabit = (habitId: string) => {
		setHabits(habits.filter((habit) => habit.id !== habitId))
	}

	return (
		<div className='bg-white rounded-lg border border-border shadow-sm overflow-hidden' ref={containerRef}>
			<div className='flex flex-row items-center justify-between p-4 border-b border-border'>
				<h2 className='text-lg font-semibold'>Habit Tracker</h2>
				<div className='flex items-center gap-2'>
					<Button type='button' variant='icon' onClick={previousMonth}>
            <span className='rotate-90 h-4 w-4'>
              <ChevronDown/>
            </span>
					</Button>
					<span className='font-medium'>
            {monthName} {currentYear}
          </span>
					<Button type='button' variant='icon' onClick={nextMonth}>
            <span className='rotate-270 h-4 w-4'>
              <ChevronDown/>
            </span>
					</Button>
				</div>
			</div>
			<div className='p-4'>
				<div className='flex items-end gap-2 mb-4'>
					<form onSubmit={addHabit} className='flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2'>
						<FormControl
							name='habit-name'
							label='Title'
							type='text'
							value={newHabitName}
							placeholder='Add a new habit ...'
							onValueChange={setNewHabitName}
						/>
						<SelectControl
							label='Category'
							categoryOptions={categoryOptions}
							value={selectedCategory}
							onValueChange={setSelectedCategory}
						/>
					</form>
					<Button type='submit' variant='primary'>
            <span className='h4- w-4'>
              <Plus/>
            </span>
						Add
					</Button>
				</div>
				<div className='w-full overflow-auto'>
					<TrackerTable
						containerRef={containerRef}
						habits={habits}
						removeHabit={removeHabit}
						toggleHabitCompletion={toggleHabitCompletion}
					/>
				</div>
			</div>
		</div>
	)
}

export default HabitTracker
