import type { Meta, StoryObj } from '@storybook/react'
import { Products } from './Products'

const meta = {
    title: 'Example/Products',
    component: Products
} satisfies Meta<typeof Products>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
