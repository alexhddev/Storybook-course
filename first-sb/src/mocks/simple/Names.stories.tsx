import type { Meta, StoryObj } from '@storybook/react-vite';
import { Name } from './Name';
import { mocked } from 'storybook/test';
import { getRandomName } from './Utils'

const meta = {
    title: 'Mocks/Name',
    component: Name,

} satisfies Meta<typeof Name>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Random values
 */
export const Default: Story = {};


export const WithMockData: Story = {
    beforeEach: ()=>{
        mocked(getRandomName).mockReturnValue('Fixed Name')
    }
};



