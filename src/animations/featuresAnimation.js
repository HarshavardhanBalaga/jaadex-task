import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const featuresAnimation = ({ section, heading, cards }) => {
    return gsap.context(() => {
        const featureCards = cards.current.filter(Boolean);

        gsap.set([heading.current, ...featureCards], {
            opacity: 0,
            y: 40,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 70%",
                once: true,
                invalidateOnRefresh: true,
            },
        });

        tl.to(heading.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        }).to(
            featureCards,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.4"
        );
    }, section);
};