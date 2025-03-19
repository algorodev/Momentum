import { Dispatch, SetStateAction } from 'react'

type FormControlProps = {
	name: string
	label: string
	type: string
	value: string
	placeholder: string
	onValueChange: Dispatch<SetStateAction<string>>
}

const FormControl = ({name, label, onValueChange, placeholder, type, value}: FormControlProps) => {
	return (
		<div>
			<label className='block typography-md-regular text-text-secondary mb-1'>{label}</label>
			<input
				id={name}
				type={type}
				className='typography-md-regular w-full px-3 py-2 border-2 border-border hover:border-primary focus:border-primary rounded outline-0'
				value={value}
				onChange={(e) => onValueChange(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default FormControl
