import Overlay from '@components/Overlay.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Overlay',
	component: Overlay,
	tags: ['autodocs'],
} satisfies Meta<typeof Overlay>

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export default meta
