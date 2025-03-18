import { Outlet } from 'react-router'
import Footer from '@components/Footer.tsx'
import Header from '@components/Header.tsx'

type LayoutProps = {
	isLanding?: boolean
}

const Main = ({ isLanding }: LayoutProps) => (
	<section className='flex flex-col min-h-screen bg-background'>
		{ !isLanding && <Header /> }
		<main className='container mx-auto flex-grow p-4'>
			<Outlet />
		</main>
		{ !isLanding && <Footer /> }
	</section>
)

export default Main
