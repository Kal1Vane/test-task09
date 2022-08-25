import './points-icon.scss';
import { ReactComponent as PointIcon } from "./point-svg.svg";

function PointsIcon(): JSX.Element {
  return (
    <span className="points__icon">
      <PointIcon />
    </span>
  );
}

export default PointsIcon;