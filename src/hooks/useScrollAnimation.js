import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useScrollAnimation = (scopeRef, options = {}) => {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          scrub: options.scrub || true,
          ...options.scrollTrigger,
        },
      });

      options.animations?.forEach((anim) => {
        tl.fromTo(anim.target, anim.from, anim.to, anim.position);
      });
    },
    { scope: scopeRef }
  );
};

export default useScrollAnimation;
