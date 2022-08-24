import { nanoid } from "nanoid";
import { BreadcrumbsProps } from "../../types";
import './breadcrumbs.scss';

function Breadcrumbs({ props }: BreadcrumbsProps): JSX.Element {
  return (
    <ul onClick={(evt) => evt.preventDefault()} className="breadcrumbs__list">
      {props.map((item) => {
        return (
          <li key={nanoid(10)} className="breadcrumbs__item">
            <a className="breadcrumbs__link" href={item.pathname}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
