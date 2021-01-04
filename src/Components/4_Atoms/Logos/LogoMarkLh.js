import { useTheme } from "emotion-theming";
import React from "react";
import { Box } from "../../";

export const LogoMarkLh = ({ reverse, ...props }) => {
  const { colors } = useTheme();
  const accent = reverse ? "white" : colors.lh.accent;
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
      <path
        id="Fill-24_1_"
        fill={accent}
        d="M3,19.5c0-5.1,2.3-9.7,6-12.7v12.7c0,3.3,2.7,6,6,6s6-2.7,6-6c0-1.7,1.3-3,3-3s3,1.3,3,3v14.7
		c-2.3,1.2-4.8,1.8-7.5,1.8C10.4,36,3,28.6,3,19.5 M36,19.5c0,5.1-2.3,9.7-6,12.7V19.5c0-3.3-2.7-6-6-6s-6,2.7-6,6c0,1.7-1.3,3-3,3
		s-3-1.3-3-3V4.8C14.3,3.7,16.8,3,19.5,3C28.6,3,36,10.4,36,19.5 M39,19.5C39,8.7,30.3,0,19.5,0C16,0,12.8,0.9,9.9,2.5
		C9.8,2.6,9.7,2.7,9.6,2.8C3.8,6.2,0,12.4,0,19.5C0,30.3,8.7,39,19.5,39c3.5,0,6.7-0.9,9.6-2.5c0.1-0.1,0.3-0.1,0.4-0.2
		C35.2,32.8,39,26.6,39,19.5"
      />
    </Box>
  );
};
