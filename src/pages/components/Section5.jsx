import React from "react";

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
                포트폴리오에 관심 가져주셔서 감사합니다. <br />
                문의는 아래 이메일이나 번호로 부탁드립니다 :)
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
                <a
                  className={`${contact}__link-item`}
                  href="https://github.com/enddl4348/khy_portfolio_2025"
                  target="_blank"
                >
                  <i
                    className={`${contact}__link-icon ${contact}__link-icon--git`}
                  ></i>
                  Github
                </a>
                {/* <a href="#" className={`${contact}__link-item`}>
                  <i
                    className={`${contact}__link-icon ${contact}__link-icon--notion`}
                  ></i>
                  Notion
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
