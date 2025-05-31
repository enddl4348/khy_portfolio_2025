import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// img
import About_Img_01 from "../../assets/img/img_about_persistent.jpg";
import About_Img_02 from "../../assets/img/img_about_collaborative.jpg";
import About_Img_03 from "../../assets/img/img_about_responsible.jpg";

gsap.registerPlugin(ScrollTrigger);

const about = "about";

export default function Section1() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const img02Ref = useRef(null);
  const img03Ref = useRef(null);

  const ACTIVECLASSNAME = "is-active";

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !textRef.current ||
        !img02Ref.current ||
        !img03Ref.current
      )
        return;

      const textItems = textRef.current.querySelectorAll("li");
      const imgWidth = img02Ref.current.offsetWidth;
      const textStep = textRef.current.offsetWidth / 3;
      console.log(imgWidth);

      // setActiveText 함수 정의
      const setActiveText = (index) => {
        textItems.forEach((li, i) => {
          li.classList.toggle(ACTIVECLASSNAME, i === index);
        });
      };

      setActiveText(0); //  초기 상태에서 첫 번째에 active 클래스 부여

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: sectionRef.current,
          pinSpacing: false,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress < 0.33) {
              setActiveText(0);
            } else if (progress < 0.67) {
              setActiveText(1);
            } else {
              setActiveText(2);
            }
          },
        },
      });

      tl.to(img02Ref.current, {
        x: -imgWidth,
        ease: "none",
        duration: 0.4,
      });

      tl.to(
        textRef.current,
        {
          x: -textStep,
          ease: "none",
          duration: 0.4,
        },
        "<"
      );

      tl.to(img03Ref.current, {
        x: -imgWidth,
        ease: "none",
        duration: 0.4,
      });

      tl.to(
        textRef.current,
        {
          x: -textStep * 2,
          ease: "none",
          duration: 0.4,
        },
        "<"
      );
    },

    { scope: sectionRef }
  );

  return (
    <section className={`section ${about}`} ref={sectionRef}>
      <div className={`${about}__wrap`}>
        <div className={`${about}__bg`}></div>
        <div className={`${about}__visual`}>
          <div className={`${about}__visual-img`}>
            <ul className="img-list">
              <li className="img-list__item">
                <img src={About_Img_01} alt="" />
              </li>
              <li className="img-list__item img-list__item--02" ref={img02Ref}>
                <img src={About_Img_02} alt="" />
              </li>
              <li className="img-list__item img-list__item--03" ref={img03Ref}>
                <img src={About_Img_03} alt="" />
              </li>
            </ul>
          </div>
          <div className={`${about}__visual-text`}>
            <ul className="text-list" ref={textRef}>
              <li className="text-list__item">
                <span className="text-list__title">Persistent</span>
                <p className="text-list__desc">
                  복잡한 웹 과제를 마주할 때,
                  <br /> 저는 그것을 기능으로 바뀔 때까지 끈질기게 도전합니다.​
                </p>
              </li>
              <li className="text-list__item">
                <span className="text-list__title">Collaborative</span>
                <p className="text-list__desc">
                  디자이너 및 개발자와의 효과적인 협업은 <br /> 완성도 높은 웹
                  결과물을 만드는 저의 핵심 역량입니다.​
                </p>
              </li>
              <li className="text-list__item">
                <span className="text-list__title">Responsible</span>
                <p className="text-list__desc">
                  강한 책임감을 바탕으로 <br />
                  주어진 일을 주도적으로 해결하려고 노력합니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
