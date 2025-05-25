import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

// img
import Skill_Img_01 from "../../assets/img/logo_react.svg";
import Skill_Img_02 from "../../assets/img/logo_js.svg";
import Skill_Img_03 from "../../assets/img/logo_jquery.svg";
import Skill_Img_04 from "../../assets/img/logo_html.svg";
import Skill_Img_05 from "../../assets/img/logo_pug.svg";
import Skill_Img_06 from "../../assets/img/logo_scss.svg";
import Skill_Img_07 from "../../assets/img/logo_gsap.svg";
import Skill_Img_08 from "../../assets/img/logo_framer.svg";
import Skill_Img_09 from "../../assets/img/logo_gulp.svg";
import Skill_Img_10 from "../../assets/img/logo_git.svg";
import Skill_Img_11 from "../../assets/img/logo_figma.svg";
import Skill_Img_12 from "../../assets/img/logo_zeplin.svg";

const skillsData = [
  { title: "React", img: Skill_Img_01 },
  { title: "Javascript", img: Skill_Img_02 },
  { title: "jQuery", img: Skill_Img_03 },
  { title: "Html5", img: Skill_Img_04 },
  { title: "Pug", img: Skill_Img_05 },
  { title: "Scss", img: Skill_Img_06 },
  { title: "GSAP", img: Skill_Img_07 },
  { title: "Framer Motion", img: Skill_Img_08 },
  { title: "Gulp", img: Skill_Img_09 },
  { title: "Git ", img: Skill_Img_10 },
  { title: "Figma", img: Skill_Img_11 },
  { title: "Zeplin", img: Skill_Img_12 },
];

const skill = "skill";

export default function Section2() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 뷰포트 안에 들어왔는지 여부
      },
      {
        threshold: 0.3, // 30% 보이면 시작
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`section ${skill}`}>
      <div className={`${skill}__marquee inner`} ref={sectionRef}>
        <Marquee
          pauseOnHover={true} // 마우스 오버 시 자동 정지
          speed={80}
          gradient={false}
          play={isVisible} // ✅ 뷰포트 안에 있을 때만 실행
        >
          <ul className={`${skill}__list`}>
            {skillsData.map((item, index) => (
              <li key={index} className={`${skill}__list-item`}>
                <div className={`${skill}__card`}>
                  <div className={`${skill}__card-img`}>
                    <img src={item.img} alt="" />
                  </div>
                  <span className={`${skill}__card-text`}>{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
