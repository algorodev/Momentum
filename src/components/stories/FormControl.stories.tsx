import FormControl from '@components/FormControl.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/FormControl',
	component: FormControl,
	tags: ['autodocs'],
} satisfies Meta<typeof FormControl>

type Story = StoryObj<typeof meta>

const func = () => {}

export const Text: Story = {
	args: {
		name: 'text',
		label: 'Text',
		type: 'text',
		value: '',
		placeholder: 'Enter text',
		onValueChange: func
	}
}

export const Password: Story = {
	args: {
		name: 'password',
		label: 'Password',
		type: 'password',
		value: '',
		placeholder: '********',
		onValueChange: func
	}
}

export default meta
