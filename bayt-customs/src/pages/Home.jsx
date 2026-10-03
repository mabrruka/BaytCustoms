import { Link } from "react-router-dom";
import { images } from "../images";
import "../styles/home.css";

function Home() {
    return (
        <main className="home">

            {/* HERO */}
            <section
                className="hero"
                style={{
                    backgroundImage: `url(${images.homeHero})`,
                }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <p className="hero-eyebrow">BAYT CUSTOMS</p>

                    <h1>
                        Furniture
                        <br />
                        Made For You
                    </h1>

                    <p className="hero-description">
                        Bespoke furniture designed and crafted around your space,
                        lifestyle and personal style.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/showcase" className="button button-primary">
                            View Showcase
                        </Link>

                        <Link to="/contact" className="button button-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="home-intro">
                <div className="section-container">

                    <div className="intro-text">
                        <p className="section-eyebrow">BAYT CUSTOMS</p>

                        <h2>
                            Crafted around
                            <br />
                            your space.
                        </h2>

                        <p>
                            Every piece we create is designed specifically for the
                            environment it belongs in. From the proportions to the
                            materials and finishes, everything is considered.
                        </p>

                        <Link to="/showcase" className="text-link">
                            Explore our work →
                        </Link>
                    </div>

                    <div className="intro-image">
                        <img
                            src={images.homeIntro}
                            alt="Bayt Customs custom furniture"
                        />
                    </div>

                </div>
            </section>


            {/* FEATURED FURNITURE */}
            <section className="featured">
                <div className="section-container">

                    <div className="section-heading">
                        <p className="section-eyebrow">OUR WORK</p>

                        <h2>
                            Made for the way
                            <br />
                            you live.
                        </h2>
                    </div>

                    <div className="featured-grid">

                        <div className="featured-image">
                            <img
                                src={images.homeFeaturedFurniture}
                                alt="Custom Bayt Customs furniture"
                            />
                        </div>

                        <div className="featured-content">
                            <p>
                                We create furniture that balances functionality,
                                craftsmanship and timeless design.
                            </p>

                            <Link to="/materials" className="text-link">
                                Discover our materials →
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Home;