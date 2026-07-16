export default function Footer() {
    const navigation = [
        "Home",
        "Studio",
        "Capabilities",
        "Work",
        "Testimonials",
        "Contact",
    ];

    const socials = [
        "LinkedIn",
        "GitHub",
        "Dribbble",
    ];

    return (
        <footer className="border-t border-white/10 bg-[var(--footer)]">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h2 className="font-['Michroma'] text-2xl text-[var(--text)]">
                            JAADEX
                        </h2>

                        <p className="mt-5 max-w-sm leading-7 text-[var(--text-secondary)]">
                            Designing and engineering modern digital products
                            with precision, performance, and purpose.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 font-['Host_Grotesk'] text-sm uppercase tracking-[0.25em] text-[var(--metal-dark)]">
                            Navigation
                        </h3>

                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                        className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-5 font-['Host_Grotesk'] text-sm uppercase tracking-[0.25em] text-[var(--metal-dark)]">
                            Social
                        </h3>

                        <ul className="space-y-3">
                            {socials.map((item) => (
                                <li key={item}>
                                    <a
                                        href="/"
                                        className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-orange-400/50 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} JaaDeX Innovision. All
                        rights reserved.
                    </p>

                    <p>
                        Built with React, GSAP & Three.js
                    </p>
                </div>
            </div>
        </footer>
    );
}