const Logo = () => (
	<svg
		width="120"
		height="30"
		viewBox="0 0 250 60"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="30" cy="30" r="25" fill="#393B6E" />
		<polyline
			points="20,30 28,38 42,22"
			fill="none"
			stroke="#FFFFFF"
			strokeWidth="4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<text
			x="60"
			y="36"
			fontFamily="Arial, sans-serif"
			fontSize="28"
			fill="#393B6E"
			fontWeight="bold"
		>
			Momentum
		</text>
		<text
			x="60"
			y="52"
			fontFamily="Arial, sans-serif"
			fontSize="12"
			fill="#4B5563"
		>
			Habit Tracker
		</text>
	</svg>
)

export default Logo
