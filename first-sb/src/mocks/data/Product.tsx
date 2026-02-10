import { type Product as ProductProps } from './DataService'

export const Product = (props: ProductProps) => (
    <div style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <h2 style={{ margin: '0 0 4px' }}>{props.name}</h2>
        <strong style={{ color: '#333' }}>{props.price}</strong>
    </div>
)