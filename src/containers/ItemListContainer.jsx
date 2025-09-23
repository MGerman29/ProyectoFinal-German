import ItemList from '../components/ItemList'


export default function ItemListContainer({ products, loading }) {
    if (loading) return <p>Cargando…</p>
    if (!products?.length) return <p>No hay productos disponibles.</p>
    return <ItemList products={products} />
}