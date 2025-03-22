import { ReactNode } from 'react'

type CardProps = {
	children: ReactNode
}

const Card = ({children}: CardProps) => (
	<div className='bg-white rounded-lg border border-border shadow-sm overflow-hidden'>
		{children}
	</div>
)

export default Card
