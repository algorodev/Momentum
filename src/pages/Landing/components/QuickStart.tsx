type Step = {
	number: number
	title: string
	description: string
}

type QuickStartProps = {
	steps: Step[]
}

const QuickStart = ({ steps }: QuickStartProps) => (
	<section className='py-12 mb-4'>
		<div className='container mx-auto px-4'>
			<h2 className='typography-2xl-bold text-center text-text-primary mb-2'>
				Quick Start
			</h2>
			<p className='typography-lg-regular text-center text-text-secondary max-w-xl mx-auto mb-10'>
				Start building better habits in just a few easy steps.
			</p>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				{steps.map((step, index) => (
					<div
						key={index}
						className='bg-white rounded shadow p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'
					>
						<div
							className='w-14 h-14 flex items-center justify-center mx-auto mb-4 rounded-full bg-primary-light text-white ring-4 ring-secondary-light typography-lg-bold'>
							{step.number}
						</div>
						<h3 className='typography-lg-semibold mb-2 text-text-primary'>
							{step.title}
						</h3>
						<p className='typography-md-regular text-text-secondary'>
							{step.description}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default QuickStart
