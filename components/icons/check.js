import React from "react";

const CheckIcon = props => (
  <svg width="32px" height="32px" viewBox="0 0 32 32" {...props}>
    <defs>
      <path
        d="M12.016 25.508L2.883 16.43c-.255-.256-.383-.584-.383-.985 0-.4.128-.729.383-.984l2.023-1.969a1.22 1.22 0 01.957-.437c.383 0 .72.146 1.012.437L13 18.617 26.125 5.492c.292-.291.629-.437 1.012-.437s.702.146.957.437l2.023 1.969c.255.255.383.583.383.984s-.128.73-.383.985L13.984 25.508a1.248 1.248 0 01-.984.437c-.401 0-.73-.146-.984-.437z"
        id="a"
      />
    </defs>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <mask fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill={props.color || "#000"} fillRule="nonzero" xlinkHref="#a" />
    </g>
  </svg>
);

export default CheckIcon;
