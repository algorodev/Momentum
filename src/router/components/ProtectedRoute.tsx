import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@store/store'

type ProtectedRouteProps = {
	children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

	if (!isLoggedIn) {
		return <Navigate to='/login' replace/>
	}

	return <>{children}</>
}

export default ProtectedRoute
