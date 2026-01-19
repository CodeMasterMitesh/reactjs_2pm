import './Nav.css';
const Nav = () => {
    return (
        <nav className="nav-bar">
            <h2 className="nav-title">My Website</h2>
            <ul className="nav-links">
                <NavLink name="Home" link="" />
                <NavLink name="About" link="" />
                <NavLink name="Blog" link="" />
                <NavLink name="Contact" link="" />
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