import './Nav.css';
const Nav = () => {
    return (
        <nav className="nav-bar">
            <h2 className="nav-title">My Website</h2>
            <ul className="nav-links">
                <NavLink name="Home" link="/" />
                <NavLink name="About" link="/about" />
                <NavLink name="Product" link="/product" />
                <NavLink name="Contact" link="/contact" />
            </ul>
        </nav>
    );
}

const NavLink = ({ name, link }) => {
    return (
        <li className="nav-item">
            <a href={link}>{name}</a>
        </li>
    );
}

export default Nav;