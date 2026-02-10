import type { Meta, StoryObj } from '@storybook/react'
import { Products } from './Products'
import { type ProductsResponse } from './DataService'
import { http, HttpResponse, delay } from 'msw'

const meta = {
    title: 'Example/Products',
    component: Products
} satisfies Meta<typeof Products>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

const mockData: ProductsResponse = {
    success: true,
    data: [
        {
            name: 'Mock product 1',
            price: 'Mock price 1'
        },
        {
            name: 'Mock product 2',
            price: 'Mock price 2'
        }
    ]
}

export const WithMockData: Story = {
    parameters: {
        msw: {
            handlers: [
               http.get('http://localhost:4000/products', ()=>{
                return HttpResponse.json(mockData)
               }) 
            ]
        }
    }
}

export const WithNetworkError: Story = {
    parameters: {
        msw: {
            handlers: [
               http.get('http://localhost:4000/products', ()=>{
                return HttpResponse.json(
                    {error: 'Mock error'},
                    {status: 401}
                )
               }) 
            ]
        }
    }
}

export const WithLoadingData: Story = {
    parameters: {
        msw: {
            handlers: [
               http.get('http://localhost:4000/products',async ()=>{
                await delay('infinite')
                return HttpResponse.json(mockData)
               }) 
            ]
        }
    }
}
