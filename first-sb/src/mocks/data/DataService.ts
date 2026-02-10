export type Product = {
    name: string;
    price: string;
};

export type ProductsResponse = {
    success: boolean;
    data: Product[];
};

export async function getProducts(serverUrl: string = 'http://localhost:4000'): Promise<Product[]> {
    try {
        const response = await fetch(`${serverUrl}/products`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: ProductsResponse = await response.json();
        
        if (!result.success) {
            throw new Error('Server returned an error response');
        }
        
        return result.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Failed to fetch products:', error.message);
            throw new Error(`Failed to retrieve products: ${error.message}`);
        } else {
            console.error('Unknown error occurred while fetching products');
            throw new Error('Failed to retrieve products: Unknown error occurred');
        }
    }
}