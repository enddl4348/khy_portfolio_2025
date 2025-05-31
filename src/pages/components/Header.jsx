import React from "react";

import Logo from "../../assets/img/logo.svg";

const header = "header";

export default function Header() {
  return (
    <header className={header}>
      <div className={`${header}__inner`}>
        <h1 className={`${header}__logo`}>
          <a href="#" className={`${header}__logo-link`}>
            <img src={Logo} alt="hyeyeon" />
          </a>
        </h1>
      </div>
    </header>
  );
}
