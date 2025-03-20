import CallToAction from '@components/CallToAction.tsx'
import ChevronDown from '@components/Icons/ChevronDown.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/CallToAction',
	component: CallToAction,
	tags: ['autodocs'],
} satisfies Meta<typeof CallToAction>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Call to action',
		type: 'primary',
		path: '/nowhere'
	}
}

export const Secondary: Story = {
	args: {
		children: 'Call to action',
		type: 'secondary',
		path: '/nowhere'
	}
}

export const Tertiary: Story = {
	args: {
		children: 'Call to action',
		type: 'tertiary',
		path: '/nowhere'
	}
}

export const Link: Story = {
	args: {
		children: 'Call to action',
		type: 'link',
		path: '/nowhere'
	}
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				Click me
				<span className='w-4 h-4 rotate-270'><ChevronDown/></span>
			</>
		),
		type: 'primary',
		path: '/nowhere'
	}
}

export const LinkWithIcon: Story = {
	args: {
		children: (
			<>
				Click me
				<span className='w-4 h-4 rotate-270'><ChevronDown/></span>
			</>
		),
		type: 'link',
		path: '/nowhere'
	}
}

export default meta
