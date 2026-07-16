import { useLayoutEffect, useRef } from "react";
import { createMarquee } from "../animations/marquee";

export default function Marquee({
    children,
    direction = "left",
    speed = 70,
    pauseOnHover = true,
    className = "",
}) {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const cleanup = createMarquee({
            wrapper: wrapperRef.current,
            track: trackRef.current,
            direction,
            speed,
            pauseOnHover,
        });

        return cleanup;
    }, [direction, speed, pauseOnHover]);

    return (
        <div
            ref={wrapperRef}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                ref={trackRef}
                className="flex w-max gap-6"
            >
                {children}
                {children}
            </div>
        </div>
    );
}