import ArrowDown from '@components/Icons/ArrowDown.tsx'
import Overlay from '@components/Overlay.tsx'

const HeroSection = () => (
	<section
		role="banner"
		className="relative bg-gradient-to-r from-primary-dark to-primary text-white py-20 overflow-hidden mb-4"
	>
		<Overlay />
		<div className="relative container mx-auto px-4 md:px-8 lg:px-20 flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center justify-between">
			<div className="w-full md:w-1/2 text-left">
				<h1 className="typography-jumbo-bold mb-2">
					Welcome to <span className='text-secondary-light'>Momentum</span>
				</h1>
				<ul className="list-disc list-inside marker:text-secondary-light mb-4 text-left md:text-left space-y-1">
					<li>Build daily habits effortlessly</li>
					<li>Track your progress visually</li>
					<li>Stay motivated every day</li>
				</ul>
				<p className="typography-xl-regular mb-8">
					Track your habits, build <span className='text-secondary-light'>momentum</span>, and celebrate progress.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
					<a
						href="/signup"
						className="inline-block bg-secondary hover:bg-secondary-dark text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn delay-200"
					>
						Get Started
					</a>
					<a
						href="#features"
						className="inline-block border border-secondary text-white text-center typography-lg-semibold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn delay-200"
					>
						Learn More
					</a>
				</div>
			</div>
			<div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
				<img
					src="/assets/hero.svg"
					alt="Momentum app"
					className="w-4/5 h-auto"
				/>
			</div>
		</div>
		<div className="absolute bottom-8 left-0 right-0 flex justify-center">
			<a href="#features" className="w-6 h-6 animate-bounce text-white">
				<ArrowDown/>
			</a>
		</div>
	</section>
);

export default HeroSection;
