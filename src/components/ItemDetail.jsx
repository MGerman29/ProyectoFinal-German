import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'
import { money } from '../utils/format'
import Swal from 'sweetalert2'

export default function ItemDetail({ product }) {
    const [added, setAdded] = useState(false)
    const { addItem } = useCart()


    if (!product) return null



    const handleAdd = (qty) => {
        addItem(product, qty)
        setAdded(true)
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: `${qty} agregado${qty > 1 ? 's' : ''} al carrito`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <article className="card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="p">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>{money(product.price)}</strong></p>
                <p>Stock: {product.stock}</p>
                {!added ? (
                    <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
                ) : (
                    <p className="badge">Agregado al carrito ✅</p>
                )}
            </div>
        </article>
    )
}