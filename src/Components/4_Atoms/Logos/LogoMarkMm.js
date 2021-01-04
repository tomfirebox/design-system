import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoMarkMm = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const accent = reverse ? "white" : colors.mm.accent;
  return (
    <Box
      as="svg"
      display="flex"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 39 39"
      {...props}
    >
      <g id="MM_1_">
        <g id="Group-37_1_" transform="translate(339.000000, 7.000000)">
          <g id="Clip-36_1_"></g>
          <defs>
            <filter
              id="Adobe_OpacityMaskFilter"
              filterUnits="userSpaceOnUse"
              x="0.7"
              y="0"
              width="15.5"
              height="23.7"
            >
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
          <mask
            maskUnits="userSpaceOnUse"
            x="0.7"
            y="0"
            width="15.5"
            height="23.7"
            id="mask-2_1_"
          >
            <g class="st2">
              <polygon
                id="path-1_1_"
                class="st3"
                points="0.7,0 16.2,0 16.2,23.7 0.7,23.7 				"
              />
            </g>
          </mask>
        </g>
        <path
          id="Fill-38_1_"
          fill={accent}
          d="M19.5,36C10.4,36,3,28.6,3,19.5S10.4,3,19.5,3S36,10.4,36,19.5S28.6,36,19.5,36 M19.5,0
		C8.7,0,0,8.7,0,19.5S8.7,39,19.5,39S39,30.3,39,19.5S30.3,0,19.5,0"
        />
        <path
          id="Fill-40_1_"
          fill={accent}
          d="M26.6,27.5L26.6,27.5c-2.5,1.5-3.9,0.5-6.3-1.4L20,25.8c0,0-0.1-0.1-0.1-0.1
		c-1-0.7-1.7-2.6-1.8-4.1c0.2-1.1,2-2.1,3.5-2.4c0,0,0.1,0,0.1,0l0.2,0c2.9-0.4,4.9-0.6,5.6,0.8C28.6,21.9,28.5,26.3,26.6,27.5
		 M30.2,18.5c-1.8-3.2-5.6-2.7-8.7-2.3l-0.3,0c-0.1,0-0.1,0-0.2,0c-2.8,0.5-5.6,2.4-5.9,5.1c0,0.1,0,0.1,0,0.2
		c0.1,2.3,1.1,5.2,3.1,6.6l0.2,0.2c1.5,1.3,3.5,2.9,6,2.9c1.1,0,2.4-0.3,3.8-1.2C31.7,27.9,31.8,21.5,30.2,18.5"
        />
      </g>
    </Box>
  );
};
