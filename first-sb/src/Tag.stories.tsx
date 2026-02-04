import Tag from './Tag'
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Cool/Tag',
    component: Tag
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        text: 'First'
    }
}

