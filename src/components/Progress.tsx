type ProgressProps = {
	percentage: number
	className?: string
}

const Progress = ({ className, percentage }: ProgressProps) => (
	<div
		className={`flex flex-start bg-background overflow-hidden w-full font-sans rounded-full text-xs font-medium h-2 ${className}`}>
		<div
			className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-primary text-white"
			style={{ 'width': `${percentage}%` }}></div>
	</div>
)

export default Progress
