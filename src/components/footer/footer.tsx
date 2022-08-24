import { useState } from "react";
import { FooterNavigation } from "../../const";
import "./footer.scss";

function Footer(): JSX.Element {
  const [navActive, setNavActive] = useState<FooterNavigation>(
    FooterNavigation.Main
  );

  return (
    <footer className="footer">
      <ul onClick={(evt) => evt.preventDefault()} className="footer__list">
        <li
          className={`footer__item ${
            navActive === FooterNavigation.Main ? "active" : ""
          }`}
        >
          <a
            onClick={() => setNavActive(FooterNavigation.Main)}
            href="/"
            className="footer__link"
          >
            <span className="footer__link-icon">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3745 1.58801C10.4743 1.47066 10.6555 1.47066 10.7553 1.58802L19.5668 11.9464C19.7049 12.1088 19.5895 12.3584 19.3764 12.3584H18.7474C18.057 12.3584 17.4974 12.9181 17.4974 13.6084V21.1567C17.4974 21.2948 17.3855 21.4067 17.2474 21.4067H13.6649V21.3705V16.6205C13.6649 15.5159 12.7694 14.6205 11.6649 14.6205H9.46984C8.36527 14.6205 7.46984 15.5159 7.46984 16.6205V21.3705V21.4067H3.88235C3.74428 21.4067 3.63235 21.2948 3.63235 21.1567V13.6084C3.63235 12.9181 3.07271 12.3584 2.38235 12.3584H1.75337C1.54022 12.3584 1.42484 12.1088 1.56295 11.9464L10.3745 1.58801ZM11.8978 0.616104C11.199 -0.205365 9.93072 -0.20537 9.23192 0.616103L0.420413 10.9745C-0.546338 12.111 0.261336 13.8584 1.75337 13.8584H2.13235V21.1567C2.13235 22.1232 2.91585 22.9067 3.88235 22.9067H17.2474C18.2139 22.9067 18.9974 22.1232 18.9974 21.1567V13.8584H19.3764C20.8684 13.8584 21.6761 12.111 20.7093 10.9745L11.8978 0.616104ZM8.96984 16.6205C8.96984 16.3443 9.1937 16.1205 9.46984 16.1205H11.6649C11.941 16.1205 12.1649 16.3443 12.1649 16.6205V19.8705V21.3705H10.6649H10.4698H8.96984V19.8705V16.6205Z"
                  fill="#252424"
                />
              </svg>
            </span>
            {FooterNavigation.Main}
          </a>
        </li>
        <li
          className={`footer__item ${
            navActive === FooterNavigation.Showcase ? "active" : ""
          }`}
        >
          <a
            onClick={() => setNavActive(FooterNavigation.Showcase)}
            href="/"
            className="footer__link"
          >
            <span className="footer__link-icon">
              <svg
                width="21"
                height="25"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.64819 9.29112V3.02038C6.64819 2.8913 6.69711 2.76673 6.79012 2.67724C8.17731 1.34262 11.3981 -0.310936 14.4128 2.67407C14.5045 2.76488 14.5557 2.8913 14.5557 3.02038V9.29112"
                  stroke="inherit"
                  strokeWidth="1.5"
                />
                <path
                  d="M18.1325 5.17267H3.07144C2.54241 5.17267 2.10492 5.5847 2.07323 6.11278L1.06359 22.9401C1.02911 23.5149 1.48596 24 2.0618 24H19.1421C19.7179 24 20.1748 23.5149 20.1403 22.9401L19.1307 6.11278C19.099 5.5847 18.6615 5.17267 18.1325 5.17267Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            {FooterNavigation.Showcase}
          </a>
        </li>
        <li
          className={`qr-code footer__item ${
            navActive === FooterNavigation.Scaner ? "active" : ""
          }`}
        >
          <a
            onClick={() => setNavActive(FooterNavigation.Scaner)}
            href="/"
            className="footer__link"
          >
            <span className="footer__link-icon qr-code">
              <span className="qr-code-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.75 1.5C1.61193 1.5 1.5 1.61193 1.5 1.75V5.44388C1.5 5.85809 1.16421 6.19388 0.75 6.19388C0.335786 6.19388 0 5.85809 0 5.44388V1.75C0 0.783502 0.783502 0 1.75 0H5.44388C5.85809 0 6.19388 0.335786 6.19388 0.75C6.19388 1.16421 5.85809 1.5 5.44388 1.5H1.75ZM6.0051 8.63776V6.0051H8.63776V8.63776H6.0051ZM4.5051 5.5051C4.5051 4.95282 4.95282 4.5051 5.5051 4.5051H9.13776C9.69004 4.5051 10.1378 4.95282 10.1378 5.5051V9.13776C10.1378 9.69004 9.69004 10.1378 9.13776 10.1378H5.5051C4.95282 10.1378 4.5051 9.69004 4.5051 9.13776V5.5051ZM14.4541 8.63776V6.0051H17.0867V8.63776H14.4541ZM12.9541 5.5051C12.9541 4.95282 13.4018 4.5051 13.9541 4.5051H17.5867C18.139 4.5051 18.5867 4.95282 18.5867 5.5051V9.13776C18.5867 9.69004 18.139 10.1378 17.5867 10.1378H13.9541C13.4018 10.1378 12.9541 9.69004 12.9541 9.13776V5.5051ZM14.4541 14.4541V17.0867H17.0867V14.4541H14.4541ZM13.9541 12.9541C13.4018 12.9541 12.9541 13.4018 12.9541 13.9541V17.5867C12.9541 18.139 13.4018 18.5867 13.9541 18.5867H17.5867C18.139 18.5867 18.5867 18.139 18.5867 17.5867V13.9541C18.5867 13.4018 18.139 12.9541 17.5867 12.9541H13.9541ZM6.0051 17.0867V14.4541H8.63776V17.0867H6.0051ZM4.5051 13.9541C4.5051 13.4018 4.95282 12.9541 5.5051 12.9541H9.13776C9.69004 12.9541 10.1378 13.4018 10.1378 13.9541V17.5867C10.1378 18.139 9.69004 18.5867 9.13776 18.5867H5.5051C4.95282 18.5867 4.5051 18.139 4.5051 17.5867V13.9541ZM21.3418 21.5918C21.4799 21.5918 21.5918 21.4799 21.5918 21.3418V17.648C21.5918 17.2337 21.9276 16.898 22.3418 16.898C22.756 16.898 23.0918 17.2337 23.0918 17.648V21.3418C23.0918 22.3083 22.3083 23.0918 21.3418 23.0918H17.648C17.2337 23.0918 16.898 22.756 16.898 22.3418C16.898 21.9276 17.2337 21.5918 17.648 21.5918H21.3418ZM1.5 21.3418C1.5 21.4799 1.61193 21.5918 1.75 21.5918H5.44388C5.85809 21.5918 6.19388 21.9276 6.19388 22.3418C6.19388 22.756 5.85809 23.0918 5.44388 23.0918H1.75C0.783502 23.0918 0 22.3083 0 21.3418V17.648C0 17.2337 0.335787 16.898 0.75 16.898C1.16421 16.898 1.5 17.2337 1.5 17.648L1.5 21.3418ZM21.5918 1.75C21.5918 1.61193 21.4799 1.5 21.3418 1.5H17.648C17.2337 1.5 16.898 1.16421 16.898 0.75C16.898 0.335786 17.2337 0 17.648 0H21.3418C22.3083 0 23.0918 0.783502 23.0918 1.75V5.44388C23.0918 5.85809 22.756 6.19388 22.3418 6.19388C21.9276 6.19388 21.5918 5.85809 21.5918 5.44388V1.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            {FooterNavigation.Scaner}
          </a>
        </li>
        <li
          className={`footer__item ${
            navActive === FooterNavigation.Gifts ? "active" : ""
          }`}
        >
          <a
            onClick={() => setNavActive(FooterNavigation.Gifts)}
            href="/"
            className="footer__link"
          >
            <span className="footer__link-icon">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8358 4.99996C11.021 4.25782 10.9053 3.38466 10.4511 2.59805C9.62268 1.16317 7.98178 0.559619 6.78605 1.24997C5.74212 1.85269 5.38263 3.54871 5.85945 4.92446"
                  stroke="inherit"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.1642 4.99996C10.979 4.25782 11.0947 3.38466 11.5489 2.59805C12.3773 1.16317 14.0182 0.559619 15.214 1.24997C16.2579 1.85269 16.6174 3.54871 16.1406 4.92446"
                  stroke="inherit"
                  strokeWidth="1.5"
                />
                <path d="M11 5V22.5" stroke="inherit" strokeWidth="1.5" />
                <path d="M1.5 12H20.5" stroke="inherit" strokeWidth="1.5" />
                <path
                  d="M20 5H2C1.44772 5 1 5.44772 1 6V11.5C1 11.7761 1.22386 12 1.5 12C1.77614 12 2 12.2239 2 12.5V22C2 22.5523 2.44772 23 3 23H19C19.5523 23 20 22.5523 20 22V12.5C20 12.2239 20.2239 12 20.5 12C20.7761 12 21 11.7761 21 11.5V6C21 5.44772 20.5523 5 20 5Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            {FooterNavigation.Gifts}
          </a>
        </li>
        <li
          className={`footer__item ${
            navActive === FooterNavigation.Account ? "active" : ""
          }`}
        >
          <a
            onClick={() => setNavActive(FooterNavigation.Account)}
            href="/"
            className="footer__link"
          >
            <span className="footer__link-icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5707 24V21.4445C23.5707 18.6217 21.0444 16.3334 17.928 16.3334H6.64267C3.52631 16.3334 1 18.6217 1 21.4445V24"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2854 11.2222C15.4017 11.2222 17.928 8.9339 17.928 6.11111C17.928 3.28832 15.4017 1 12.2854 1C9.16901 1 6.6427 3.28832 6.6427 6.11111C6.6427 8.9339 9.16901 11.2222 12.2854 11.2222Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {FooterNavigation.Account}
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
