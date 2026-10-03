import { images } from "../images";
import "../styles/contact.css";

function Contact() {
    return (
        <main className="contact">

            <section className="contact-header">
                <div className="section-container">

                    <p className="section-eyebrow">
                        GET IN TOUCH
                    </p>

                    <h1>
                        Let's create
                        <br />
                        something together.
                    </h1>

                    <p>
                        Tell us about your space, your ideas and the furniture
                        you're looking to create.
                    </p>

                </div>
            </section>


            <section className="contact-section">
                <div className="section-container">

                    <div className="contact-grid">

                        {/* IMAGE */}
                        <div className="contact-image">
                            <img
                                src={images.contactInterior}
                                alt="Bayt Customs interior"
                            />
                        </div>


                        {/* FORM */}
                        <div className="contact-form-wrapper">

                            <form className="contact-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Your email"
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Phone
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Your phone number"
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="message">
                                        Tell us about your project
                                    </label>

                                    <textarea
                                        id="message"
                                        rows="6"
                                        placeholder="Tell us what you have in mind..."
                                    ></textarea>
                                </div>


                                <button
                                    type="submit"
                                    className="button button-primary"
                                >
                                    Send Enquiry
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Contact;