import ItemDetail from '../components/ItemDetail'


export default function ItemDetailContainer({ product, loading }) {
    if (loading) return <p>Cargando…</p>
    if (!product) return <p>Producto no encontrado.</p>
    return <ItemDetail product={product} />
}