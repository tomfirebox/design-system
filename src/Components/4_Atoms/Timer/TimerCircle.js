import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Box, Button } from "../../";

export const TimerCircle = ({
  start,
  seconds = 10,
  timerFinished,
  timerClicked,
}) => {
  const intervalRef = useRef();
  const refreshRate = 300;
  const limit = (1000 / refreshRate) * seconds;
  const [counter, setCounter] = useState(0);
  const [percent, setPercent] = useState(0);

  const strokeWidth = 7;
  const size = 100;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, refreshRate);
    } else {
      clearInterval(intervalRef.current);
      setCounter(0);
      setPercent(0);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start]);

  useEffect(() => {
    const percent = (counter / limit) * 100;
    const corrected = percent < 100 ? percent : 100;
    setPercent(corrected);
  }, [counter]);

  useEffect(() => {
    if (percent === 100) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        timerFinished && timerFinished();
      }, refreshRate);
    }
  }, [percent]);

  return (
    <Button
      color="accent.base"
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setPercent(100);
        timerClicked && timerClicked();
      }}
    >
      <Box position="relative" color="accent.base">
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          {/* {counter} */}
          {/* <IconPrimary
          color="white"
          fontSize="2rem"
          prefix="fas"
          icon="step-forward"
        /> */}
        </Box>
        <svg
          transform="rotate(-90)"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: circumference - (percent / 100) * circumference,
          }}
        >
          <circle
            stroke="transparent"
            fill="rgba(255,255,255,0.2)"
            r={radius - strokeWidth / 2 + 1}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ transition: `stroke-dashoffset ${refreshRate}ms linear` }}
          />
        </svg>
      </Box>
    </Button>
  );
};
