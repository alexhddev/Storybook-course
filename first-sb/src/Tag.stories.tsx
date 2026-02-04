import Tag from './Tag'
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Cool/Tag',
    component: Tag,
    tags: ['autodocs'],
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

/**The base story */
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

type MultipleStoryArgs = {
    gap: number;
}

export const Multiple: StoryObj<MultipleStoryArgs> = {
    args: {
        gap: 8
    },
    argTypes: {
        gap: {
            control: {
                type: 'range',
                min: 0,
                max: 32,
                step: 2
            }
        }
    },
    render: (args)=>(
        <div
            style={{
                display: 'flex',
                gap: `${args.gap}px`
            }}
        >
            <Tag text='First' color='blue'/>
            <Tag text='Second' color='pink'/>
            <Tag text='Trird' color='orange'/>
        </div>
    )
}

