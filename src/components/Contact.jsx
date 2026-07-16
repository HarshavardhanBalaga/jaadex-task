import { useState } from "react";
import axios from "axios";
import Button from "./Button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            type: "",
            message: "",
        });

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setStatus({
                type: "error",
                message: "Please fill in all fields.",
            });

            return;
        }

        try {
            setLoading(true);

            await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                formData
            );

            setStatus({
                type: "success",
                message: "Message sent successfully!",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });

            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="border-t border-[var(--border)] bg-[var(--bg)]"
        >
            <div className="mx-auto max-w-3xl px-6 py-28 lg:px-0">
                <p className="mb-4 font-['Host_Grotesk'] uppercase tracking-[0.3em] text-[var(--metal-dark)]">
                    Contact
                </p>

                <h2 className="font-['Michroma'] text-4xl leading-tight text-[var(--text)] md:text-5xl">
                    Contact Us
                </h2>

                <p className="mt-6 mb-14 leading-8 text-[var(--text-secondary)]">
                    Have a project in mind or want to discuss an idea? Fill out
                    the form below and we'll get back to you as soon as
                    possible.
                </p>

                <form
    onSubmit={handleSubmit}
    className="space-y-6"
>
    <div className="grid gap-6 md:grid-cols-2">
        <div>
            <label
                htmlFor="name"
                className="mb-2 block text-sm uppercase tracking-[0.15em] text-[var(--metal-dark)]"
            >
                Name
            </label>

            <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-[var(--text)] outline-none transition-colors duration-300 focus:border-[var(--metal)]"
            />
        </div>

        <div>
            <label
                htmlFor="email"
                className="mb-2 block text-sm uppercase tracking-[0.15em] text-[var(--metal-dark)]"
            >
                Email
            </label>

            <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-[var(--text)] outline-none transition-colors duration-300 focus:border-[var(--metal)]"
            />
        </div>
    </div>

    <div>
        <label
            htmlFor="subject"
            className="mb-2 block text-sm uppercase tracking-[0.15em] text-[var(--metal-dark)]"
        >
            Subject
        </label>

        <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-[var(--text)] outline-none transition-colors duration-300 focus:border-[var(--metal)]"
        />
    </div>

    <div>
        <label
            htmlFor="message"
            className="mb-2 block text-sm uppercase tracking-[0.15em] text-[var(--metal-dark)]"
        >
            Message
        </label>

        <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full resize-none border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-[var(--text)] outline-none transition-colors duration-300 focus:border-[var(--metal)]"
        />
    </div>

    {status.message && (
        <p
            className={`text-sm ${
                status.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
            }`}
        >
            {status.message}
        </p>
    )}

    <div className="flex justify-end">
        <Button
            type="submit"
            disabled={loading}
        >
            {loading ? "Sending..." : "Send Message"}
        </Button>
    </div>
</form>
            </div>
        </section>
    );
}