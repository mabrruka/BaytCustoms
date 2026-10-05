import { images } from "../images";
import "../styles/showcase.css";

function Showcase() {
    const projects = [
        {
            image: images.showcaseLivingRoom,
            title: "Living Room",
            description: "Bespoke furniture designed around the space.",
        },
        {
            image: images.showcaseDiningRoom,
            title: "Dining Room",
            description: "Custom dining furniture crafted to order.",
        },
        {
            image: images.showcaseBedroom,
            title: "Bedroom",
            description: "Tailored storage and furniture for everyday living.",
        },
        {
            image: images.showcaseTVUnit,
            title: "TV Unit",
            description: "Clean, functional entertainment furniture.",
        },
        {
            image: images.showcaseWardrobe,
            title: "Wardrobe",
            description: "Custom storage designed to maximise your space.",
        },
        {
            image: images.showcaseOffice,
            title: "Home Office",
            description: "Furniture designed around how you work.",
        },
    ];

    return (
        <main className="showcase">

            <section className="page-header">
                <div className="section-container">
                    <p className="section-eyebrow">BAYT CUSTOMS</p>

                    <h1>
                        Our
                        <br />
                        Showcase
                    </h1>

                    <p>
                        A selection of custom furniture pieces designed and
                        crafted for individual spaces.
                    </p>
                </div>
            </section>


            <section className="showcase-grid-section">
                <div className="section-container">

                    <div className="showcase-grid">

                        {projects.map((project, index) => (
                            <article
                                className="showcase-card"
                                key={index}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="showcase-card-content">
                                    <h2>{project.title}</h2>

                                    <p>{project.description}</p>
                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Showcase;

