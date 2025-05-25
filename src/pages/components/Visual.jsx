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
      end: "+=300%", // 조금 더 여유 있게
      scrub: 1,
      pin: true,
      markers: false,
    },
    animations: [
      {
        target: `.${visual}__gate-item--left .${visual}__text--mask`,
        to: { width: "100%", duration: 0.5 },
        position: 0,
      },
      {
        target: `.${visual}__gate-item--right .${visual}__text--mask`,
        to: { width: "100%", duration: 0.5 },
        position: 0.6,
      },
      {
        target: `.${visual}__gate--line`,
        from: { yPercent: -100, opacity: 0.1 },
        to: { yPercent: 0, opacity: 0.8, duration: 1 },
        position: 1.2,
      },
      {
        target: `.${visual}__gate-item--left`,
        from: { xPercent: 0 },
        to: { xPercent: -100, duration: 2, ease: "power2.out" },
        position: 2, // 좀 더 부드럽게 이어지게
      },
      {
        target: `.${visual}__gate-item--right`,
        from: { xPercent: 0 },
        to: { xPercent: 100, duration: 2, ease: "power2.out" },
        position: 2,
      },
      {
        target: `.${visual}__gate--line`,
        from: { opacity: 0.8 },
        to: { opacity: 0, duration: 0.3 },
        position: 2.2, // 너무 급하게 사라지지 않게
      },
      {
        target: `.${visual}__circle `,
        from: { scale: 15, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        position: 2.2,
      },
      {
        target: `.${visual}__text--01`,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 0.4, ease: "power2.out" },
        position: 2.2,
      },
      {
        target: `.${visual}__text--01 .${visual}__text--mask`,
        to: { width: "100%", duration: 0.5 },
        position: 2.4,
      },
      {
        target: `.${visual}__text--01`,
        from: { opacity: 1 },
        to: { opacity: 0, duration: 0.6, ease: "power2.out" },
        position: 3.2, // 텍스트 유지 시간 확보
      },
      {
        target: `.${visual}__text--02`,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 2, ease: "power2.out" },
        position: 4.2,
      },
      {
        target: `.${visual}__circle-mark`,
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 2.4, duration: 2, ease: "power2.out" },
        position: 4.2,
      },
      {
        target: `.${visual}__text--02 .${visual}__text--mask`,
        to: { width: "100%", duration: 1.2, ease: "power2.out" },
        position: 5,
      },
      {
        target: `.${visual}__circle-mark`,
        to: {
          opacity: 0,
          duration: 3, // 좀 더 부드럽게
          ease: "sine.inOut",
        },
        position: 7,
      },
    ],
  });

  return (
    <section className={visual} ref={sectionRef}>
      <div className={`${visual}__wrap`}>
        <div className={`${visual}__circle-box`}>
          <div className={`${visual}__circle-mark`}>
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <div class="ring r3"></div>
            <div class="ring r4"></div>
            <div class="ring r5"></div>
            <div class="ring r6"></div>
          </div>
          <div className={`${visual}__circle`}></div>
          <div className={`${visual}__text-box ${visual}__text--01`}>
            <div className={`${visual}__text`}>끈기있고 열정적인</div>
            <div className={`${visual}__text ${visual}__text--mask `}>
              끈기있고 열정적인
            </div>
          </div>
          <div className={`${visual}__text-box ${visual}__text--02`}>
            <div className={`${visual}__text`}>
              책임감 강한 퍼블리셔, <em>김혜연</em>입니다.
            </div>
            <div className={`${visual}__text ${visual}__text--mask`}>
              책임감 강한 퍼블리셔, <em>김혜연</em>입니다.
            </div>
          </div>
        </div>
        <div className={`${visual}__gate`}>
          <div className={`${visual}__gate-item ${visual}__gate-item--left`}>
            <div className={`${visual}__text-box`}>
              <span className={`${visual}__text`}> 안녕하세요</span>
              <span className={`${visual}__text ${visual}__text--mask`}>
                안녕하세요
              </span>
            </div>
          </div>
          <div className={`${visual}__gate-item ${visual}__gate-item--right`}>
            <div className={`${visual}__text-box`}>
              <span className={`${visual}__text`}>저는</span>
              <span className={`${visual}__text ${visual}__text--mask`}>
                저는
              </span>
            </div>
          </div>
          <div className={`${visual}__gate--line`}></div>
        </div>
      </div>
    </section>
  );
}
