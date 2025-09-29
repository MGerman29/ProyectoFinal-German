import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="card" style={{ padding: 24, textAlign: 'center' }}>
            <h2>404 — Página no encontrada</h2>
            <p>Volvé al catálogo para seguir explorando.</p>
            <Link className="button primary" to="/">Ir al Home</Link>
        </div>
    )
}
