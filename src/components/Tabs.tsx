import { Dispatch, SetStateAction } from 'react'

type TabsProps = {
	options: string[]
	activeTab: string
	onTabChange: Dispatch<SetStateAction<string>>
}

const Tabs = ({ activeTab, onTabChange, options}: TabsProps) => (
	<>
		<div role='tablist' aria-orientation='horizontal'
		     className={`h-10 items-center justify-center gap-6 rounded-md bg-background p-1 grid w-full grid-cols-${options.length}`}
		     tabIndex={0} data-orientation='horizontal' style={{ 'outline': 'none' }}>
			{options.map((option, i) => (
				<button key={i}
				        type='button'
				        role='tab'
				        aria-selected='false'
				        data-state='inactive'
				        className={'border border-border rounded-sm px-3 py-1.5 typography-md-regular cursor-pointer transition-all ' +
											(activeTab === option ? ' bg-primary text-white :shadow-none' : 'bg-white')}
				        tabIndex={i}
				        data-orientation='horizontal'
				        onClick={() => onTabChange(option)}>
					{option.toUpperCase()}
				</button>
			))}
		</div>



	</>
)

export default Tabs
