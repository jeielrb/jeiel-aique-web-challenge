import * as React from 'react';
import { SVGProps } from 'react';

const LocationSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <rect width={50} height={50} fill="#2D68F8" rx={8} />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M35.087 20.275 26.425 14.2c-.863-.6-1.988-.6-2.85 0l-8.662 6.075c-.675.45-1.05 1.238-1.05 2.025v11.512a2.497 2.497 0 0 0 2.474 2.476H33.7a2.497 2.497 0 0 0 2.475-2.475V22.3c0-.825-.412-1.575-1.087-2.025Zm-6.675 14.288h-6.825V30.25c0-.262.113-.488.338-.637l2.625-1.838a.79.79 0 0 1 .9 0l2.625 1.838c.225.15.338.375.338.637v4.313Zm6.075-.788c0 .45-.337.788-.787.788h-3.6V30.25c0-.788-.375-1.575-1.05-2.025l-2.625-1.838c-.863-.6-1.988-.6-2.85 0l-2.625 1.838c-.675.45-1.05 1.237-1.05 2.025v4.313h-3.6a.769.769 0 0 1-.788-.788V22.3c0-.262.113-.488.338-.637l8.7-6.113a.72.72 0 0 1 .45-.15c.15 0 .3.037.45.15l8.7 6.075c.225.15.337.375.337.637v11.513Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M13 13h24v24H13z" />
      </clipPath>
    </defs>
  </svg>
);

export default LocationSvg;
