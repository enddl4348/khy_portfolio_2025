import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const visual = "visual";

export default function Visual() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
      markers: false,
    },
    animations: [
      {
        target: `.${visual}__gate--line`,
        from: { yPercent: -100, opacity: 0.1 },
        to: { yPercent: 0, opacity: 0.6, duration: 0.6 },
        position: 0,
      },
      {
        target: `.${visual}__gate-item--left`,
        from: { xPercent: 0 },
        to: { xPercent: -100, duration: 2 },
        position: 0.6, // 좀 더 부드럽게 이어지게
      },
      {
        target: `.${visual}__gate-item--right`,
        from: { xPercent: 0 },
        to: { xPercent: 100, duration: 2 },
        position: 0.6,
      },
      {
        target: `.${visual}__gate--line`,
        from: { opacity: 0.6 },
        to: { opacity: 0, duration: 0.3 },
        position: 0.6, // 너무 급하게 사라지지 않게
      },
      {
        target: `.${visual}__circle`,
        from: { scale: 8, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        position: 0.6,
      },
      {
        target: `.${visual}__text--01`,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 0.6, ease: "sine.out" },
        position: 1,
      },
      {
        target: `.${visual}__text--01`,
        from: { opacity: 1 },
        to: { opacity: 0, duration: 0.3, ease: "sine.in" },
        position: 2.6, // 텍스트 유지 시간 확보
      },
      {
        target: `.${visual}__text--02`,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 0.6, ease: "sine.out" },
        position: 2.6,
      },
    ],
  });

  return (
    <div className={visual} ref={sectionRef}>
      <div className={`${visual}__wrap`}>
        <div className={`${visual}__circle-box`}>
          <div className={`${visual}__circle`}></div>
          <div className={`${visual}__text ${visual}__text--01`}>
            끈기있고 열정적인
          </div>
          <div className={`${visual}__text ${visual}__text--02`}>
            책임감 강한 퍼블리셔, <em>김혜연</em>입니다.
          </div>
        </div>
        <div className={`${visual}__gate`}>
          <div className={`${visual}__gate-item ${visual}__gate-item--left`}>
            <span className={`${visual}__text`}> 안녕하세요</span>
          </div>
          <div className={`${visual}__gate-item ${visual}__gate-item--right`}>
            <span className={`${visual}__text`}>저는</span>
          </div>
          <div className={`${visual}__gate--line`}></div>
        </div>
      </div>
    </div>
  );
}
