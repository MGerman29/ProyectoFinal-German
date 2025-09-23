import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


export default function CartWidget() {
    const { totalUnits } = useCart()
    return (
        <Link to="/cart" className="row" aria-label="Carrito">
            <span className="badge">🛒 {totalUnits}</span>
        </Link>
    )
}