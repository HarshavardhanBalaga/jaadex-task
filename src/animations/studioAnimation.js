import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const studioAnimation = ({
    section,
    eyebrow,
    headings,
    paragraph,
}) => {
    return gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 75%",
                once: true,
            },
        });

        tl.fromTo(
            eyebrow.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
            }
        )
            .fromTo(
                headings.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.2"
            )
            .fromTo(
                paragraph.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.3"
            );
    }, section);
};