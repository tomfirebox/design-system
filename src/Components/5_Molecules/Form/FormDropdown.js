import React, { useState } from "react";
import { Button, AnimationFadeIn, AnimationItemsInOut } from "../../";
import {
  useTrail,
  animated,
  config,
  interpolate,
  useTransition,
} from "react-spring";

export const FormDropdown = () => {
  const [items, setItems] = useState(["One", "Two"]);
  const [list, setList] = useState([]);

  const [trail, set] = useTrail(items.length, () => ({
    // trail: 1000,
    config: config.wobbly,
    opacity: 1,
    sc: 0.9,
    x: "0%",
    y: "0px",
    skewX: 0,
    from: {
      opacity: 0,
      sc: 0.8,
      x: "100%",
      y: "100px",
      skewX: 20,
    },
    // item
  }));

  const transitions = useTransition(items, (item, index) => index, {
    from: { transform: "translate3d(-40px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(-40px,0,0)", opacity: 0 },
    config: config.wobbly,
  });

  return (
    <AnimationFadeIn>
      {/* {trail.map(({ sc, x, y, skewX, ...props }, i) => (
        <animated.div
          key={i}
          style={{
            ...props,
            display: "inline-block",
            transform: interpolate(
              [sc, x, y, skewX],
              (sc, x, y, skewX) =>
                `scale(${sc}) translate(${x}, ${y}) skewX(${skewX}deg)`
            ),
          }}
        >
          <Token>{items[i]}</Token>
        </animated.div>
      ))} */}
      <button
        onClick={() => setItems([...items, new Date().getSeconds().toString()])}
      >
        Add
      </button>
      <button
        onClick={() =>
          setItems((items) => items.filter((x, i) => i < items.length - 1))
        }
      >
        Remove
      </button>
      <AnimationItemsInOut style={{ display: "inline-block" }}>
        {items.map((item) => (
          <Token mr="0.2rem">{item}</Token>
        ))}
      </AnimationItemsInOut>

      {/* {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props, display: "inline-block" }}>
          <Token>{item}</Token>
        </animated.div>
      ))} */}
    </AnimationFadeIn>
  );
};

const Token = (props) => (
  <Button bg="primary.base" color="white" borderRadius="0.2rem" {...props} />
);
