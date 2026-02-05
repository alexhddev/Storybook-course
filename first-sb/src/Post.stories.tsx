import type { Meta, StoryObj } from '@storybook/react-vite';
import Post from './Post'
import { expect } from 'storybook/test'

const meta = {
    title: 'Cool/Post',
    component: Post,
    // default args
    args: {
        content: 'The content of a cool story',
        title: 'Cool Story',
        onTagAdded: () => { },
        onTagRemoved: () => { }
    }
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>;

export const Base: Story = {}

export const WithInitialTagsTest: Story = {
    args: {
        initialTags: ['Cool', 'Pretty']
    },
    play: async ({ canvas }) => {
        const prettyTag = await canvas.findByText('Pretty', {
            selector: 'div'
        })
        const coolTag = await canvas.findByText('Cool', {
            selector: 'div'
        })

        await expect(prettyTag).toBeInTheDocument()
        await expect(coolTag).toBeInTheDocument()

    }
}
