import React from "react";
import {
  useTrail,
  animated,
  config,
  interpolate,
  useSpring,
  useTransition,
  useChain,
} from "react-spring";
export const AnimationItemsInOut = ({ children, style }) => {
  const arr = React.Children.toArray(children);
  const transitions = useTransition(arr, (item) => item.key, {
    from: { transform: "translate3d(-20px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1, width: "100px" },
    leave: { transform: "translate3d(-20px,0,0)", opacity: 0},
    trail: 400,
    config: config.gentle,
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props, ...style }}>
      {item}
    </animated.div>
  ));
};
