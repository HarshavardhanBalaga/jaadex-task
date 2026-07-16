import gsap from "gsap";

export const heroAnimation = ({
  heroRef,
  headingRefs,
  paragraphRef,
  buttonRef,
  sphereRef,
}) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(
      sphereRef.current,
      {
        opacity: 0,
        x: 40,
        duration: 1.2,
      }
    )
      .from(
        headingRefs.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
          stagger: 0.18,
        },
        "-=0.8"
      )
      .from(
        paragraphRef.current,
        {
          opacity: 0,
          y: 15,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
  }, heroRef);

  return () => ctx.revert();
};