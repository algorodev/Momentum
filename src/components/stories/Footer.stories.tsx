import CallToAction from '@components/CallToAction.tsx'
import { Meta, StoryObj } from '@storybook/react'
import Footer from '@components/Footer.tsx'

const meta = {
	title: 'Components/Footer',
	component: Footer,
	subcomponents: { CallToAction },
	tags: ['autodocs']
} satisfies Meta<typeof Footer>

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export default meta
