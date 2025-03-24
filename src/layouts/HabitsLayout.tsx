import Header from '@components/Header.tsx'
import { Outlet } from 'react-router-dom'

const HabitsLayout = () => (
	<>
		<section className='flex flex-col min-h-screen bg-background scroll-smooth'>
		<Header/>
			<main className='container mx-auto flex-grow pb-8'>
				<Outlet/>
			</main>
		</section>
	</>
)

export default HabitsLayout
