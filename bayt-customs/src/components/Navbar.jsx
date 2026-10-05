import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    Bayt Customs
                </Link>

                <nav className="navbar-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/showcase"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Showcase
                    </NavLink>

                    <NavLink
                        to="/materials"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Materials
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                <div className="navbar-actions">
                    <div className="language-switcher">
                        <button
                            type="button"
                            className="language-option active-language"
                        >
                            EN
                        </button>

                        <span className="language-divider">|</span>

                        <button
                            type="button"
                            className="language-option"
                        >
                            AR
                        </button>
                    </div>

                    <Link
                        to="/contact"
                        className="specification-button"
                    >
                        Send Specification
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;