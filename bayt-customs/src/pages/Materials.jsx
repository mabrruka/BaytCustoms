import { images } from "../images";
import "../styles/materials.css";

function Materials() {
    const materials = [
        {
            image: images.materialWood,
            name: "Wood",
            description:
                "Natural and engineered wood options selected for durability, character and warmth.",
        },
        {
            image: images.materialStone,
            name: "Stone",
            description:
                "Stone surfaces chosen to bring texture and a timeless finish to your furniture.",
        },
        {
            image: images.materialMetal,
            name: "Metal",
            description:
                "Metal details and structures that add strength and architectural character.",
        },
        {
            image: images.materialFabric,
            name: "Fabric",
            description:
                "Carefully selected fabrics that bring softness, comfort and personality.",
        },
    ];

    return (
        <main className="materials">

            <section className="page-header">
                <div className="section-container">

                    <p className="section-eyebrow">
                        MATERIALS & FINISHES
                    </p>

                    <h1>
                        Choose your
                        <br />
                        materials.
                    </h1>

                    <p>
                        Every material contributes to the character of the
                        finished piece. Choose the combinations that suit
                        your space.
                    </p>

                </div>
            </section>


            <section className="materials-section">
                <div className="section-container">

                    <div className="materials-grid">

                        {materials.map((material, index) => (
                            <article
                                className="material-card"
                                key={index}
                            >
                                <img
                                    src={material.image}
                                    alt={material.name}
                                />

                                <h2>{material.name}</h2>

                                <p>{material.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Materials;