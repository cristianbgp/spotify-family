import React from "react";

const CrossIcon = props => (
  <svg width="32px" height="32px" viewBox="0 0 32 32" {...props}>
    <defs>
      <path
        d="M19.327 16l9.983-9.983a2.352 2.352 0 10-3.327-3.328L16 12.673 6.016 2.689A2.352 2.352 0 102.69 6.017L12.672 16l-9.983 9.983a2.353 2.353 0 103.327 3.328L16 19.327l9.983 9.984a2.352 2.352 0 103.327-3.328L19.327 16z"
        id="b"
      />
    </defs>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <mask fill="#fff">
        <use xlinkHref="#b" />
      </mask>
      <use fill={props.color || "#000"} xlinkHref="#b" />
    </g>
  </svg>
);

export default CrossIcon;
