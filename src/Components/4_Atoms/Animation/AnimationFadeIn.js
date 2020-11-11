import React from "react";
import { useSpring, animated, config } from "react-spring";

export const AnimationFadeIn = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });
  return <animated.div style={props}>{children}</animated.div>;
};
