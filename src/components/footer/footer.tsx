import { useState } from "react";
import { FooterNavigation } from "../../const";
import "./footer.scss";
import { ReactComponent as HomeIcon } from "./home-svg.svg";
import { ReactComponent as ShowcaseIcon } from "./showcase-svg.svg";
import { ReactComponent as QRIcon } from "./qr-svg.svg";
import { ReactComponent as GiftIcon } from "./gift-svg.svg";
import { ReactComponent as AccIcon } from "./acc-svg.svg";

function Footer(): JSX.Element {
  const [navActive, setNavActive] = useState<FooterNavigation>(FooterNavigation.Main);

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
              <HomeIcon />
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
              <ShowcaseIcon />
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
                <QRIcon />
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
              <GiftIcon />
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
              <AccIcon />
            </span>
            {FooterNavigation.Account}
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
