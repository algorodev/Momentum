import { Routes, Route } from 'react-router'
import Main from '../../layouts/Main.tsx'
import Landing from '../../pages/Landing.tsx'

const Router = () => (
	<Routes>
		<Route element={<Main isLanding /> }>
			<Route path='/' element={<Landing />} />
		</Route>

		<Route element={<Main /> }>
			<Route path='/home' element={<Landing />} />
		</Route>
	</Routes>
)

export default Router
