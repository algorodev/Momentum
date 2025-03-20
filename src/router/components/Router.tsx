import Login from '@pages/Login/Login.tsx'
import SignUp from '@pages/SignUp/SignUp.tsx'
import ProtectedRoute from '@router/components/ProtectedRoute.tsx'
import { Routes, Route } from 'react-router-dom'
import Main from '@layouts/Main.tsx'
import Landing from '@pages/Landing/Landing.tsx'

const Router = () => (
	<Routes>
		<Route element={<Main isLanding /> }>
			<Route path='/' element={<Landing />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
		</Route>

		<Route element={<ProtectedRoute children={<Main />}/> }>
			<Route path='/home' element={<Landing />} />
		</Route>
	</Routes>
)

export default Router
