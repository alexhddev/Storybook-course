import React, { useEffect, useState } from 'react'
import { getProducts } from './DataService'
import { type Product as ProductType } from './DataService'
import { Product as ProductComponent } from './Product'

export const Products: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)
                const productsData = await getProducts()
                setProducts(productsData)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load products')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div>Loading products...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
                <h2>Oops! Something went wrong.</h2>
                <div>Error: {error}</div>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div>No products available</div>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>Products</h1>
            <div style={{ 
                display: 'grid', 
                gap: '16px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' 
            }}>
                {products.map((product, index) => (
                    <ProductComponent 
                        key={`${product.name}-${index}`}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

