import HeroSection from '@pages/Landing/components/HeroSection.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Landing/HeroSection',
	component: HeroSection,
	tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export default meta
