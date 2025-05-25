import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useScrollAnimation = (scopeRef, options = {}) => {
  useGSAP(
    (context) => {
      const triggerEl = context.scope; // 안정적인 참조

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl, // ✅ 안전하게 DOM 참조
          start: options.scrollTrigger?.start || "top 80%",
          end: options.scrollTrigger?.end || "bottom 20%",
          scrub: options.scrollTrigger?.scrub ?? true,
          pin: options.scrollTrigger?.pin,
          pinSpacing: options.scrollTrigger?.pinSpacing ?? false,
          markers: options.scrollTrigger?.markers,
          // ...options.scrollTrigger ← ❌ 이건 빼고, 위에서 안전하게 해체하여 사용
        },
      });

      options.animations?.forEach((anim) => {
        // tl.fromTo(anim.target, anim.from, anim.to, anim.position);
        const target = context.selector(anim.target); // context 내에서 안전하게 선택
        tl.fromTo(target, anim.from, anim.to, anim.position);
      });
    },
    { scope: scopeRef }
  );
};

export default useScrollAnimation;
