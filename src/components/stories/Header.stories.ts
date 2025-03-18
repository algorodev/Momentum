import { Meta, StoryObj } from '@storybook/react'
import Header from '@components/Header.tsx'

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export default meta
