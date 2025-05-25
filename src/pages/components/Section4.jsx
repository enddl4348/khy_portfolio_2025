import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// img
import Work_Img_01 from "../../assets/img/react_guide.png";
import Work_Img_02 from "../../assets/img/js_guide.png";
import Work_Img_03 from "../../assets/img/project_06.jpg";

gsap.registerPlugin(ScrollTrigger);

const worksData = [
  {
    img: Work_Img_01,
    title: "React Component Guide​",
    desc: "Typescript를 사용한 React 컴포넌트 제작 ​(TypeScript, SCSS, Framer Motion)",
    url: "https://github.com/enddl4348/react_guide_next",
  },
  {
    img: Work_Img_02,
    title: "Javascript Component Guide​",
    desc: "JS Class문법을 활용한 컴포넌트 제작 (SCSS)​",
    url: "https://github.com/enddl4348/khy_js_guide",
  },
  {
    img: Work_Img_03,
    title: "Pug 프로젝트 (InBody)​",
    desc: "Pug 템플릿을 활용해서 진행한 프로젝트 (Gulp, jQuery, SCSS, Git, GSAP, 반응형)​",
    url: "https://github.com/enddl4348/pug_project",
  },
];

const works = "works";

export default function Section4() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !listRef.current) return;

      gsap.to(listRef.current, {
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: sectionRef.current.querySelector(".project__wrap"),
          pinSpacing: false,
          markers: true,
        },
      });
    },
    { scope: sectionRef }
  ); //  useGSAP에서 scope로 sectionRef 지정

  return (
    <section className={`section ${works}`} ref={sectionRef}>
      <div className={`${works}__wrap inner`}>
        <div className={`${works}__title`}>
          <div className="section-title-box">
            <h2 className="section-title">works</h2>
            <p className="section-sub">
              개인적으로 제작한 웹 작업물을 소개합니다.
            </p>
          </div>
        </div>
        <div className={`${works}__list`}>
          {worksData.map((item, index) => (
            <div className={`${works}-item`} key={index}>
              <div className={`${works}-item__box`}>
                <div className={`${works}-item__img`}>
                  <img src={item.img} alt="" />
                  <a
                    href={item.url}
                    target="_blank"
                    className={`${works}-item__link`}
                  >
                    View Github
                  </a>
                </div>
                <div className={`${works}-item__content`}>
                  <strong className={`${works}-item__title`}>
                    {item.title}
                  </strong>
                  <div className={`${works}-item__desc`}>{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
