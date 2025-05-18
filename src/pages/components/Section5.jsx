import React from "react";

// img
import Skill_Img_01 from "../../assets/img/logo_react.svg";

const contact = "contact";

export default function Section5() {
  return (
    <section className={`section ${contact}`}>
      <div className="inner">
        <div className={`${contact}__wrap`}>
          <div className="divider">
            <h2 className="section-title">CONTACT</h2>
            <div className={`${contact}__content`}>
              <div className={`${contact}__desc`}>
                아래 이메일이나 번호로 연락주시면 감사하겠습니다.
              </div>
              <div className={`${contact}__info`}>
                <div className={`${contact}__info-item`}>
                  <span className={`${contact}__info-title`}>Email</span>
                  <strong className={`${contact}__info-text`}>
                    enddl5067@naver.com
                  </strong>
                </div>
                <div className={`${contact}__info-item`}>
                  <span className={`${contact}__info-title`}>phone</span>
                  <strong className={`${contact}__info-text`}>
                    010-5067-5172
                  </strong>
                </div>
              </div>
              <div className={`${contact}__link`}>
                <a href="" className={`${contact}__link-item`}>
                  <i
                    className={`${contact}__link-icon ${contact}__link-icon--git`}
                  ></i>
                  Github
                </a>
                <a href="" className={`${contact}__link-item`}>
                  <i
                    className={`${contact}__link-icon ${contact}__link-icon--notion`}
                  ></i>
                  Notion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
