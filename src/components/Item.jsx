import { Link } from 'react-router-dom'
import { money } from '../utils/format'


export default function Item({ product }) {
    return (
        <article className="card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="p">
                <div className="row">
                    <strong>{product.title}</strong>
                    <span className="badge">{product.brand}</span>
                </div>
                <p>{money(product.price)}</p>
                <Link className="button" to={`/item/${product.id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}