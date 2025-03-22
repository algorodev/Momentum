import HabitsLayout from '@layouts/HabitsLayout.tsx'
import Dashboard from '@pages/Dashboard/Dashboard.tsx'
import Habits from '@pages/Habits/Habits.tsx'
import Login from '@pages/Login/Login.tsx'
import SignUp from '@pages/SignUp/SignUp.tsx'
import ProtectedRoute from '@router/components/ProtectedRoute.tsx'
import { Routes, Route } from 'react-router-dom'
import LandingLayout from '@layouts/LandingLayout.tsx'
import Landing from '@pages/Landing/Landing.tsx'

const Router = () => (
	<Routes>
		<Route element={<LandingLayout /> }>
			<Route index element={<Landing />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
		</Route>

		<Route path='/habits' element={<ProtectedRoute children={<HabitsLayout />}/> }>
			<Route index element={<Habits />} />
			<Route path='/habits/dashboard' element={<Dashboard />} />
		</Route>
	</Routes>
)

export default Router
