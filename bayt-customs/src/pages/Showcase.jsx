import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../images";
import "../styles/showcase.css";

function Showcase() {
    const [activeCategory, setActiveCategory] = useState("Kitchens");

    const categories = [
        {
            name: "Kitchens",
            count: "06",
        },
        {
            name: "Dining Rooms",
            count: "03",
        },
        {
            name: "Living Rooms",
            count: "03",
        },
        {
            name: "Bedrooms",
            count: "03",
        },
    ];

    const showcaseItems = {
        Kitchens: [
            {
                title: "Walnut Hearth Kitchen",
                material: "Natural Walnut / Calacatta Marble",
                image: images.showcaseWalnutHearth,
                description:
                    "Warm walnut cabinetry with brass hardware and marble countertops, designed for family gathering.",
            },
            {
                title: "Oakline Kitchen",
                material: "Light Oak / Terrazzo",
                image: images.showcaseOaklineKitchen,
                description:
                    "Light oak open shelving with clean lines, blending Scandinavian simplicity with Mediterranean warmth.",
            },
            {
                title: "Verde Pantry Kitchen",
                material: "Painted Sage / Solid Oak Interior",
                image: images.showcaseVerdePantry,
                description:
                    "Sage green painted fronts paired with natural oak interiors, inspired by coastal Libyan homes.",
            },
            {
                title: "Espresso Frame Kitchen",
                material: "Dark Espresso Oak / Dark Quartz",
                image: images.showcaseVerdePantry,
                description:
                    "Dark espresso-stained framework with integrated lighting, a modern statement kitchen.",
                details: true,
            },
            {
                title: "Cedar Ridge Kitchen",
                material: "Aromatic Cedar / Travertine Backsplash",
                image: images.showcaseCedarRidge,
                description:
                    "Aromatic cedar panels with floating shelves and artisan tile backsplash.",
            },
            {
                title: "Mediterranean Oak Kitchen",
                material: "Natural Oak / Limestone",
                image: images.showcaseOaklineKitchen,
                description:
                    "A warm architectural kitchen combining natural oak cabinetry, soft stone surfaces, and practical family storage.",
            },
        ],

        "Dining Rooms": [
            {
                title: "Oak Meadow Dining Table",
                material: "Solid Oak / Natural Oil",
                image: images.showcaseDiningPlaceholder,
                description:
                    "A sculpted solid oak dining table designed around generous family gatherings and Mediterranean hospitality.",
            },
            {
                title: "Walnut Gathering Table",
                material: "American Walnut / Brass",
                image: images.showcaseDiningPlaceholderTwo,
                description:
                    "Rich walnut grain and refined brass details create a timeless centerpiece for intimate and formal dining.",
            },
            {
                title: "Travertine Dining Collection",
                material: "Oak / Travertine",
                image: images.showcaseDiningPlaceholder,
                description:
                    "A balanced combination of warm timber and natural stone designed for elegant everyday dining.",
            },
        ],

        "Living Rooms": [
            {
                title: "Mediterranean Lounge",
                material: "Natural Oak / Linen",
                image: images.showcaseLivingPlaceholder,
                description:
                    "Calm architectural cabinetry and warm timber details designed to create a relaxed living environment.",
            },
            {
                title: "Walnut Media Wall",
                material: "Walnut / Dark Stone",
                image: images.showcaseLivingPlaceholderTwo,
                description:
                    "A refined built-in media wall combining concealed storage, natural walnut, and integrated architectural lighting.",
            },
            {
                title: "Sculpted Coffee Collection",
                material: "Solid Oak / Natural Finish",
                image: images.showcaseLivingPlaceholder,
                description:
                    "Handcrafted living room pieces with softened forms and natural timber character.",
            },
        ],

        Bedrooms: [
            {
                title: "Cedar Haven Bedroom",
                material: "Aromatic Cedar / Natural Oak",
                image: images.showcaseBedroomPlaceholder,
                description:
                    "A serene bedroom composition using warm cedar tones, architectural paneling, and carefully integrated storage.",
            },
            {
                title: "Espresso Frame Wardrobe",
                material: "Espresso Oak / Brass",
                image: images.showcaseBedroomPlaceholderTwo,
                description:
                    "A luxurious dressing solution with dark-stained oak panels and sculpted hardware details.",
            },
            {
                title: "Oak Retreat",
                material: "Light Oak / Natural Linen",
                image: images.showcaseBedroomPlaceholder,
                description:
                    "A calm, understated bedroom built around natural materials, soft proportions, and practical custom storage.",
            },
        ],
    };

    const activeItems = showcaseItems[activeCategory];

    const handleQuote = (title) => {
        const subject = encodeURIComponent(
            `Request a Quote - ${title}`
        );

        const body = encodeURIComponent(
            `Hello Bayt Customs,\n\nI am interested in requesting a quote for the "${title}" showcase piece.\n\nPlease let me know the next steps.\n\nThank you.`
        );

        window.location.href =
            `mailto:contactus@baytcustoms.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className="showcase-page">
            {/* =========================
                HERO
            ========================= */}

            <section className="showcase-hero">
                <div className="showcase-hero-content">
                    <p className="showcase-eyebrow">
                        The Masterpiece Collections
                    </p>

                    <h1>Our Showcase</h1>

                    <p className="showcase-hero-description">
                        Explore our collection of custom-crafted furniture,
                        designed for Libyan homes. Every piece represents a
                        harmonious marriage of architectural logic and
                        handselected timber.
                    </p>
                </div>
            </section>

            {/* =========================
                COLLECTION
            ========================= */}

            <section className="showcase-collection">
                <div className="showcase-tabs">
                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category.name}
                            className={`showcase-tab ${
                                activeCategory === category.name
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setActiveCategory(category.name)
                            }
                        >
                            <span>{category.name}</span>
                            <span>({category.count})</span>
                        </button>
                    ))}
                </div>

                <div className="showcase-grid">
                    {activeItems.map((item) => (
                        <article
                            className="showcase-card"
                            key={item.title}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="showcase-card-image"
                            />

                            <div className="showcase-card-info">
                                <h2>{item.title}</h2>

                                <p className="showcase-material">
                                    {item.material}
                                </p>

                                <p className="showcase-description">
                                    {item.description}
                                </p>

                                <div className="showcase-card-actions">
                                    {item.details && (
                                        <Link
                                            to="/contact"
                                            className="showcase-details"
                                        >
                                            View Details &amp; Specs
                                        </Link>
                                    )}

                                    <button
                                        type="button"
                                        className="showcase-quote-button"
                                        onClick={() =>
                                            handleQuote(item.title)
                                        }
                                    >
                                        Request a Quote
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* =========================
                CTA
            ========================= */}

            <section className="showcase-cta">
                <div className="showcase-cta-content">
                    <h2>Ready to share your specifications?</h2>

                    <p>
                        Share your room dimensions, preferred materials,
                        and inspiration. Our team will guide you from
                        concept to custom fabrication.
                    </p>

                    <div className="showcase-cta-buttons">
                        <Link
                            to="/contact"
                            className="showcase-cta-button showcase-cta-light"
                        >
                            Share Your Specifications
                        </Link>

                        <Link
                            to="/contact"
                            className="showcase-cta-button showcase-cta-dark"
                        >
                            Book a Design Session
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Showcase;