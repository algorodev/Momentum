import ChartWrapper from '@components/__tests__/ChartWrapper.tsx'
import Progress from '@components/Progress.tsx'
import Tabs from '@components/Tabs.tsx'
import { useState } from 'react'

const categoryData = [
	{ name: "Personal", value: 25, completion: 85 },
	{ name: "Work", value: 20, completion: 92 },
	{ name: "Health", value: 30, completion: 78 },
	{ name: "Wellness", value: 15, completion: 65 },
	{ name: "Learning", value: 10, completion: 70 },
]

const CategoryBreakdown = () => {
	const [activeTab, setActiveTab] = useState('completion rate')
	const tabs = ['distribution', 'completion rate']
	const safeCategoryData = categoryData || []

	const chartConfig = {
		type: 'pie',
		series: safeCategoryData.map((category) => category.value),
		labels: safeCategoryData.map((category) => category.name),
		options: {
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: safeCategoryData.map((category) => category.name),
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
		<div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
			<div className="p-4 pb-0">
				<h2 className="typography-lg-bold">Category Breakdown</h2>
				<p className="typography-md-regular">Habit distribution and completion by category</p>
			</div>
			<div className="p-4">
				<Tabs options={tabs} activeTab={activeTab} onTabChange={setActiveTab}/>
				<div className='pt-4'>
					{activeTab === 'distribution' && <ChartWrapper chartConfig={chartConfig} />}
					{activeTab === 'completion rate' && (
						<div className="space-y-4">
							{safeCategoryData.map((category, index) => (
								<div key={category.name || index} className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="typography-md-regular">{category.name || "Unknown"}</span>
										<span className="typography-md-semibold">{category.completion || 0}%</span>
									</div>
									<Progress percentage={category.completion || 0}/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default CategoryBreakdown
