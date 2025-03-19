type Testimonial = {
	author: string
	quote: string
}

type Stat = {
	label: string
	value: string
}

type TestimonialsProps = {
	testimonials: Testimonial[]
	stats: Stat[]
}

const Testimonials = ({ stats, testimonials }: TestimonialsProps) => (
	<section className="py-16 bg-white mb-4">
		<div className="container mx-auto px-4">
			<h2 className="typography-2xl-bold text-center text-text-primary mb-2">
				What Our Users Say
			</h2>
			<p className="typography-lg-regular text-center text-text-secondary max-w-xl mx-auto mb-10">
				Real feedback from our satisfied habit‑builders.
			</p>
			{stats && stats.length > 0 && (
				<div className="flex flex-wrap justify-center gap-6 mb-10">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<p className="typography-2xl-bold text-primary">{stat.value}</p>
							<p className="typography-md-regular text-text-secondary">{stat.label}</p>
						</div>
					))}
				</div>
			)}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="relative bg-white p-6 rounded shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
					>
						<span className="absolute top-4 left-4 text-primary typography-jumbo-bold opacity-20 select-none">
              “
            </span>
						<p className="typography-lg-regular text-text-secondary text-center italic relative mb-2 z-10">
							&ldquo;{testimonial.quote}&rdquo;
						</p>
						<span className="absolute bottom-0 right-4 text-primary typography-jumbo-bold opacity-20 select-none">
              ”
            </span>
						<p className="typography-md-semibold text-text-primary text-center relative z-10">
							- {testimonial.author}
						</p>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default Testimonials
