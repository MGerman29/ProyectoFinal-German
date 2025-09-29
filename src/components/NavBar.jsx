import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function NavBar() {
    const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
    return (
        <nav>
            <Link to="/" className="nav-brand">SNEAKRS</Link>
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/category/running" className={linkClass}>Running</NavLink>
            <NavLink to="/category/basketball" className={linkClass}>Basketball</NavLink>
            <NavLink to="/category/lifestyle" className={linkClass}>Lifestyle</NavLink>
            <div style={{ marginLeft: 'auto' }}><CartWidget /></div>
        </nav>
    )
}
