import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// img
import Work_Img_01 from "../../assets/img/react_guide.png";
import Work_Img_02 from "../../assets/img/js_guide.png";
import Work_Img_03 from "../../assets/img/project_06.jpg";
import Work_Img_04 from "../../assets/img/my-budget.png";

gsap.registerPlugin(ScrollTrigger);

const worksData = [
  {
    img: Work_Img_01,
    title: "React Component Guide​",
    desc: "Typescript를 사용한 React 컴포넌트 제작 ​(TypeScript, SCSS, Framer Motion)",
    github: "https://github.com/enddl4348/react_guide_next",
  },
  {
    img: Work_Img_02,
    title: "Javascript Component Guide​",
    desc: "JS Class문법을 활용한 컴포넌트 제작 (SCSS)​",
    github: "https://github.com/enddl4348/khy_js_guide",
  },
  {
    img: Work_Img_03,
    title: "Pug 프로젝트 (InBody)​",
    desc: "Pug 템플릿을 활용해서 진행한 프로젝트 (Gulp, jQuery, SCSS, Git, GSAP, 반응형)​",
    github: "https://github.com/enddl4348/pug_project",
    url: "https://inbodyvietnam.com/en",
  },
  {
    img: Work_Img_04,
    title: "Redux 기반 가계부 관리 애플리케이션",
    desc: "React와 Redux로 거래 내역의 상태 관리 기능을 구현하고, module SCSS를 사용해 컴포넌트별 스타일을 분리하여 전역 충돌 없이 유지보수가 용이하도록 구성한 가계부 토이 프로젝트.​",
    github: "https://github.com/enddl4348/my-budget_redux",
    url: "https://enddl4348.github.io/my-budget_redux",
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
                  <div className={`${works}-item__link-box`}>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        className={`${works}-item__link`}
                      >
                        Github
                      </a>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        className={`${works}-item__link`}
                      >
                        View
                      </a>
                    )}
                  </div>
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
