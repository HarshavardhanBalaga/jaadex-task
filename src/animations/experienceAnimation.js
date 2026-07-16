import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const experienceAnimation = ({ section, heading, rows }) => {
    return gsap.context(() => {
        const rowElements = rows.current.filter(Boolean);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 75%",
                once: true,
            },
        });

        tl.fromTo(
            heading.current,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        ).fromTo(
            rowElements,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
            },
            "-=0.3"
        );
    }, section.current);
};