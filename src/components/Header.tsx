import CallToAction from '@components/CallToAction.tsx'
import Logo from '@components/Icons/Logo.tsx'
import { RootState } from '@store/store.ts'
import { useSelector } from 'react-redux'

const Header = () => {
	const auth = useSelector((state: RootState) => state.auth)

	return (
		<header className="bg-white shadow py-3 px-4">
			<div className="container mx-auto flex items-center justify-between">
				<CallToAction path="/" type='link' className="flex items-center space-x-2">
					<Logo/>
				</CallToAction>
				<nav>
					<ul className="flex space-x-6">
						{!auth.isLoggedIn && (
							<>
								<li>
									<CallToAction path="/login" type='link'>
										Log In
									</CallToAction>
								</li>
								<li>
									<CallToAction path="/signup" type='link'>
										Sign Up
									</CallToAction>
								</li></>
						)}
						{auth.isLoggedIn && (
							<>
								<li>
									<CallToAction path="/habits" type='link'>
										Habits
									</CallToAction>
								</li>
								<li>
									<CallToAction path="/habits/dashboard" type='link'>
										Dashboard
									</CallToAction>
								</li>
								<li>
									<CallToAction path="/profile" type='link'>
										Profile
									</CallToAction>
								</li>
								<li>
									<CallToAction path="/" type='link'>
										Log Out
									</CallToAction>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
