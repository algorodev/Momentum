import Button from '@components/Button.tsx'
import ChevronDown from '@components/Icons/ChevronDown.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Button',
		type: 'button',
		variant: 'primary'
	}
}

export const Secondary: Story = {
	args: {
		children: 'Button',
		type: 'button',
		variant: 'secondary'
	}
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				Click me
				<span className='w-4 h-4 rotate-270'><ChevronDown /></span>
			</>
		),
		type: 'button',
		variant: 'primary'
	}
}

export default meta
