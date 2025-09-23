import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
import { money } from '../utils/format'


export default function Cart() {
    const { items, removeItem, clear, totalPrice } = useCart()


    if (!items.length) return (
        <div>
            <p>Carrito vacío.</p>
            <Link className="button" to="/">Volver al catálogo</Link>
        </div>
    )


    const handleClear = () => {
        Swal.fire({ title: 'Vaciar carrito?', icon: 'warning', showCancelButton: true }).then(r => {
            if (r.isConfirmed) clear()
        })
    }


    return (
        <section>
            {items.map(i => <CartItem key={i.id} item={i} onRemove={removeItem} />)}
            <div className="row" style={{ marginTop: 16 }}>
                <strong>Total: {money(totalPrice)}</strong>
                <div className="row" style={{ gap: 8 }}>
                    <button className="button" onClick={handleClear}>Vaciar</button>
                    <Link className="button" to="/checkout">Ir a Checkout</Link>
                </div>
            </div>
        </section>
    )
}