import { NavLink } from "react-router-dom";
import './Header.scss'; // In big project i always use module.scss
import { PATHS } from '../../Constants';

const Header = () => {
    return (
        <header className="header">
            <NavLink to={PATHS.counter}>Counter</NavLink>
            <NavLink to={PATHS.list}>List</NavLink>
        </header>
    );
};

export default Header;