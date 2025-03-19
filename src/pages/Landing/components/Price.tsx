import CallToAction from '@components/CallToAction.tsx'

const Price = () => (
	<section id="pricing" className="py-16 mb-4">
		<div className="container mx-auto px-4">
			<h2 className="typography-2xl-bold text-center text-text-primary mb-2">
				Pricing
			</h2>
			<p className="typography-lg-regular text-center text-text-secondary max-w-xl mx-auto mb-10">
				We believe in building better habits without barriers—so our platform is entirely free, forever.
			</p>

			<div className="max-w-md mx-auto">
				<div className="bg-white rounded-lg shadow p-8 text-center">
					<h3 className="typography-lg-semibold text-text-primary mb-4">
						Forever Free
					</h3>
					<div className="typography-jumbo-bold text-primary mb-4">
						$0<span className="typography-md-regular text-text-secondary">/mo</span>
					</div>
					<ul className="list-disc list-inside text-left mb-6 space-y-1">
						<li className='typography-md-regular text-text-secondary'>No credit card required</li>
						<li className='typography-md-regular text-text-secondary'>Unlimited habit tracking</li>
						<li className='typography-md-regular text-text-secondary'>Full access to all features</li>
						<li className='typography-md-regular text-text-secondary'>Ongoing updates & support</li>
					</ul>
					<CallToAction type='primary' path='/signup'>
						Get Started
					</CallToAction>
				</div>
			</div>
		</div>
	</section>
)

export default Price
