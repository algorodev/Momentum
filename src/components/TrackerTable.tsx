import Button from '@components/Button.tsx'
import Check from '@components/Icons/Check.tsx'
import XMark from '@components/Icons/XMark.tsx'
import { cn } from '@utils/dom.ts'
import { RefObject, useEffect, useState } from 'react'

const getDaysInMonth = (year: number, month: number) => {
	return new Date(year, month + 1, 0).getDate()
}

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
	personal: {
		bg: 'bg-blue-200',
		border: 'border-blue-500',
		text: 'text-blue-500',
	},
	work: {
		bg: 'bg-purple-200',
		border: 'border-purple-500',
		text: 'text-purple-500',
	},
	health: {
		bg: 'bg-green-200',
		border: 'border-green-500',
		text: 'text-green-500',
	},
	wellness: {
		bg: 'bg-yellow-200',
		border: 'border-yellow-500',
		text: 'text-yellow-500',
	},
	learning: {
		bg: 'bg-orange-200',
		border: 'border-orange-500',
		text: 'text-orange-500',
	},
}

type Habit = {
	id: string
	name: string
	category: string
	completedDays: number[]
}

type TrackerTableProps = {
	habits: Habit[]
	removeHabit: (id: string) => void
	toggleHabitCompletion: (id: string, day: number) => void
	containerRef: RefObject<HTMLDivElement | null>
}

const TrackerTable = ({ containerRef, habits, removeHabit, toggleHabitCompletion }: TrackerTableProps) => {
	const today = new Date()
	const currentMonth = today.getMonth()
	const currentYear = today.getFullYear()
	const [maxVisibleDays, setMaxVisibleDays] = useState(9)

	const daysInMonth = getDaysInMonth(currentYear, currentMonth)
	const inCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear()
	const todayDay = inCurrentMonth ? today.getDate() : 1
	const halfRange = Math.floor(maxVisibleDays / 2)
	let startDay = Math.max(1, todayDay - halfRange)
	let endDay = startDay + maxVisibleDays - 1
	if (endDay > daysInMonth) {
		endDay = daysInMonth
		startDay = Math.max(1, endDay - maxVisibleDays + 1)
	}
	const visibleDays = Array.from({ length: endDay - startDay + 1 }, (_, i) => startDay + i)

	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth
				const columnWidth = 25
				const habitColWidth = 250

				const availableForDays = containerWidth - habitColWidth
				const possibleDays = Math.floor(availableForDays / columnWidth)
				const daysToShow = Math.min(Math.max(possibleDays, 2), daysInMonth)
				setMaxVisibleDays(daysToShow)
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [daysInMonth])

	return (
		<table className='min-w-max border-collapse'>
			<thead>
			<tr className='border-b'>
				<th className='p-2 text-left typography-md-semibold'>Habit</th>
				{visibleDays.map((day) => {
					const isToday = inCurrentMonth && day === today.getDate()
					return (
						<th
							key={day}
							className={cn(
								'p-2 text-center typography-md-semibold',
								isToday ? 'bg-primary/10 text-primary' : '',
							)}
						>
							{day}
						</th>
					)
				})}
			</tr>
			</thead>
			<tbody>
			{habits.map((habit) => (
				<tr key={habit.id} className='border-b'>
					<td className='p-2 flex items-center justify-between gap-3'>
						<span className='truncate typography-md-semibold'>{habit.name}</span>
						<Button
							type='button'
							variant='icon'
							onClick={() => removeHabit(habit.id)}
							aria-label={`Remove ${habit.name}`}
						>
							<span className='w-4 h-4'>
								<XMark/>
							</span>
						</Button>
					</td>
					{visibleDays.map((day) => {
						const isCompleted = habit.completedDays.includes(day)
						return (
							<td
								key={day}
								className={cn(
									'p-2 text-center cursor-pointer hover:bg-primary/20',
								)}
								onClick={() => toggleHabitCompletion(habit.id, day)}
							>
								<div
									className={cn(
										'h-6 w-6 rounded-full border-2 mx-auto flex items-center justify-center transition-colors',
										isCompleted
											? `${
												categoryColors[habit.category]?.bg || 'bg-primary'
											} ${
												categoryColors[habit.category]?.border || 'border-primary'
											} ${
											categoryColors[habit.category]?.text || 'text-white'
											}`
											: 'border-gray-300',
									)}
								>
									{isCompleted && <span className='w-4 h-4'><Check/></span>}
								</div>
							</td>
						)
					})}
				</tr>
			))}
			</tbody>
		</table>
	)
}

export default TrackerTable
