import Tag from './Tag'
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Cool/Tag',
    component: Tag,
    parameters: {
        backgrounds: {
            options: {
                Gray: { name: 'Gray', value: 'rgb(51, 54, 40)' },
            }
        },
    }
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        text: 'First'
    },
    parameters: {
        backgrounds: {
            options: {
                Blue: { name: 'Blue', value: 'rgb(22, 149, 155)' },
            }
        },
    }
}

export const Pink: Story = {
    args: {
        text: "First",
        color: "pink"
    }
};

export const Orange: Story = {
    args: {
        text: "First",
        color: "orange"
    }
};

