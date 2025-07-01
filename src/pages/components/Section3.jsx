import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// img
import Project_Img_01 from "../../assets/img/project_01.jpg";
import Project_Img_02 from "../../assets/img/project_02.jpg";
import Project_Img_03 from "../../assets/img/project_03.jpg";
import Project_Img_04 from "../../assets/img/project_04.jpg";
import Project_Img_05 from "../../assets/img/project_05.jpg";
import Project_Img_06 from "../../assets/img/project_06.jpg";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "롯데월드 차세대 시스템 - 디지털 채널 부문 구축",
    img: Project_Img_01,
    period: "2024.11.12 ~ 2025.06.30(약 8개월)​",
    role: "반응형 웹/앱 UI 개발, 재사용 컴포넌트 제작, 어드벤처 앱 메인, 롯데월드 민속박물관 메인 담당​",
    environment: "React, SCSS, Framer Motion, Git",
  },
  {
    title: "SK T-world 리뉴얼",
    img: Project_Img_02,
    period: "2022.05.02 ~ 2023.07.14​​",
    role: "mobile 검색 전체 UI 구현, 매장 찾기 페이지 터치 스크린 모션 구현, 그 외 서브페이지 담당​",
    environment: "Vanilla JS, SCSS, Git, Gulp​​​ (mobile, pc, app)",
  },
  {
    title: "NH 멤버스 접근성 개선 프로젝트​",
    img: Project_Img_03,
    period: "2024.03.14 ~ 2024.07.31​",
    role: "앱 메인 일부 담당, 웹 접근성 준수 서브 페이지 담당, 퍼블리싱 가이드 일부 참여​",
    environment: "Vanilla JS, SCSS, GSAP, Lottie Animation, Git​​",
  },
  {
    title: "신한은행 기업뱅킹 재구축​",
    img: Project_Img_04,
    period: "2022.02.23 ~ 2022.04.30​(지원)",
    role: "웹스퀘어(WebSquare) 기반의 웹 접근성 준수 프로젝트에 참여, 접근성 가이드를 바탕으로 마크업 작업 수행​​",
    environment: "웹스퀘어(WebSquare), SVN​​",
  },
  {
    title: "부산은행 장애인 차별 금지법 웹접근성 프로젝트",
    img: Project_Img_05,
    period: "2023.09.04 ~ 2024.02.29​​",
    role: "웹 접근성 인증 마크 획득을 위한 UI 개선​​​",
    environment: " SVN, JSP, ​​HTML, CSS, jQuery",
  },
  {
    title: "InBody 베트남 웹사이트 구축",
    img: Project_Img_06,
    period: "2024.09.23 ~ 2024.10.25​",
    role: "퍼블리싱 전반 (단독 프로젝트)​​​",
    environment: "반응형, Gulp, Pug, SCSS, jQuery, GSAP, Git​",
    link: "https://inbodyvietnam.com/en",
  },
];

const project = "project";

export default function Section3() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !listRef.current) return;

      const totalWidth = listRef.current.scrollWidth;
      const visibleWidth = window.innerWidth;

      const xPercent = ((visibleWidth - totalWidth) / totalWidth) * 100;

      gsap.to(listRef.current, {
        xPercent,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: sectionRef.current.querySelector(".project__wrap"),
          pinSpacing: false,
          markers: false,
        },
      });
    },
    { scope: sectionRef }
  ); //  useGSAP에서 scope로 sectionRef 지정

  return (
    <section className={`section ${project}`} ref={sectionRef}>
      <div className={`${project}__wrap`}>
        <div className={`${project}__list`} ref={listRef}>
          <div className={`${project}__item ${project}-title`}>
            <div className="section-title-box">
              <h2 className="section-title">PROJECT</h2>
              <p className="section-sub">
                실제 클라이언트 및 팀 프로젝트에 참여한 작업들입니다.
              </p>
            </div>
          </div>
          {projectData.map((item, index) => (
            <div key={index} className={`${project}__item`}>
              <div className={`${project}-card ${project}-card--0${index + 1}`}>
                <div className={`${project}-card__img`}>
                  <img src={item.img} alt="" />
                  <div className={`${project}-card__hover`}>
                    <div className={`${project}-card__detail`}>
                      <div className={`${project}-card__detail-item`}>
                        <span className={`${project}-card__detail-title`}>
                          역할
                        </span>
                        <div className={`${project}-card__detail-text`}>
                          {item.role}
                        </div>
                      </div>
                      <div className={`${project}-card__detail-item`}>
                        <span className={`${project}-card__detail-title`}>
                          작업환경
                        </span>
                        <div className={`${project}-card__detail-text`}>
                          {item.environment}
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            className={`${project}-card__link`}
                          >
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${project}-card__content`}>
                  <strong className={`${project}-card__title`}>
                    {item.title}
                  </strong>
                  <div className={`${project}-card__period`}>{item.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
