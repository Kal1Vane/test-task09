import './points-icon.scss';

function PointsIcon(): JSX.Element {
  return (
    <span className="points__icon">
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7_360)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0127563 11.4818C0.0127563 5.13407 5.19371 0.0042038 11.565 0.0042038C17.9362 0.0042038 23.1172 5.13407 23.1172 11.4818C23.1172 17.8295 17.9362 22.9594 11.565 22.9594C5.19371 22.9594 0.0127563 17.8295 0.0127563 11.4818ZM11.565 2.57136C6.59384 2.57136 2.57991 6.56948 2.57991 11.4818C2.57991 16.3941 6.59384 20.3922 11.565 20.3922C16.5361 20.3922 20.55 16.3941 20.55 11.4818C20.55 6.56948 16.5361 2.57136 11.565 2.57136Z"
            fill="inherit"
          />
          <path
            d="M11.5662 5.53951L13.4041 8.97475L17.263 9.64843L14.54 12.4452L15.087 16.2968L11.5662 14.5901L8.04536 16.2968L8.59242 12.4452L5.86932 9.64843L9.7283 8.97475L11.5662 5.53951Z"
            fill="inherit"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_360">
            <rect width="23.1345" height="23" fill="inherit" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export default PointsIcon;