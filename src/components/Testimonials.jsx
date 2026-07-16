import TestimonialCard from "./TestimonialCard";
import Marquee from "./Marquee";

const testimonials = [
    {
        rating: 5,
        review:
            "Working with JaaDeX felt less like hiring an agency and more like extending our engineering team.",
        name: "Sarah Johnson",
        role: "Product Manager",
    },
    {
        rating: 5,
        review:
            "Fast execution, clean communication and impressive attention to detail throughout the project.",
        name: "Michael Brown",
        role: "Founder",
    },
    {
        rating: 5,
        review:
            "The final product exceeded our expectations both visually and technically.",
        name: "Emily Carter",
        role: "Creative Director",
    },
    {
        rating: 5,
        review:
            "Performance improvements were immediately noticeable after deployment.",
        name: "David Wilson",
        role: "CTO",
    },
    {
        rating: 5,
        review:
            "A seamless collaboration from planning to deployment. Every interaction felt thoughtful and professional.",
        name: "Sophia Martinez",
        role: "Project Lead",
    },
    {
        rating: 5,
        review:
            "Excellent communication, clean engineering practices, and outstanding execution throughout the project.",
        name: "James Anderson",
        role: "Engineering Manager",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] py-28"
        >
            <div className="mx-auto mb-20 px-6 lg:px-16">
                <p className="mb-4 font-['Host_Grotesk'] uppercase tracking-[0.3em] text-[var(--metal-dark)]">
                    Testimonials
                </p>

                <h2 className="max-w-5xl font-['Michroma'] text-4xl leading-tight text-[var(--text)] md:text-5xl">
                    Trusted by ambitious teams building modern digital products.
                </h2>
            </div>

            {/* Row 1 */}

            <Marquee
                direction="left"
                speed={70}
                className="mb-6"
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`row1-${index}`}
                        {...testimonial}
                    />
                ))}
            </Marquee>

            {/* Row 2 */}

            <Marquee
                direction="right"
                speed={80}
            >
                {[...testimonials]
                    .reverse()
                    .map((testimonial, index) => (
                        <TestimonialCard
                            key={`row2-${index}`}
                            {...testimonial}
                        />
                    ))}
            </Marquee>
        </section>
    );
}