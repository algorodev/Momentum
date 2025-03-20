import CallToAction from '@components/CallToAction.tsx'

const Footer = () => {
	const resourceLinks = [
		{
			title: 'FAQ',
			link: '/faq',
		},
		{
			title: 'Blog',
			link: '/blog',
		},
		{
			title: 'Help Center',
			link: '/help',
		},
	]
	const companyLinks = [
		{
			title: 'About Us',
			link: '/about',
		},
		{
			title: 'Contact',
			link: '/contact',
		},
		{
			title: 'Careers',
			link: '/careers',
		},
	]
	const legalLinks = [
		{
			title: 'Privacy Policy',
			link: '/privacy',
		},
		{
			title: 'Terms of Service',
			link: '/terms',
		},
	]

	return (
		<footer className="bg-background border-t border-divider py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
					<div className="mb-4 md:mb-0">
						<a href="/" className="text-text-primary typography-jumbo-bold">
							Momentum
						</a>
						<p className="text-text-secondary typography-md-regular">
							Build better habits, every day.
						</p>
					</div>
					<div className="flex flex-wrap gap-6">
						<div>
							<h3 className="text-text-primary typography-md-semibold mb-2">
								Resources
							</h3>
							<ul className="space-y-1">
								{resourceLinks.map((link, index) => (
									<li key={index}>
										<CallToAction
											path={link.link}
											type='link'
										>
											{link.title}
										</CallToAction>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-text-primary typography-md-semibold mb-2">
								Company
							</h3>
							<ul className="space-y-1">
								{companyLinks.map((link, index) => (
									<li key={index}>
										<CallToAction
											path={link.link}
											type='link'
										>
											{link.title}
										</CallToAction>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-text-primary typography-md-semibold mb-2">
								Legal
							</h3>
							<ul className="space-y-1">
								{legalLinks.map((link, index) => (
									<li key={index}>
										<CallToAction
											path={link.link}
											type='link'
										>
											{link.title}
										</CallToAction>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
