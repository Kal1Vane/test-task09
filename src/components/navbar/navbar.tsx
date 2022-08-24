import { useState } from "react";
import "./navbar.scss";
import { CSSTransition } from "react-transition-group";

function Navbar(): JSX.Element {
  const [isActive, setActive] = useState<boolean>(false);

  function toggleNavbar() {
    setActive((prev) => !prev);
  }

  return (

    <div className="navbar">
      navbar
      <button
        onClick={toggleNavbar}
        className={`navabar__button ${isActive ? "active" : ""}`}
      >
        <svg
          width="29"
          height="16"
          viewBox="0 0 29 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H29V2H0V0Z" fill="inherit" />
          <path d="M0 7H29V9H0V7Z" fill="inherit" />
          <path d="M0 14H29V16H0V14Z" fill="inherit" />
        </svg>
      </button>
      {
        <CSSTransition 
        mountOnEnter
        unmountOnExit
        in={isActive} timeout={400} className="navbar__content">
          <ul
            onClick={(evt) => evt.preventDefault()}
            className="navbar__content-list"
          >
            <li className="navbar__content-item">
              <a className="navbar__content-link" href="#">
                Магазины
              </a>
            </li>
            <li className="navbar__content-item">
              <a className="navbar__content-link" href="#">
                Еда
              </a>
            </li>
            <li className="navbar__content-item">
              <a className="navbar__content-link" href="#">
                Услуги и сервисы
              </a>
            </li>
            <li className="navbar__content-item">
              <a className="navbar__content-link" href="#">
                Развлечения
              </a>
            </li>
            <li className="navbar__content-item">
              <a className="navbar__content-link" href="#">
                Новости
              </a>
            </li>
          </ul>
        </CSSTransition>
      }
    </div>
  );
}

export default Navbar;
