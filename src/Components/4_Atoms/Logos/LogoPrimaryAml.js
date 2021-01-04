import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoPrimaryAml = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const primary = reverse ? "white" : colors.aml.primary;
  const accent = reverse ? "white" : colors.aml.accent;
  return (
    <Box
      as="svg"
      display="flex"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 175 38.9"
      {...props}
    >
      <g>
        <path
          id="Fill-32_1_"
          fill={accent}
          d="M22.9,13.2c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5S22.9,15.1,22.9,13.2"
        />
        <path
          id="Fill-34_1_"
          fill={accent}
          d="M26,34.5c-0.5-2.4-2-4.8-5-7.1c-0.6-0.5-1.2-0.9-1.7-1.4c1.1-0.8,2.3-1.6,3.7-2.4
		c4.8-2.9,7.9-7.9,9.2-14.5c2.3,2.8,3.7,6.5,3.7,10.4C35.9,26.2,31.8,32,26,34.5 M19.4,35.9c-2.7,0-5.3-0.7-7.5-1.8
		c0.7-1.9,2.4-4,5-6.2c0.7,0.7,1.4,1.3,2.2,1.9c2.5,1.9,3.7,3.8,4,5.7C21.9,35.7,20.7,35.9,19.4,35.9 M3,19.4c0-5.8,3-10.9,7.6-13.8
		c-1.4,5.3-1.7,13,4.3,20.1c-2.4,2-4.4,4.3-5.5,6.8C5.5,29.4,3,24.7,3,19.4 M14.2,3.8c1.6-0.5,3.4-0.9,5.2-0.9
		c3.8,0,7.3,1.3,10.1,3.5c-0.6,5.1-2.6,11.1-8.1,14.5c-1.4,0.8-2.8,1.8-4.2,2.8C10.9,16.3,12.5,8.2,14.2,3.8 M19.4,0
		C8.7,0,0,8.7,0,19.4s8.7,19.5,19.4,19.5s19.4-8.7,19.4-19.5S30.2,0,19.4,0"
        />
        <g>
          <path
            fill={primary}
            d="M71.4,30h-3.6c-0.8,0-1.1-0.4-1.3-0.9l-1.3-3.8h-8l-1.3,3.9c-0.1,0.4-0.4,0.8-1,0.8h-3.7
			c-0.4,0-0.5-0.2-0.5-0.5c0-0.1,0-0.3,0.1-0.4l7.7-20.9c0.2-0.5,0.5-0.8,1.1-0.8H63c0.7,0,1,0.3,1.2,0.7l7.9,20.7
			c0.1,0.2,0.1,0.4,0.1,0.5C72.1,29.7,71.9,30,71.4,30z M63.8,21.4l-2-6.4l-0.6-1.9h-0.1c-0.2,0.6-0.4,1.2-0.6,1.9l-2,6.4H63.8z"
          />
          <path
            fill={primary}
            d="M94.7,30c-0.8,0-1-0.4-1.1-1.3l-0.4-11.2h-0.1l-4.9,11.8C87.9,30,87.5,30,87.1,30h-1.2c-0.6,0-1-0.1-1.3-0.7
			L79,17.6h-0.1l-0.2,11.5c0,0.9-0.4,1-1.1,1h-2.7c-0.8,0-1.1-0.3-1.1-1l0.9-20.5c0-0.8,0.4-1,1-1H78c0.7,0,1,0.3,1.3,0.9l7.2,14.7
			h0.1l6.5-14.7c0.4-0.8,0.7-1.1,1.4-1.1h2.3c0.7,0,0.9,0.2,0.9,0.8L98.8,29c0,0.7-0.2,1-0.9,1C97.9,30,94.7,30,94.7,30z"
          />
          <path
            fill={primary}
            d="M117,29c0,0.7-0.4,0.9-1,0.9h-12.4c-0.7,0-1-0.2-1-1V8.3c0-0.6,0.3-0.9,0.9-0.9h3.3c0.7,0,1,0.2,1,1v17.2h8.3
			c0.6,0,0.9,0.4,0.9,0.9C117,26.5,117,29,117,29z"
          />
          <path
            fill={accent}
            d="M137.4,29c0,0.7-0.3,0.9-0.9,0.9h-3.2c-0.7,0-1-0.2-1-0.9v-8.4h-8.2V29c0,0.7-0.3,0.9-0.9,0.9H120
			c-0.7,0-1-0.2-1-0.9V8.2c0-0.7,0.4-0.8,1-0.8h3.2c0.6,0,0.9,0.2,0.9,0.8v8.2h8.2V8.2c0-0.7,0.4-0.8,1-0.8h3.2
			c0.6,0,0.9,0.2,0.9,0.8V29z"
          />
          <path
            fill={accent}
            d="M156.1,28.9c0,0.8-0.2,1.1-1,1.1h-2.6c-0.5,0-0.8-0.2-0.9-0.7l-0.1-0.7c-1.5,1.2-3.3,1.8-5.2,1.8
			c-3.5,0-5.1-2.3-5.1-5.8v-9.7c0-0.7,0.4-0.8,1-0.8h2.9c0.6,0,0.9,0.2,0.9,0.8v8.8c0,1.3,0.4,2.3,1.9,2.3c1.1,0,2.4-0.5,3.3-1.3
			v-9.8c0-0.7,0.4-0.8,1-0.8h2.9c0.6,0,0.9,0.2,0.9,0.8v14H156.1z"
          />
          <path
            fill={accent}
            d="M167.7,30.4c-1.3,0-3.1-0.8-4-1.7c-0.1,0.7-0.1,1.3-0.9,1.3h-2.5c-0.7,0-0.9-0.3-0.9-1V8.1
			c0-0.6,0.2-0.9,0.8-1l3.4-0.5c0.5,0,0.7,0.3,0.7,0.7V15c1-0.8,2.5-1.4,4-1.4c1.8,0,3.1,0.6,4.2,1.6c1.7,1.6,2.5,4.1,2.5,6.8
			C174.9,26.6,172.5,30.4,167.7,30.4z M166.9,17.8c-1,0-2,0.5-2.7,1v6.3c0.7,0.6,1.7,1.2,2.6,1.2c2.5,0,3-2.2,3-4.3
			C169.8,20.1,169.3,17.8,166.9,17.8z"
          />
        </g>
      </g>
    </Box>
  );
};
