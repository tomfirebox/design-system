import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Box } from "../../";
import css from "@styled-system/css";

export const AnimationDropdown = ({ children, collapsed = true, ...props }) => {
  let container = useRef();
  let list = useRef();

  const [tween] = useState(gsap.timeline());
  const [collapseTween] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    tween.to(container, { opacity: 1 });
    collapseTween.to(list, { autoAlpha: 1, y: 0, duration: 0.2 }).reverse();
  }, [tween, collapseTween]);

  useEffect(() => {
    collapseTween.reversed(collapsed);
  }, [collapsed, collapseTween]);

  return (
    <Box opacity={0} ref={(e) => (container = e)} {...props}>
      <Box>{children[0]}</Box>
      <Box
        css={css({ transform: "translate(0px, 5px)" })}
        opacity={0}
        ref={(e) => (list = e)}
        visibility="hidden"
      >
        {children[1]}
      </Box>
    </Box>
  );
};
