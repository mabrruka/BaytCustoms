import { useState } from "react";
import "../styles/contact.css";

const API_URL = "http://localhost:5001";

function Contact() {
    const [showcaseInterest, setShowcaseInterest] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            setSelectedFile(null);
            return;
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf",
        ];

        const maxFileSize = 10 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            event.target.value = "";
            setSelectedFile(null);
            setSubmitStatus("error");
            setSubmitMessage(
                "Only JPG, PNG, and PDF files are allowed."
            );
            return;
        }

        if (file.size > maxFileSize) {
            event.target.value = "";
            setSelectedFile(null);
            setSubmitStatus("error");
            setSubmitMessage(
                "The selected file is too large. Maximum size is 10MB."
            );
            return;
        }

        setSelectedFile(file);
        setSubmitStatus("");
        setSubmitMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus("");
        setSubmitMessage("");

        try {
            const form = event.currentTarget;
            const formData = new FormData(form);

            if (!showcaseInterest) {
                formData.delete("showcasePiece");
            }

            const response = await fetch(
                `${API_URL}/api/project-submission`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "Something went wrong while sending your project specifications."
                );
            }

            setSubmitStatus("success");
            setSubmitMessage(
                "Thank you. Your project specifications have been received. Our team will review them and respond within 24 hours."
            );

            form.reset();

            setShowcaseInterest(false);
            setSelectedFile(null);
        } catch (error) {
            console.error("Project submission error:", error);

            setSubmitStatus("error");
            setSubmitMessage(
                error.message ||
                "We could not send your project specifications. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToForm = () => {
        document
            .getElementById("project-form")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    const focusSiteVisitDate = () => {
        document.getElementById("siteVisitDate")?.focus();
    };

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <p className="contact-eyebrow">
                    Artisanal Woodworking Partnerships
                </p>

                <h1>Get in Touch</h1>

                <p className="contact-hero-description">
                    Share your full project specifications here and our team
                    will turn them into a tailored proposal, material
                    selection, and production plan.
                </p>
            </section>

            <section className="contact-content">
                <div className="contact-information">
                    <div className="contact-information-header">
                        <p className="contact-section-eyebrow">
                            Contact Information
                        </p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <p className="contact-detail-label">
                                Email Us
                            </p>

                            <a href="mailto:contactus@baytcustoms.com">
                                contactus@baytcustoms.com
                            </a>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-label">
                                Phone
                            </p>

                            <a href="tel:+218911234567">
                                +218 91 123 4567
                            </a>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-label">
                                WhatsApp
                            </p>

                            <a href="https://wa.me/218911234567">
                                +218 91 123 4567
                            </a>
                        </div>

                        <div className="contact-detail">
                            <p className="contact-detail-label">
                                Our Workshop
                            </p>

                            <p className="contact-detail-value">
                                Alandalus District, Woodworking Zone Street 4
                            </p>
                        </div>
                    </div>

                    <div className="contact-specs-card">
                        <div>
                            <p className="contact-specs-title">
                                Share Your Project Specs
                            </p>

                            <p className="contact-specs-description">
                                Send us your room dimensions, preferred
                                materials, and functional needs. We’ll prepare
                                a detailed proposal and production plan.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="contact-specs-button"
                            onClick={scrollToForm}
                        >
                            Share Project Specs
                        </button>

                        <p className="contact-response-time">
                            Proposal Response: Within 24 hours
                        </p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <div className="contact-form-header">
                        <p className="contact-section-eyebrow">
                            Share Your Project Specs
                        </p>

                        <p className="contact-form-intro">
                            Add your full project specifications here and
                            we’ll prepare a detailed proposal, material
                            selection, and production plan.
                        </p>
                    </div>

                    <form
                        id="project-form"
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="contact-field-grid">
                            <div className="contact-field">
                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="e.g. Mabruka Al-Taher"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="contactus@baytcustoms.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-field-grid">
                            <div className="contact-field">
                                <label htmlFor="phone">
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+218 91 123 4567"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label>
                                    Preferred Contact Method
                                </label>

                                <div className="contact-radio-group">
                                    <label className="contact-radio">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="Email"
                                            defaultChecked
                                        />
                                        <span>Email</span>
                                    </label>

                                    <label className="contact-radio">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="Phone"
                                        />
                                        <span>Phone</span>
                                    </label>

                                    <label className="contact-radio">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="WhatsApp"
                                        />
                                        <span>WhatsApp</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="projectType">
                                Project Type
                            </label>

                            <select
                                id="projectType"
                                name="projectType"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Kitchen, Wardrobe, Dining Table,
                                    Living Room...
                                </option>

                                <option value="Kitchen">
                                    Kitchen
                                </option>

                                <option value="Wardrobe">
                                    Wardrobe
                                </option>

                                <option value="Dining Table">
                                    Dining Table
                                </option>

                                <option value="Living Room">
                                    Living Room
                                </option>

                                <option value="Bedroom">
                                    Bedroom
                                </option>

                                <option value="Custom Furniture">
                                    Custom Furniture
                                </option>

                                <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="projectDescription">
                                Describe what you’d like
                            </label>

                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                rows="6"
                                placeholder="Include room dimensions, preferred wood, finish, layout style, storage needs, electrical requirements, and any reference images..."
                                required
                            ></textarea>
                        </div>

                        <div className="contact-showcase-toggle">
                            <label className="contact-checkbox">
                                <input
                                    type="checkbox"
                                    checked={showcaseInterest}
                                    onChange={(event) =>
                                        setShowcaseInterest(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span>
                                    Yes, I saw something I liked
                                </span>
                            </label>
                        </div>

                        {showcaseInterest && (
                            <div className="contact-field">
                                <label htmlFor="showcasePiece">
                                    Select Showcase Piece
                                </label>

                                <select
                                    id="showcasePiece"
                                    name="showcasePiece"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select a Showcase Piece
                                    </option>

                                    <option value="Walnut Hearth Kitchen">
                                        Walnut Hearth Kitchen
                                    </option>

                                    <option value="Oakline Kitchen">
                                        Oakline Kitchen
                                    </option>

                                    <option value="Verde Pantry Kitchen">
                                        Verde Pantry Kitchen
                                    </option>

                                    <option value="Espresso Frame Kitchen">
                                        Espresso Frame Kitchen
                                    </option>

                                    <option value="Cedar Ridge Kitchen">
                                        Cedar Ridge Kitchen
                                    </option>

                                    <option value="Mediterranean Oak Kitchen">
                                        Mediterranean Oak Kitchen
                                    </option>
                                </select>
                            </div>
                        )}

                        <div className="contact-field">
                            <label>
                                Approximate Dimensions (cm)
                            </label>

                            <div className="contact-dimensions-grid">
                                <div>
                                    <span>Width</span>

                                    <input
                                        name="width"
                                        type="number"
                                        min="0"
                                        placeholder="e.g. 180"
                                    />
                                </div>

                                <div>
                                    <span>Height</span>

                                    <input
                                        name="height"
                                        type="number"
                                        min="0"
                                        placeholder="e.g. 75"
                                    />
                                </div>

                                <div>
                                    <span>Depth</span>

                                    <input
                                        name="depth"
                                        type="number"
                                        min="0"
                                        placeholder="e.g. 90"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="contact-field-grid">
                            <div className="contact-field">
                                <label htmlFor="appointmentDate">
                                    Preferred Appointment Date
                                </label>

                                <input
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    type="date"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="appointmentTime">
                                    Preferred Time
                                </label>

                                <input
                                    id="appointmentTime"
                                    name="appointmentTime"
                                    type="time"
                                />
                            </div>
                        </div>

                        <div className="contact-field-grid">
                            <div className="contact-field">
                                <label htmlFor="siteVisitDate">
                                    Preferred Site Visit Date
                                </label>

                                <input
                                    id="siteVisitDate"
                                    name="siteVisitDate"
                                    type="date"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="siteVisitTime">
                                    Preferred Time
                                </label>

                                <input
                                    id="siteVisitTime"
                                    name="siteVisitTime"
                                    type="time"
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="projectFile">
                                Upload Images or Plans
                            </label>

                            <label
                                htmlFor="projectFile"
                                className="contact-file-upload"
                            >
                                <span className="contact-file-main">
                                    {selectedFile
                                        ? selectedFile.name
                                        : "Drag files or click to browse"}
                                </span>

                                <span className="contact-file-help">
                                    Support for JPG, PNG, PDF up to 10MB
                                </span>
                            </label>

                            <input
                                id="projectFile"
                                name="projectFile"
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleFileChange}
                                className="contact-file-input"
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="additionalInformation">
                                Additional Information
                            </label>

                            <textarea
                                id="additionalInformation"
                                name="additionalInformation"
                                rows="5"
                                placeholder="Add delivery notes, budget guidance, or any other project context..."
                            ></textarea>
                        </div>

                        {submitMessage && (
                            <div
                                className={`contact-submit-message ${
                                    submitStatus === "success"
                                        ? "success"
                                        : "error"
                                }`}
                                role="alert"
                            >
                                {submitMessage}
                            </div>
                        )}

                        <div className="contact-form-actions">
                            <button
                                type="submit"
                                className="contact-submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Project Specs"}
                            </button>

                            <button
                                type="button"
                                className="contact-site-visit-button"
                                onClick={focusSiteVisitDate}
                            >
                                Request a Site Visit
                            </button>
                        </div>

                        <p className="contact-form-note">
                            Our team reviews every project specification and
                            responds with a tailored proposal within 24 hours.
                        </p>
                    </form>
                </div>
            </section>

            <section className="contact-workshop">
                <img
                    src="https://i.pinimg.com/736x/99/42/86/9942864bac9349ba264a2e6dc7847ab5.jpg"
                    alt="Bayt Customs Workshop in Tripoli"
                    className="contact-workshop-image"
                />

                <div className="contact-workshop-card">
                    <h2>
                        Bayt Customs Workshop — Tripoli, Libya
                    </h2>

                    <p>
                        Alandalus District, Woodworking Zone Street 4 —
                        Site visits by appointment
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Contact;