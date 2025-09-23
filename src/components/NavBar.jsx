import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


export default function NavBar() {
    const link = ({ isActive }) => ({ padding: '8px 10px', borderRadius: 10, border: '1px solid #222', background: isActive ? '#151515' : '#0d0d0d' })
    return (
        <nav>
            <Link to="/" className="nav-brand">SNEAKRS</Link>
            <NavLink to="/" style={link}>Home</NavLink>
            <NavLink to="/category/running" style={link}>Running</NavLink>
            <NavLink to="/category/basketball" style={link}>Basketball</NavLink>
            <NavLink to="/category/lifestyle" style={link}>Lifestyle</NavLink>
            <div style={{ marginLeft: 'auto' }}>
                <CartWidget />
            </div>
        </nav>
    )
}