import DashboardCharts from '@pages/Dashboard/components/DashboardCharts.tsx'
import DashboardStats from '@pages/Dashboard/components/DashboardStats.tsx'
import CategoryBreakdown from "./components/CategoryBreakdown"

const Dashboard = () => {
	return (
		<>
			<div className="grid gap-6 mt-6">
				<DashboardStats />
				<div className="grid gap-6 md:grid-cols-2">
					<DashboardCharts />
					<CategoryBreakdown />
				</div>
			</div></>
	)
}

export default Dashboard
