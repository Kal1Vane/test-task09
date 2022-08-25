import { useState } from "react";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import "./header.scss";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CloseIcon } from "./close-svg.svg";
import { ReactComponent as OpenIcon } from "./open-svg.svg";

function Header(): JSX.Element {
  const [isActive, setActive] = useState<boolean>(false);

  function toggleNavbar() {
    setActive((prev) => !prev);
    const body = document.body;
    if (body.classList.contains("scroll-hiden")) {
      body.classList.remove("scroll-hiden");
    } else {
      body.classList.add("scroll-hiden");
    }
  }

  return (
    <header className={`header ${isActive ? "active" : ""}`}>
      <div className="header-container">
        <Logo isActive={isActive} />
        <button
          onClick={toggleNavbar}
          className={`header__button ${isActive ? "active" : ""}`}
        >
          <OpenIcon />
          <CloseIcon />
        </button>
        {
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={isActive}
            timeout={300}
            className="navbar__content"
          >
            <Navbar />
          </CSSTransition>
        }
      </div>
    </header>
  );
}

export default Header;
