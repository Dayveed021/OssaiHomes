import { useState } from "react"
import { NavLink, Outlet, Link } from "react-router-dom"
import "../styles/Navbar.scss";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => {
        console.log("clicked")
        setToggle(!toggle)
    }
    return (
        <>
            <div className="nav">
                <Link to="/" className="logo">HomeLander</Link>
                <div className="Hamburger" onClick={toggleMenu}>
                    <svg viewBox="0 0 100 80" width="50" height="50">
                        <rect width="50" height="7"></rect>
                        <rect y="10" width="50" height="7"></rect>
                        <rect y="20" width="50" height="7"></rect>
                    </svg>
                </div>
                <nav className={toggle ? 'nav-items' : "null"}>
                    <ul>
                        <li><NavLink to="/buy" className={({ isActive }) => (isActive ? 'active' : 'nav-list')}>Buy</NavLink></li>
                        <li><NavLink to="/list" className={({ isActive }) => (isActive ? 'active' : 'nav-list')}>List</NavLink></li>
                        <li><NavLink to="/mylist" className={({ isActive }) => (isActive ? 'active' : 'nav-list')}>MyList</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="/myagent" className={({ isActive }) => (isActive ? 'active' : 'nav-list')}>MyAgent</NavLink></li>
                        <NavLink to="/login">
                            <button className="btn">
                                Login
                            </button>
                        </NavLink>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}