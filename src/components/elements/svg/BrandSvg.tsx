import * as React from 'react';
import { SVGProps } from 'react';

const BrandSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00774 0 0 .00774 -.274 -.274)" />
      </pattern>
      <image
        xlinkHref="data:image/jpeg;base64,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"
        id="b"
        width={200}
        height={200}
      />
    </defs>
  </svg>
);

export default BrandSvg;
