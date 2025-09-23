import Item from './Item'


export default function ItemList({ products }) {
    return (
        <div className="grid">
            {products.map(p => <Item key={p.id} product={p} />)}
        </div>
    )
}