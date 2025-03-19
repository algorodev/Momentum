const Footer = () => {
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
								<li>
									<a
										href="/faq"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="/blog"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="/help"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Help Center
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-text-primary typography-md-semibold mb-2">
								Company
							</h3>
							<ul className="space-y-1">
								<li>
									<a
										href="/about"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Contact
									</a>
								</li>
								<li>
									<a
										href="/careers"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Careers
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-text-primary typography-md-semibold mb-2">
								Legal
							</h3>
							<ul className="space-y-1">
								<li>
									<a
										href="/privacy"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="/terms"
										className="inline-flex items-center typography-md-regular text-primary hover:underline"
									>
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
