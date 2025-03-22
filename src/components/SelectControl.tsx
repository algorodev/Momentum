import ChevronDown from '@components/Icons/ChevronDown.tsx'
import { useEffect, useRef, useState } from 'react'

type Option = {
	value: string
	label: string
}

type SelectControlProps = {
	categoryOptions: Option[]
	label: string
	value: string
	onValueChange: (category: string) => void
}

const SelectControl = ({ categoryOptions, label, onValueChange, value }: SelectControlProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<div className="relative" ref={dropdownRef}>
			<label className='block typography-md-regular text-text-secondary mb-1'>{label}</label>
			<button
				type="button"
				className="flex w-full items-center justify-between typography-md-regular text-text-secondary p-3 border-2 border-border hover:border-primary focus:border-primary rounded outline-0"
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				aria-haspopup="listbox"
				aria-expanded={isDropdownOpen}
			>
				<span>{categoryOptions.find((cat) => cat.value === value)?.label || "Category"}</span>
				<span className='w-4 h-4'>
					<ChevronDown/>
				</span>
			</button>

			{isDropdownOpen && (
				<div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-surface text-text-secondary shadow-md">
					<ul className="py-1 max-h-60 overflow-auto" role="listbox">
						{categoryOptions.map((option) => (
							<li
								key={option.value}
								className="typography-md-regular w-full px-3 py-2 hover:bg-primary-light hover:text-white transition-colors outline-0"
								onClick={() => {
									onValueChange(option.value)
									setIsDropdownOpen(false)
								}}
								role="option"
								aria-selected={value === option.value}
							>
								{option.label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default SelectControl
