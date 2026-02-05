import type { Meta, StoryObj } from '@storybook/react-vite';
import Post from './Post'

const meta = {
    title: 'Cool/Post',
    component: Post,
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        content: 'The content of a cool story',
        title: 'Cool Story',
        onTagAdded: ()=>{},
        onTagRemoved: ()=>{}
    }
}
