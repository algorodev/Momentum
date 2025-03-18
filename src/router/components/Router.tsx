import { Routes, Route } from 'react-router'
import App from '../../App.tsx'

const Router = () => (
	<Routes>
		<Route path="/" element={<App />} />
	</Routes>
)

export default Router
