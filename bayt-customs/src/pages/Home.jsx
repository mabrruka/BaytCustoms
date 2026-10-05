import { Link } from "react-router-dom";
import { images } from "../images";
import "../styles/home.css";

function Home() {
    const categories = [
        {
            title: "Custom Kitchens",
            description:
                "Integrated culinary spaces meticulously designed for seamless flow, culinary art, and premium hosting.",
            image: images.kitchenImage,
        },
        {
            title: "Wardrobes & Cabinets",
            description:
                "Architectural closet systems and built-in dressers configured perfectly to maximize space and preserve style.",
            image: images.wardrobeImage,
        },
        {
            title: "Dining Furniture",
            description:
                "Tables and credenzas built to host unforgettable gatherings.",
            image: images.diningImage,
        },
        {
            title: "Living Room",
            description:
                "Serene coffee tables, entertainment units, and bespoke accent panels.",
            image: images.livingRoomImage,
        },
        {
            title: "Bedroom & Custom Woodwork",
            description:
                "Intimate bedframes, paneling, and unique wooden architectural structures.",
            image: images.bedroomImage,
        },
    ];

    const galleryItems = [
        {
            title: "Walnut Hearth Kitchen",
            description:
                "A stunning culinary hearth emphasizing deep walnut grain flows, integrated storage solutions, and hand-finished warm oil coats.",
            image: images.galleryWalnutKitchen,
        },
        {
            title: "Oak Meadow Dining Table",
            description:
                "Sculpted solid oak dining table featuring organic natural edge contours and a robust, architectural interlocking leg frame joinery.",
            image: images.galleryOakDining,
        },
        {
            title: "Espresso Frame Wardrobe",
            description:
                "A luxurious dressing solution structured with dark-stained espresso oak panels, featuring hand-sculpted fluted handle pulls.",
            image: images.galleryEspressoWardrobe,
        },
    ];

    const processSteps = [
        {
            number: "01",
            title: "Consultation",
            description:
                "We sit down in our showroom or your home to understand your spatial needs, storage flows, material taste, and vision.",
        },
        {
            number: "02",
            title: "Custom Design",
            description:
                "Our designer develops 3D models and precise scale blueprints showing exactly how wood finishes integrate with your walls.",
        },
        {
            number: "03",
            title: "Crafting",
            description:
                "Master carpenters select individual planks, cut precise joinery, and manually sand and finish each segment to perfection.",
        },
        {
            number: "04",
            title: "Installation",
            description:
                "Our expert installation crew delivers and seamlessly installs your custom kitchen or woodwork, treating your home like our own.",
        },
    ];

    const materials = [
        {
            name: "Oak",
            description: "Strong, resilient grain",
            image: images.materialOak,
        },
        {
            name: "Walnut",
            description: "Premium dark elegance",
            image: images.materialWalnut,
        },
        {
            name: "Ash",
            description: "Contemporary pale warmth",
            image: images.materialAsh,
        },
        {
            name: "Pine",
            description: "Rustic character & warmth",
            image: images.materialPine,
        },
    ];

    return (
        <main className="home">

            {/* HERO */}
            <section
                className="hero"
                style={{
                    backgroundImage: `url("${images.homeHero}")`,
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
                        Custom kitchens, cabinetry, wardrobes and furniture,
                        crafted from wood and designed around the way you live.
                    </p>
                </div>
            </section>

            {/* OUR LEGACY & PHILOSOPHY */}
            <section className="legacy-section">
                <div className="legacy-container">

                    <div className="legacy-content">
                        <p className="section-eyebrow">
                            Our Legacy & Philosophy
                        </p>

                        <h2>Where Wood Meets Home</h2>

                        <p className="legacy-description">
                            Bayt Customs blends the timeless art of traditional
                            Mediterranean woodworking with precise modern design.
                            From our Libyan workshop, we source premium sustainable
                            timbers to create custom kitchens, wardrobes, and
                            furniture tailored precisely to your home’s architectural
                            rhythm.
                        </p>

                        <p className="legacy-description">
                            Every joint, grain direction, and finish is carefully
                            curated by our master craftsmen to ensure your custom
                            pieces endure for generations, echoing natural beauty
                            and premium utility.
                        </p>

                        <div className="legacy-badge">
                            Custom specifications welcome
                        </div>
                    </div>

                    <div className="legacy-image-wrapper">
                        <img
                            src={images.legacyImage}
                            alt="The Bayt Customs Artisans"
                            className="legacy-image"
                        />

                        <p className="legacy-caption">
                            The Bayt Customs Artisans
                        </p>
                    </div>

                </div>
            </section>

            {/* ARCHITECTURAL WOODWORKING */}
            <section className="categories-section">
                <div className="section-heading">
                    <p className="section-eyebrow">
                        Architectural Woodworking
                    </p>

                    <h2>Bespoke Categories</h2>
                </div>

                {/* Kitchens + Wardrobes = 50/50 */}
                <div className="categories-feature-grid">
                    {categories.slice(0, 2).map((category) => (
                        <article
                            className="category-card category-card-large"
                            key={category.title}
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="category-image"
                            />

                            <div className="category-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Remaining 3 */}
                <div className="categories-secondary-grid">
                    {categories.slice(2).map((category) => (
                        <article
                            className="category-card"
                            key={category.title}
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="category-image"
                            />

                            <div className="category-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* MASTERPIECE GALLERY */}
            <section className="gallery-section">
                <div className="gallery-header">
                    <div>
                        <p className="gallery-eyebrow">
                            Limited Handcrafted Editions
                        </p>

                        <h2>The Masterpiece Gallery</h2>
                    </div>

                    <Link
                        to="/showcase"
                        className="gallery-link"
                    >
                        Explore Showcase →
                    </Link>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <article
                            className="gallery-card"
                            key={item.title}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="gallery-image"
                            />

                            <div className="gallery-card-content">
                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                                <Link
                                    to="/showcase"
                                    className="explore-piece"
                                >
                                    Explore Piece.
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="process-section">
                <div className="process-heading">
                    <p className="section-eyebrow">
                        How We Work
                    </p>

                    <h2>The Path to Bespoke</h2>
                </div>

                <div className="process-grid">
                    {processSteps.map((step) => (
                        <article
                            className="process-card"
                            key={step.number}
                        >
                            <span className="process-number">
                                {step.number}
                            </span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* MATERIALS */}
            <section className="materials-section">
                <div className="materials-header">
                    <h2>
                        We work with the finest natural materials.
                    </h2>

                    <Link
                        to="/materials"
                        className="materials-link"
                    >
                        Explore Materials →
                    </Link>
                </div>

                <div className="materials-row">
                    {materials.map((material) => (
                        <article
                            className="material-card"
                            key={material.name}
                        >
                            <img
                                src={material.image}
                                alt={material.name}
                                className="material-image"
                            />

                            <div className="material-content">
                                <h3>{material.name}</h3>

                                <p>{material.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="cta-section">
                <div className="cta-content">

                    <h2>
                        Ready to Create Something Beautiful?
                    </h2>

                    <p className="cta-description">
                        Let’s discuss your upcoming kitchen project,
                        bespoke wardrobe system, or unique architectural
                        custom furniture. Get in touch directly.
                    </p>

                    <div className="cta-buttons">
                        <Link
                            to="/contact"
                            className="cta-button cta-button-light"
                        >
                            Request a Quote
                        </Link>

                        <Link
                            to="/contact"
                            className="cta-button cta-button-dark"
                        >
                            Book a Consultation
                        </Link>
                    </div>

                    <p className="cta-email-text">
                        Or email us directly at:{" "}
                        <a
                            href="mailto:contactus@baytcustoms.com"
                            className="cta-email"
                        >
                            contactus@baytcustoms.com
                        </a>
                    </p>

                </div>
            </section>

        </main>
    );
}

export default Home;