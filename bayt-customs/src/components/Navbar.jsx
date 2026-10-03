import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            <Link to="/" className="navbar-logo">
                BAYT CUSTOMS
            </Link>

            <nav className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/showcase">
                    Showcase
                </Link>

                <Link to="/materials">
                    Materials
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

            </nav>

        </header>
    );
}

export default Navbar;