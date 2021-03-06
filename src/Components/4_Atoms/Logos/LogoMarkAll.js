import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoMarkAll = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const accent = reverse ? "white" : colors.all.accent;
  return (
    <Box
      as="svg"
      display="flex"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 33.6 33.6"
      {...props}
    >
      <g>
        <path
          fill={accent}
          d="M28.7,4.9c-6.5-6.5-17.2-6.5-23.8,0c-6.5,6.5-6.5,17.2,0,23.8c6.5,6.5,17.2,6.5,23.8,0
		C35.2,22.1,35.2,11.5,28.7,4.9z M28.7,24.6c-1,1.4-2.6,2.3-4.4,2.4c-1.6,0.1-3.1-0.4-4.2-1.5c-1.2-1-1.9-2.5-1.9-4
		c-0.1-1.6,0.4-3.1,1.5-4.2c1-1.2,2.5-1.9,4-1.9c0.1,0,0.2,0,0.3,0c3.1,0,5.7,2.4,5.8,5.5c0.1,1-0.2,2-0.6,2.8
		C29.1,24,28.9,24.3,28.7,24.6z M31,16.5c-1.3-2-3.5-3.4-6-3.7c1.3-1.7,2-3.7,2-5.8C29.6,9.6,30.9,13.1,31,16.5z M24.2,4.7
		c0.1,0.5,0.2,1.1,0.3,1.6c0.1,2-0.6,4-1.9,5.5c-1.4,1.5-3.2,2.4-5.3,2.5c-4.2,0.2-7.8-3-8-7.2c0-0.9,0.1-1.7,0.3-2.5
		C14.1,1.9,19.7,1.9,24.2,4.7z M6.7,6.8c0,0.2,0,0.3,0,0.5c0.1,1.5,0.5,2.9,1.1,4.1c-0.7-0.1-1.4-0.1-2.1-0.1
		c-0.8,0-1.5,0.2-2.2,0.3C4.2,9.9,5.3,8.2,6.7,6.8z M2.8,14.6c1-0.4,2-0.7,3.1-0.7c2.5-0.1,4.8,0.7,6.7,2.3s2.9,3.9,3.1,6.4
		c0.2,3-1.1,5.8-3.4,7.7c-2-0.7-3.9-1.8-5.4-3.4C3.4,23.5,2.1,18.9,2.8,14.6z M15.2,30.9c1.1-1.2,1.9-2.7,2.4-4.3
		c0.2,0.3,0.5,0.5,0.7,0.7c1.4,1.2,3,1.9,4.8,2.1C20.7,30.7,17.9,31.2,15.2,30.9z"
        />
      </g>
    </Box>
  );
};
