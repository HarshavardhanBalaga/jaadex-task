import { useLayoutEffect, useRef } from "react";
import Scene from "./sphere-model/Scene";
import { heroAnimation } from "../animations/heroAnimation";
import Button from "./Button";

export default function Hero() {
    const heroRef = useRef(null);

    const headingRefs = useRef([]);

    const paragraphRef = useRef(null);

    const buttonRef = useRef(null);

    const sphereRef = useRef(null);

    useLayoutEffect(() => {
        headingRefs.current = headingRefs.current.slice(0, 3);

        const cleanup = heroAnimation({
            heroRef,
            headingRefs,
            paragraphRef,
            buttonRef,
            sphereRef,
        });

        return cleanup;
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-[var(--bg)]"
        >
            <div className="mx-auto flex min-h-screen max-w-[1500px] items-center justify-between px-6 sm:px-8 lg:px-20">

                {/* LEFT */}

                <div className="relative z-20 w-full text-left lg:w-[46%] lg:text-left">

                    <h1
                        className="
                            font-[Michroma]
                            leading-[1.05]
                            tracking-tight
                            text-[var(--text)]
                            text-[42px]
                            sm:text-[54px]
                            md:text-[64px]
                            xl:text-[92px]
                        "
                    >
                        <span
                            ref={(el) => (headingRefs.current[0] = el)}
                            className="block"
                        >
                            BUILD
                        </span>

                        <span
                            ref={(el) => (headingRefs.current[1] = el)}
                            className="block mt-2"
                        >
                            DIGITAL
                        </span>

                        <span
                            ref={(el) => (headingRefs.current[2] = el)}
                            className="block mt-2"
                        >
                            PRODUCTS
                        </span>
                    </h1>

                    <p
                        ref={paragraphRef}
                        className="
                            mx-auto
                            mt-10
                            max-w-lg
                            text-base
                            leading-7
                            text-[var(--text-secondary)]
                            sm:text-lg
                            sm:leading-8
                            lg:mx-0
                        "
                    >
                        We design and engineer modern digital products with a
                        focus on performance, precision, and user experience.
                    </p>

                    <div
                        ref={buttonRef}
                        className="mt-12 flex justify-center lg:justify-start"
                    >
                        <Button>
                            Explore Work
                        </Button>
                    </div>

                </div>

                {/* RIGHT */}

                <div
                    ref={sphereRef}
                    className="
                        hidden
                        lg:block
                        absolute
                        right-[5%]
                        top-0
                        h-full
                        w-[48%]
                    "
                >
                    <Scene />
                </div>

            </div>
        </section>
    );
}