import type { Meta, StoryObj } from '@storybook/react-vite';
import Post from './Post'
import { expect, userEvent, fn, within, waitFor } from 'storybook/test';

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

export const DeleteTagTest: Story = {
    args: {
        initialTags: ['Cool', 'Pretty'],
        onTagRemoved: fn()
    },
    play: async ({ canvas, args }) => {
        const prettyTag = await canvas.findByText('Pretty', {
            selector: 'div'
        })
        const coolTag = await canvas.findByText('Cool', {
            selector: 'div'
        })

        await expect(prettyTag).toBeInTheDocument()
        await expect(coolTag).toBeInTheDocument()

        const deleteCoolTagButton = canvas.getAllByRole('button')[0]

        const user = userEvent.setup()
        await user.click(deleteCoolTagButton)

        await expect(canvas.queryByText('Cool')).not.toBeInTheDocument()

        await expect(args.onTagRemoved).toHaveBeenCalledWith('Cool')
    }
}


export const AddTagTest: Story = {
    args: {
        onTagAdded: fn()
    },
    play: async ({ canvas, args }) => {

        const input = await canvas.findByPlaceholderText('Add tag...')

        const user = userEvent.setup()
        await user.type(input, 'Awesome')

        const addButton = await canvas.findByText('Add')
        await user.click(addButton)

        const newTag = await canvas.findByText('Awesome')
        await expect(newTag).toBeInTheDocument()

        await expect(args.onTagAdded).toHaveBeenCalledWith('Awesome')

        await expect(input).toHaveValue('')
    }
}

export const BaseGenerated: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement.ownerDocument.body);
        await userEvent.click(await canvas.findByPlaceholderText('Add tag...', { exact: true }));
        await userEvent.click(await canvas.findByPlaceholderText('Add tag...', { exact: true }));
        await userEvent.type(await canvas.findByPlaceholderText('Add tag...', { exact: true }), 'Cool');
        await userEvent.click(await canvas.findByRole('button', { name: 'Add' }));
        await waitFor(() => expect(canvas.queryByText('Cool', { exact: true })).toBeVisible());
    }
};
