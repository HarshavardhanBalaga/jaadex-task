import { useLayoutEffect, useRef } from "react";
import { studioAnimation } from "../animations/studioAnimation";

export default function About() {
    const sectionRef = useRef(null);
    const eyebrowRef = useRef(null);
    const headingRefs = useRef([]);
    const paragraphRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = studioAnimation({
            section: sectionRef,
            eyebrow: eyebrowRef,
            headings: headingRefs,
            paragraph: paragraphRef,
        });

        return () => ctx?.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="bg-[var(--bg)] border-t border-[var(--border)]"
        >
            <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-16">
                <div className="max-w-3xl">
                    <p
                        ref={eyebrowRef}
                        className="mb-6 font-['Host_Grotesk'] text-sm font-medium uppercase tracking-[0.35em] text-[var(--metal-dark)] opacity-0"
                    >
                        Studio
                    </p>

                    <div className="space-y-2">
                        {[
                            "Engineering digital products",
                            "with precision and purpose.",
                        ].map((line, index) => (
                            <h2
                                key={index}
                                ref={(el) => (headingRefs.current[index] = el)}
                                className="font-['Michroma'] text-3xl leading-tight text-[var(--text)] opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
                            >
                                {line}
                            </h2>
                        ))}
                    </div>

                    <p
                        ref={paragraphRef}
                        className="mt-10 max-w-2xl font-['Host_Grotesk'] text-base leading-8 text-[var(--text-secondary)] opacity-0 sm:text-lg"
                    >
                        We partner with ambitious businesses to design and
                        engineer websites, web applications, and digital
                        experiences that combine performance, precision, and
                        long-term scalability. Every decision is intentional,
                        from user experience to engineering excellence.
                    </p>
                </div>
            </div>
        </section>
    );
}