import { money } from '../utils/format'


export default function CartItem({ item, onRemove }) {
    return (
        <div className="row" style={{ padding: '8px 0', borderBottom: '1px solid #222' }}>
            <div className="row" style={{ gap: 8 }}>
                <img src={item.thumbnail} alt={item.title} width={56} height={56} style={{ borderRadius: 10, objectFit: 'cover' }} />
                <div>
                    <strong>{item.title}</strong>
                    <div className="badge">x{item.quantity}</div>
                </div>
            </div>
            <div className="row" style={{ gap: 8 }}>
                <span>{money(item.price * item.quantity)}</span>
                <button className="button" onClick={() => onRemove(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}