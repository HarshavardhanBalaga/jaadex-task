import gsap from "gsap";

export function createMarquee({
    wrapper,
    track,
    direction = "left",
    speed = 70,
    pauseOnHover = true,
}) {
    if (!wrapper || !track) return () => {};

    let tween;
    let resizeObserver;

    const setup = () => {
        tween?.kill();

        gsap.set(track, {
            clearProps: "x",
        });

        const distance = track.scrollWidth / 2;

        const duration = distance / speed;

        // IMPORTANT:
        // Right marquee starts shifted left by one copy
        gsap.set(track, {
            x: direction === "right" ? -distance : 0,
        });

        tween = gsap.to(track, {
            x: direction === "left" ? -distance : 0,
            duration,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: (value) => {
                    let x = parseFloat(value);

                    if (direction === "left") {
                        x = ((x % distance) + distance) % distance;
                        return `${x - distance}px`;
                    }

                    x = ((x + distance) % distance) - distance;
                    return `${x}px`;
                },
            },
        });
    };

    setup();

    resizeObserver = new ResizeObserver(() => {
        setup();
    });

    resizeObserver.observe(track);

    const slowDown = () => {
        if (!pauseOnHover || !tween) return;

        gsap.to(tween, {
            timeScale: 0.15,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const speedUp = () => {
        if (!pauseOnHover || !tween) return;

        gsap.to(tween, {
            timeScale: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    wrapper.addEventListener("mouseenter", slowDown);
    wrapper.addEventListener("mouseleave", speedUp);

    return () => {
        wrapper.removeEventListener("mouseenter", slowDown);
        wrapper.removeEventListener("mouseleave", speedUp);

        resizeObserver.disconnect();

        tween?.kill();
    };
}