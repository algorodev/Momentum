import CallToAction from '@components/CallToAction.tsx'

const Navigator = () => {
	return (
		<section className='flex justify-center py-8'>
			<nav className='bg-surface rounded-2xl shadow-md p-6'>
				<ul className='flex justify-between gap-6'>
					<li>
						<CallToAction path='/' type='link'>
							Web
						</CallToAction>
					</li>
					<li>
						<CallToAction path='#' type='link' isActive>
							Habits
						</CallToAction>
					</li>
					<li>
						<CallToAction path='#' type='link'>
							Dashboard
						</CallToAction>
					</li>
					<li>
						<CallToAction path='#' type='link'>
							Calendar
						</CallToAction>
					</li>
					<li>
						<CallToAction path='/profile' type='link'>
							Profile
						</CallToAction>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Navigator
