import CallToAction from '@components/CallToAction.tsx'
import ChevronDown from '@components/Icons/ChevronDown.tsx'
import { ReactNode } from 'react'

type Feature = {
	title: string;
	description: string;
	icon: ReactNode;
	benefits?: string[];
	link?: string;
};

type FeaturesOverviewProps = {
	features: Feature[];
};

const FeaturesOverview = ({ features }: FeaturesOverviewProps) => (
	<section id="features" className="py-12 mb-4">
		<div className="container mx-auto px-4">
			<h2 className="typography-2xl-bold text-center text-text-primary mb-2">
				Features
			</h2>
			<p className="typography-lg-regular text-center text-text-secondary max-w-xl mx-auto mb-10">
				Discover how our platform helps you track habits, visualize progress, and stay motivated.
			</p>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary-light rounded-full text-white text-3xl">
							{feature.icon}
						</div>
						<h3 className="typography-lg-semibold mb-2 text-text-primary">
							{feature.title}
						</h3>
						<p className="typography-md-regular text-text-secondary">{feature.description}</p>
						{feature.benefits && feature.benefits.length > 0 && (
							<ul className="list-disc-none list-inside text-left w-fit mt-4 mx-auto max-w-sm">
								{feature.benefits.map((benefit, i) => (
									<li key={i} className="typography-md-regular text-text-secondary">
										- {benefit}
									</li>
								))}
							</ul>
						)}
						{feature.link && (
							<div className="mt-4">
								<CallToAction
									type='link'
									path={feature.link}
								>
									Learn More
									<span className='w-4 h-4 rotate-270'><ChevronDown /></span>
								</CallToAction>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	</section>
);

export default FeaturesOverview;