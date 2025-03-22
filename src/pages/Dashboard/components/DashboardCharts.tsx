import ChartWrapper from '@components/__tests__/ChartWrapper.tsx'
import Tabs from '@components/Tabs.tsx'
import { useState } from 'react'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const weeklyData = [
	{
		name: 'Weekly Completions',
		data: [28, 32, 30, 34, 32, 33, 31],
	},
]

const monthlyData = [
	{ date: "W1", completed: 28, total: 35 },
	{ date: "W2", completed: 32, total: 35 },
	{ date: "W3", completed: 30, total: 35 },
	{ date: "W4", completed: 34, total: 35 },
]

const trendMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const trendData = [
	{ name: 'Trend Completion', data: [65, 72, 68, 75, 82, 87] },
]

const DashboardCharts = () => {
	const [activeTab, setActiveTab] = useState('weekly')
	const tabs = ['weekly', 'monthly', 'trend']
	const safeWeekDays = weekDays || []
	const safeWeeklyData = weeklyData || []
	const safeMonthlyData = monthlyData || []
	const safeTrendMonths = trendMonths || []
	const safeTrendData = trendData || []

	const weeklyChart = {
		type: 'bar',
		series: safeWeeklyData,
		labels: safeWeekDays,
		options: {
			chart: {
				width: 380,
				type: 'bar',
			},
			labels: safeWeekDays,
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	} as ApexChart
	const monthlyChart = {
		type: 'area',
		series: [
			{
				name: 'Completed',
				data: safeMonthlyData.map((category) => category.completed),
			},
			{
				name: 'Total',
				data: safeMonthlyData.map((category) => category.total),
			}
		],
		labels: safeMonthlyData.map((category) => category.date),
		options: {
			chart: {
				width: 380,
				type: 'area',
			},
			labels: safeMonthlyData.map((category) => category.date),
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	} as ApexChart
	const trendChart = {
		type: 'line',
		series: safeTrendData,
		labels: safeTrendMonths,
		options: {
			chart: {
				width: 380,
				type: 'line',
			},
			labels: safeTrendMonths,
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	} as ApexChart

	return (
		(
			<div className='bg-white rounded-lg border border-border shadow-sm overflow-hidden'>
				<div className='p-4 pb-0'>
					<h2 className='typography-lg-bold'>Habit Completion</h2>
					<p className='typography-md-regular'>Your habit completion rate over time</p>
				</div>
				<div className='p-4'>
					<Tabs options={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
					<div className='pt-4'>
						{activeTab === 'weekly' && <ChartWrapper chartConfig={weeklyChart} />}
						{activeTab === 'monthly' && <ChartWrapper chartConfig={monthlyChart} />}
						{activeTab === 'trend' && <ChartWrapper chartConfig={trendChart} />}
					</div>
				</div>
			</div>
		)
	)
}

export default DashboardCharts
