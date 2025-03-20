import { ReactNode } from 'react'

type ButtonProps = {
	type: 'button' | 'submit' | 'reset'
	children: ReactNode
	variant: 'primary' | 'secondary'
	className?: string
}

const Button = ({children, className, type, variant}: ButtonProps) => {
	const classes = {
		primary: 'bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded transition-colors',
		secondary: 'bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded transition-colors'
	}

	return (
		<button type={type} className={`inline-flex gap-0.5 items-center justify-center typography-lg-semibold cursor-pointer ${classes[variant]} ${className}`}>
			{children}
		</button>
	)
}

export default Button
