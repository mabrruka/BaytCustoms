
import { useState } from "react";
import "../styles/ChatWidget.css";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    async function sendMessage(event) {
        event.preventDefault();

        const text = message.trim();

        if (!text || loading) return;

        setMessages((previous) => [
            ...previous,
            { role: "user", text },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || "Chat request failed");
            }

            setMessages((previous) => [
                ...previous,
                { role: "assistant", text: data.answer },
            ]);
        } catch (error) {
            console.error("Bayt Assistant error:", error);

            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    text: "Sorry, I couldn't connect right now. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bayt-chat-widget">
            {isOpen && (
                <section className="bayt-chat-panel">
                    <header className="bayt-chat-header">
                        <div>
                            <div className="bayt-chat-title">Bayt Assistant</div>
                            <div className="bayt-chat-subtitle">
                                How can we help with your project?
                            </div>
                        </div>

                        <button
                            type="button"
                            className="bayt-chat-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </header>

                    <div className="bayt-chat-messages" aria-live="polite">
                        {messages.length === 0 && (
                            <div className="bayt-chat-message bayt-chat-message--assistant">
                                Hello! Welcome to Bayt Customs. How can I help with your
                                custom furniture project?
                            </div>
                        )}

                        {messages.map((item, index) => (
                            <div
                                key={index}
                                className={`bayt-chat-message bayt-chat-message--${item.role}`}
                            >
                                {item.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="bayt-chat-message bayt-chat-message--assistant">
                                Thinking...
                            </div>
                        )}
                    </div>

                    <form className="bayt-chat-form" onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Ask Bayt Assistant..."
                            aria-label="Type your message"
                            disabled={loading}
                        />

                        <button
                            type="submit"
                            disabled={loading || !message.trim()}
                            aria-label="Send message"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M22 2 11 13" />
                                <path d="m22 2-7 20-4-9-9-4Z" />
                            </svg>
                        </button>
                    </form>
                </section>
            )}

            <button
                type="button"
                className="bayt-chat-launcher"
                onClick={() => setIsOpen((previous) => !previous)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close Bayt Assistant" : "Open Bayt Assistant"}
            >
                {isOpen ? (
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" />
                    </svg>
                )}

                <span>Bayt Assistant</span>
            </button>
        </div>
    );
}
