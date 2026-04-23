import { Link, NavLink } from 'react-router';
// console.log(NavLink)
import './Nav.css';
const Nav = () => {
    return (
        <nav className="nav-bar">
            <h2 className="nav-title">My Website</h2>
            <ul className="nav-links">
                <MenuItems name="Home" link="/" />
                <MenuItems name="About" link="/about" />
                <MenuItems name="Product" link="/product" />
                <MenuItems name="Contact" link="/contact" />
                <MenuItems name="WetherApp" link="/WetherApp" />
            </ul>
        </nav>
    );
}

const MenuItems = ({ name, link }) => {
    return (
        <li className="nav-item">
            <NavLink  to={link}>{name}</NavLink >
            {/* <Link to={link}>{name}</Link> */}
        </li>
    );
}

export default Nav;


// Detailed Differences
// Feature 	Link	NavLink
// Purpose	Used for basic internal navigation within the React application.	Used for navigation menus (like navbars or tabs) where the active link needs to be highlighted.
// Active State	Does not provide a built-in way to indicate if it's the current page.	Automatically adds an active class or other styling attributes to the active link.
// Styling Props (v6+)	Uses standard className and style props.	className, style, and children can all accept a function that receives an { isActive, isPending } object to apply conditional styling.
// Accessibility	Requires manual implementation for accessibility features like aria-current.	Automatically includes aria-current="page" on the active link, improving accessibility for screen readers.
// Usage	Ideal for general-purpose links within your app, such as in a sidebar or a "back to home" button, where highlighting is unnecessary.	Best for primary navigation elements like a main menu, where users need a visual indicator of their current location.