import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoMarkGvhd = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const accent = reverse ? "white" : colors.gvhd.accent;
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
      <g id="GVHD_1_">
        <path
          id="Fill-1_1_"
          fill={accent}
          d="M21.6,26.7c-2.1,0.4-5.2,0.3-7.4-1.9c-1.5-1.5-2.2-3.4-2.2-5.3c0-1.9,0.7-3.8,2.2-5.3
		c2.9-2.9,7.7-2.9,10.6,0c2.2,2.2,2.3,5.2,1.9,7.4c-0.3,1.7-0.1,3.7,0.4,5.5C25.3,26.6,23.3,26.4,21.6,26.7 M31.2,7.8
		c3.1,3.1,4.8,7.3,4.8,11.7c0,1.5-0.2,2.9-0.6,4.3c-0.3,0.9-0.6,1.7-0.8,2.4c-0.1,0.3-0.3,0.7-0.5,1c0,0,0,0.1-0.1,0.1
		c-0.1,0.3-0.3,0.5-0.5,0.8c-0.7,1-1.2,1.4-1.6,1.5c-0.1,0-0.2,0.1-0.4-0.2c0,0,0,0,0,0c-1.3-1.3-2.3-5-1.9-7.4
		c0.7-4-0.3-7.6-2.7-10C22.8,8,16.2,8,12.1,12.1C8,16.2,8,22.8,12.1,26.9c2.4,2.4,6,3.4,10,2.7c2.4-0.4,6,0.5,7.4,1.9c0,0,0,0,0,0
		c0.2,0.2,0.2,0.2,0.1,0.4c-0.2,0.6-1,1.5-2.9,2.4c-0.2,0.1-0.5,0.2-0.7,0.3c-0.3,0.1-0.5,0.2-0.8,0.3c-0.1,0.1-0.3,0.1-0.5,0.2
		c-0.3,0.1-0.6,0.2-0.9,0.3c-5.5,1.5-11.7,0.1-16-4.2C4.7,28,3,23.9,3,19.5c0-4.4,1.7-8.5,4.8-11.7C14.3,1.4,24.7,1.4,31.2,7.8
		 M5.7,5.7C2,9.4,0,14.3,0,19.5s2,10.1,5.7,13.8c5,5,12,6.7,18.3,5.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.3-0.1
		c0.3-0.1,0.6-0.2,1-0.3c0.2-0.1,0.4-0.1,0.6-0.2c0.3-0.1,0.7-0.2,1-0.4c0.2-0.1,0.4-0.2,0.6-0.3c2-0.9,3.8-2.2,5.5-3.8
		c1.7-1.7,3-3.6,3.9-5.7c0-0.1,0-0.1,0.1-0.1c0.4-0.9,0.8-1.9,1-2.9c0-0.1,0-0.1,0.1-0.2c0,0,0-0.1,0-0.1c0.4-1.5,0.6-3.1,0.6-4.7
		c0-5.2-2-10.1-5.7-13.8C25.7-1.9,13.3-1.9,5.7,5.7"
        />
      </g>
    </Box>
  );
};
