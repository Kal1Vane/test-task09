import "./navbar.scss";

function Navbar(): JSX.Element {
  return (
    <div className="navbar__content">
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
    </div>
  );
}

export default Navbar;
