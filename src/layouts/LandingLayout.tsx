import { Outlet } from 'react-router-dom'
import Footer from '@components/Footer.tsx'
import Header from '@components/Header.tsx'

const LandingLayout = () => (
	<section className='flex flex-col min-h-screen bg-background scroll-smooth'>
		<Header />
		<main className='container mx-auto flex-grow'>
			<Outlet />
		</main>
		<Footer />
	</section>
)

export default LandingLayout
