import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoPrimaryGvhd = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const primary = reverse ? "white" : colors.gvhd.primary;
  const accent = reverse ? "white" : colors.gvhd.accent;
  return (
    <Box
      as="svg"
      display="flex"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 189.9 39"
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
        <path
          id="Fill-3_1_"
          fill={primary}
          d="M70.2,29.2c-1.9,0.9-5.3,1.5-8.1,1.5c-6.5,0-10.7-4.6-10.7-11.6c0-6.9,4.6-11.9,11.1-11.9
		c2.4,0,4.2,0.4,6.4,1.4c0.4,0.2,0.5,0.5,0.5,0.7c0,0.2-0.1,0.3-0.1,0.4l-1,2.5c-0.1,0.4-0.3,0.5-0.6,0.5c-0.2,0-0.4-0.1-0.6-0.2
		c-0.9-0.4-2.8-1-4.4-1c-1.4,0-3,0.6-4,1.7c-1.1,1.2-1.9,3-1.9,5.6c0,5.2,2.5,7.4,5.5,7.4c1.3,0,2.6-0.1,3.3-0.3v-5h-2.5
		c-0.5,0-0.8-0.3-0.8-0.8v-2.5c0-0.6,0.3-0.8,0.9-0.8H70c0.6,0,0.9,0.2,0.9,0.9V28C70.9,28.6,70.8,28.9,70.2,29.2"
        />
        <path
          id="Fill-5_1_"
          fill={primary}
          d="M88.2,15.4l-5.9,14.2c-0.2,0.6-0.5,0.7-1.1,0.7h-1.9c-0.6,0-0.9-0.1-1.1-0.6l-5.8-14.4
		c0-0.1-0.1-0.2-0.1-0.3c0-0.3,0.2-0.5,0.7-0.5h3.7c0.6,0,0.9,0.3,1.1,0.8l2,6.6c0.2,0.7,0.5,1.7,0.6,2.3h0c0.2-0.6,0.4-1.6,0.6-2.3
		l2.2-6.7c0.2-0.6,0.5-0.8,1.2-0.8h3c0.5,0,0.8,0.2,0.8,0.6C88.3,15.1,88.3,15.3,88.2,15.4"
        />
        <path
          id="Fill-7_1_"
          fill={primary}
          d="M107.4,30.3h-3.2c-0.7,0-1-0.2-1-0.9V21H95v8.4c0,0.7-0.3,0.9-0.9,0.9h-3.2c-0.7,0-1-0.2-1-0.9
		V8.6c0-0.7,0.4-0.8,1-0.8h3.2c0.6,0,0.9,0.2,0.9,0.8v8.2h8.2V8.6c0-0.7,0.4-0.8,1-0.8h3.2c0.6,0,0.9,0.2,0.9,0.8v20.7
		C108.4,30,108.1,30.3,107.4,30.3"
        />
        <path
          id="Fill-9_1_"
          fill={primary}
          d="M119.3,12.2h-1.8v13.7h2.3c3.2,0,6.5-1.4,6.5-6.9C126.2,14.2,123.8,12.2,119.3,12.2
		 M119.9,30.3h-6.6c-0.7,0-1-0.2-1-1V8.8c0-0.7,0.2-1,1.1-1h5.1c8.1,0,13.3,2.7,13.3,11.3C131.8,26.9,126.5,30.3,119.9,30.3"
        />
        <path
          id="Fill-11_1_"
          fill={accent}
          d="M152,30.3h-3.2c-0.7,0-1-0.2-1-0.9V21h-8.2v8.4c0,0.7-0.3,0.9-0.9,0.9h-3.2
		c-0.7,0-1-0.2-1-0.9V8.6c0-0.7,0.4-0.8,1-0.8h3.2c0.6,0,0.9,0.2,0.9,0.8v8.2h8.2V8.6c0-0.7,0.4-0.8,1-0.8h3.2
		c0.6,0,0.9,0.2,0.9,0.8v20.7C152.9,30,152.6,30.3,152,30.3"
        />
        <path
          id="Fill-13_1_"
          fill={accent}
          d="M170.3,30.3h-2.6c-0.5,0-0.8-0.2-0.9-0.6l-0.1-0.7c-1.5,1.2-3.3,1.8-5.2,1.8
		c-3.5,0-5.1-2.3-5.1-5.8v-9.6c0-0.6,0.4-0.8,1-0.8h2.9c0.6,0,0.9,0.2,0.9,0.8v8.8c0,1.3,0.4,2.3,1.9,2.3c1.1,0,2.4-0.5,3.3-1.3
		v-9.8c0-0.6,0.4-0.8,1-0.8h2.9c0.6,0,0.9,0.2,0.9,0.8v13.9C171.3,30,171.1,30.3,170.3,30.3"
        />
        <path
          id="Fill-15_1_"
          fill={accent}
          d="M182,18.2c-1,0-1.9,0.5-2.7,1v6.3c0.7,0.6,1.7,1.2,2.6,1.2c2.5,0,3-2.2,3-4.3
		C184.9,20.5,184.4,18.2,182,18.2 M182.7,30.7c-1.3,0-3.1-0.8-4-1.7c-0.1,0.7-0.1,1.3-0.9,1.3h-2.5c-0.7,0-0.9-0.3-0.9-1V8.4
		c0-0.6,0.2-0.9,0.8-1l3.2-0.4c0.1,0,0.2,0,0.3,0c0.5,0,0.6,0.3,0.6,0.7v7.7c1-0.8,2.5-1.4,4-1.4c1.8,0,3.1,0.6,4.2,1.6
		c1.7,1.6,2.5,4.1,2.5,6.8C189.9,27,187.6,30.7,182.7,30.7"
        />
      </g>
    </Box>
  );
};
