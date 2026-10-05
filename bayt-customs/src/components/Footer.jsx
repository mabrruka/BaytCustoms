import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <h2>Bayt Customs</h2>

                    <p className="footer-description">
                        Premium handcrafted custom furniture and high-end
                        woodworking solutions tailored to your unique
                        architectural requirements. Crafting legacies in Libya.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Studio</h3>

                    <nav className="footer-links">
                        <Link to="/contact">About Us</Link>
                        <Link to="/showcase">Our Showcase</Link>
                        <Link to="/materials">Wood Materials</Link>
                        <Link to="/contact">Virtual Configurator</Link>
                        <Link to="/contact">Privacy Policy</Link>
                    </nav>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>

                    <div className="footer-contact">
                        <p>
                            <span>Phone:</span>{" "}
                            <a href="tel:+218911234567">
                                +218 91 123 4567
                            </a>
                        </p>

                        <p>
                            <span>WhatsApp:</span>{" "}
                            <a href="https://wa.me/218911234567">
                                +218 91 123 4567
                            </a>
                        </p>

                        <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:contactus@baytcustoms.com">
                                contactus@baytcustoms.com
                            </a>
                        </p>

                        <p>
                            <span>Location:</span> Benghazi, Libya
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>
                        © 2026 Bayt Customs. All rights reserved.
                    </p>

                    <p>
                        Mediterranean Handcraft &amp; Custom Precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;