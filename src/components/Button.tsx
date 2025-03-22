import { ReactNode } from 'react'

type ButtonProps = {
	type: 'button' | 'submit' | 'reset'
	children: ReactNode
	variant: 'primary' | 'secondary' | 'icon'
	className?: string
	onClick?: () => void
}

const Button = ({children, className, onClick, type, variant}: ButtonProps) => {
	const classes = {
		primary: 'bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded transition-colors',
		secondary: 'bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded transition-colors',
		icon: 'h-8 w-8 inline-flex items-center justify-center rounded-md border border-primary text-text-secondary bg-background hover:bg-primary hover:text-white transition-colors',
	}

	return (
		<button
			type={type}
			className={`inline-flex gap-1 items-center justify-center typography-lg-semibold cursor-pointer ${classes[variant]} ${className}`}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
