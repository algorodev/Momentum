import Price from '@pages/Landing/components/Price.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Landing/Price',
	component: Price,
	tags: ['autodocs'],
} satisfies Meta<typeof Price>

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export default meta
