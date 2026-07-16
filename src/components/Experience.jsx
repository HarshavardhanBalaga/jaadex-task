import { useLayoutEffect, useRef } from "react";
import { experienceAnimation } from "../animations/experienceAnimation";
import Button from "./Button";

const projects = [
    {
        id: "01",
        title: "Enterprise Platform",
        category: "Web Application",
        description:
            "Designed and engineered a scalable enterprise platform focused on performance, security, and long-term maintainability.",
    },
    {
        id: "02",
        title: "Industrial Dashboard",
        category: "UI / UX Design",
        description:
            "Crafted a clean operational dashboard that simplifies complex workflows through intuitive interaction design.",
    },
    {
        id: "03",
        title: "Digital Commerce",
        category: "E-Commerce",
        description:
            "Built a modern commerce experience optimized for conversion, speed, and seamless customer journeys.",
    },
];

export default function Experience() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const rowRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = experienceAnimation({
            section: sectionRef,
            heading: headingRef,
            rows: rowRefs,
        });

        return () => ctx?.revert();
    }, []);

    return (
        <section
            id="work"
            ref={sectionRef}
            className="border-t border-[var(--border)] bg-[var(--bg)]"
        >
            <div className="mx-auto max-w-7xl px-6 py-28 lg:px-16">
                <p className="mb-4 font-['Host_Grotesk'] uppercase tracking-[0.3em] text-[var(--metal-dark)]">
                    Selected Work
                </p>

                <h2
                    ref={headingRef}
                    className="mb-20 max-w-4xl font-['Michroma'] text-4xl leading-tight text-[var(--text)] md:text-5xl"
                >
                    Digital products built with engineering precision.
                </h2>

                <div>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (rowRefs.current[index] = el)}
                            className="border-t border-[var(--border)] py-14 last:border-b"
                        >
                            <div className="grid gap-10 lg:grid-cols-12">
                                {/* Left */}
                                <div className="lg:col-span-6 flex gap-8">
                                    <span className="font-['Michroma'] text-2xl text-orange-500/60">
                                        {project.id}
                                    </span>

                                    <div>
                                        <h3 className="font-['Host_Grotesk'] text-3xl font-medium text-[var(--text)]">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 uppercase tracking-[0.25em] text-sm text-[var(--metal-dark)]">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="lg:col-span-6">
                                    <p className="mb-8 max-w-xl leading-8 text-[var(--text-secondary)]">
                                        {project.description}
                                    </p>

                                    <Button>
                                        View Project
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}