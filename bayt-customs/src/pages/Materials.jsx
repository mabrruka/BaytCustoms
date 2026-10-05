import { Link } from "react-router-dom";
import { images } from "../images";
import "../styles/materials.css";

function Materials() {
    const materials = [
        {
            name: "Oak",
            image: images.materialLookbookOak,
            description:
                "Strong, durable hardwood with distinctive grain patterns. Ages beautifully with a warm golden patina.",
        },
        {
            name: "Walnut",
            image: images.materialLookbookWalnut,
            description:
                "Rich, dark heartwood prized for its deep chocolate tones and smooth, fine grain.",
        },
        {
            name: "Ash",
            image: images.materialLookbookAsh,
            description:
                "Light-toned hardwood with a pronounced grain that adds texture and visual interest.",
        },
        {
            name: "Pine",
            image: images.materialLookbookPine,
            description:
                "Soft, warm wood with a rustic character. Takes stain beautifully for varied finishes.",
        },
        {
            name: "MDF",
            image: images.materialLookbookMDF,
            description:
                "Engineered board offering a perfectly smooth surface for painted finishes.",
        },
        {
            name: "Plywood",
            image: images.materialLookbookPlywood,
            description:
                "Multi-layered board providing exceptional strength and stability.",
        },
        {
            name: "Veneer",
            image: images.materialLookbookVeneer,
            description:
                "Thin slices of premium hardwood bonded to stable substrates, combining beauty with efficiency.",
        },
        {
            name: "Laminate",
            image: images.materialLookbookLaminate,
            description:
                "Durable, low-maintenance surface available in countless colors and textures.",
        },
    ];

    const handleLearnMore = (materialName) => {
        const subject = encodeURIComponent(
            `Learn More - ${materialName}`
        );

        const body = encodeURIComponent(
            `Hello Bayt Customs,\n\nI would like to learn more about using ${materialName} for my custom furniture project.\n\nPlease share more information about this material, available finishes, and suitable applications.\n\nThank you.`
        );

        window.location.href =
            `mailto:contactus@baytcustoms.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className="materials-page">
            {/* =========================
                HERO
            ========================= */}

            <section className="materials-hero">
                <div className="materials-hero-overlay"></div>

                <div className="materials-hero-content">
                    <p className="materials-hero-eyebrow">
                        Architectural Essence
                    </p>

                    <h1>Wood &amp; Materials</h1>

                    <p className="materials-hero-description">
                        We source and work with the finest natural materials,
                        chosen for their beauty, durability, and character.
                        Every custom commission is configured to honor the
                        distinct organic structure of the wood.
                    </p>

                    <p className="materials-hero-location">
                        Handcrafted in Libya
                    </p>
                </div>
            </section>

            {/* =========================
                MATERIALS LOOKBOOK
            ========================= */}

            <section className="materials-lookbook">
                <div className="materials-lookbook-header">
                    <p className="materials-lookbook-eyebrow">
                        Materials Lookbook
                    </p>

                    <h2>Our Crafted Selection</h2>

                    <p className="materials-lookbook-subtitle">
                        Curated for Mediterranean Living
                    </p>
                </div>

                <div className="materials-lookbook-grid">
                    {materials.map((material) => (
                        <article
                            className="material-lookbook-card"
                            key={material.name}
                        >
                            <img
                                src={material.image}
                                alt={material.name}
                                className="material-lookbook-image"
                            />

                            <div className="material-lookbook-content">
                                <h3>{material.name}</h3>

                                <p>
                                    {material.description}
                                </p>

                                <button
                                    type="button"
                                    className="material-learn-more"
                                    onClick={() =>
                                        handleLearnMore(material.name)
                                    }
                                >
                                    Learn More
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Materials;