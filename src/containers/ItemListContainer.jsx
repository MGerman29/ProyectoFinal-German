import ItemList from '../components/ItemList'
import { CardSkeleton } from '../components/Skeletons'

export default function ItemListContainer({ products, loading }) {
    if (loading) return (
        <div className="grid">
            {Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
    )
    if (!products?.length) return <p>No hay productos disponibles.</p>
    return <ItemList products={products} />
}
