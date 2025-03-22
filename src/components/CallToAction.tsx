import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CallToActionProps = {
	type: 'primary' | 'secondary' | 'tertiary' | 'link'
	children: ReactNode
	path: string
	className?: string
	isActive?: boolean
}

const CallToAction = ({children, className, path, type, isActive}: CallToActionProps) => {
	const classes = {
		primary: 'bg-primary hover:bg-primary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn',
		secondary: 'bg-secondary hover:bg-secondary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn',
		tertiary: 'border border-secondary text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn',
		link: 'text-primary hover:underline typography-md-semibold'
	}

	const isActiveClass = isActive ? 'underline' : ''

	return (
		<Link to={path} className={`inline-flex gap-0.5 items-center ${classes[type]} ${isActiveClass} ${className}`}>
			{children}
		</Link>
	)
}

export default CallToAction
