import ItemDetail from '../components/ItemDetail'
import { DetailSkeleton } from '../components/Skeletons'

export default function ItemDetailContainer({ product, loading }) {
    if (loading) return <DetailSkeleton />
    if (!product) return <p>Producto no encontrado.</p>
    return <ItemDetail product={product} />
}
