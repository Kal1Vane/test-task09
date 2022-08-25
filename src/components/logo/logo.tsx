
import { LogoProps } from '../../types';
import './logo.scss';
import { ReactComponent as LogoIcon } from "./logo-svg.svg";

function Logo({isActive} : LogoProps): JSX.Element {
  return (
    <div className={`header__logo ${isActive ? "active" : ""}`}>
      <a href="/" onClick={(evt) => evt.preventDefault()} className="header__logo-link">
        <LogoIcon />
      </a>
    </div>
  );
}

export default Logo;
