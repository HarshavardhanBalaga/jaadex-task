import { useLayoutEffect, useRef } from "react";
import { featuresAnimation } from "../animations/featuresAnimation";

const features = [
    {
        id: "01",
        title: "Web Development",
        description:
            "Modern websites and scalable web applications engineered for performance, accessibility, and maintainability.",
    },
    {
        id: "02",
        title: "UI / UX Design",
        description:
            "User-focused interfaces with thoughtful layouts, clear hierarchy, and intuitive interactions.",
    },
    {
        id: "03",
        title: "Frontend Engineering",
        description:
            "React, GSAP, Three.js, and modern frontend architecture for premium digital experiences.",
    },
    {
        id: "04",
        title: "Performance Optimization",
        description:
            "Fast-loading experiences optimized for Core Web Vitals, SEO, and long-term scalability.",
    },
];

export default function Features() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = featuresAnimation({
            section: sectionRef,
            heading: headingRef,
            cards: cardRefs,
        });

        return () => ctx?.revert();
    }, []);

    return (
        <section
            id="features"
            ref={sectionRef}
            className="border-t border-[var(--border)] bg-[var(--bg)]"
        >
            <div className="mx-auto max-w-7xl px-6 py-28 lg:px-16">
                <p className="mb-4 font-['Host_Grotesk'] uppercase tracking-[0.3em] text-[var(--metal-dark)]">
                    Capabilities
                </p>

                <h2
                    ref={headingRef}
                    className="mb-16 max-w-3xl font-['Michroma'] text-4xl leading-tight text-[var(--text)] md:text-5xl"
                >
                    What we build with precision.
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {features.map((item, index) => (
                        <article
                            key={item.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="
                                group
                                relative
                                overflow-hidden
                                border
                                border-[var(--border)]
                                bg-[var(--surface)]
                                transition-all
                                duration-500
                                hover:-translate-y-1.5
                                hover:border-[var(--metal-dark)]
                            "
                        >
                            {/* Reflection Layer */}
                            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                <span
                                    className="
                                        absolute
                                        -left-24
                                        top-0
                                        h-full
                                        w-10
                                        -skew-x-12
                                        bg-white/10
                                        blur-lg
                                        transition-all
                                        duration-700
                                        ease-out
                                        group-hover:left-[120%]
                                    "
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-10">
                                <p
                                    className="
                                        mb-8
                                        font-['Michroma']
                                        text-4xl
                                        text-orange-500/50
                                        opacity-30
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                >
                                    {item.id}
                                </p>

                                <h3
                                    className="
                                        mb-4
                                        font-['Host_Grotesk']
                                        text-2xl
                                        font-medium
                                        text-[var(--text)]
                                        transition-all
                                        duration-500
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        max-w-md
                                        leading-8
                                        text-[var(--text-secondary)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--text)]
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}