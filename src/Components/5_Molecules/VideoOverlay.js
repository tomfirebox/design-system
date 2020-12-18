import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Trafalgar, Minion } from "../";
import { Button } from "../2_Primitives";
import { TimerCircle } from "../4_Atoms";

export const VideoOverlay = ({
  title = "Title Not Provided",
  isOpen,
  closeClicked,
  confirmClicked,
  timerFinished,
  bg,
}) => {
  const [startTimer, setStartTimer] = useState();
  const [animate, setAnimate] = useState();

  const closeButton = () => {
    toggle(false);
    closeClicked && closeClicked();
  };

  useEffect(() => {
    toggle(isOpen);
  }, [isOpen]);

  const toggle = (open) => {
    setStartTimer(false);
    if (open) {
      setAnimate(true);
    } else {
      setTimeout(() => {
        setAnimate(false);
      }, 400);
    }
  };

  return (
    <>
      <AnimatePresence key="videotimer">
        {animate && (
          <FadeIn
            key="main"
            height="100%"
            initial={!animate ? "animate" : "exit"}
            animate={animate ? "animate" : "exit"}
            exit={!animate ? "animate" : "exit"}
            delayOut={0.3}
            onAnimationComplete={() => setStartTimer(true)}
          >
            <Frame {...{ bg }}>
              <FadeInUp delayIn={0.3} delayOut={0.5}>
                <Label>Next</Label>
              </FadeInUp>
              <FadeInUp delayIn={0.5} delayOut={0.5}>
                <Title>{title}</Title>
              </FadeInUp>
              <FadeIn delayIn={0.8} delayOut={0}>
                <ScaleIn delayIn={0.8}>
                  <TimerCircle
                    start={startTimer}
                    timerClicked={() => {
                      timerFinished();
                      confirmClicked();
                    }}
                    {...{ timerFinished }}
                  />
                </ScaleIn>
              </FadeIn>
              <FadeInUp delayIn={0.6} delayOut={0.5}>
                <CloseButton onClick={() => closeButton()}>Cancel</CloseButton>
              </FadeInUp>
            </Frame>
          </FadeIn>
        )}
      </AnimatePresence>
    </>
  );
};

const CloseButton = (props) => (
  <Button mt="2rem" fontSize="0.9rem" {...props} />
);

const Title = (props) => <Trafalgar mb="2rem" {...props} />;

const Label = (props) => (
  <Minion textAlign="center" mb="2rem" textTransform="uppercase" {...props} />
);

const Frame = ({ bg, ...props }) => (
  <Box
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    bg={bg || "primary.base"}
    size="100%"
    position="relative"
    {...props}
  />
);

const FadeIn = ({ delayIn = 0, delayOut = 0, ...props }) => {
  const variants = {
    animate: {
      opacity: 1,
      transition: {
        delay: delayIn,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: delayOut,
      },
    },
  };
  return <Box as={motion.div} {...props} {...{ variants }}></Box>;
};

const ScaleIn = ({ delayIn = 0, delayOut = 0, ...props }) => {
  const variants = {
    animate: {
      scale: 1,
      transition: {
        delay: delayIn,
      },
    },
    exit: {
      scale: 0,
      transition: {
        delay: delayOut,
      },
    },
  };

  return <motion.div {...props} {...{ variants }}></motion.div>;
};

const FadeInUp = ({ delayIn = 0, delayOut = 0, ...props }) => {
  const variants = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delayIn,
        y: { velocity: -1000 },
      },
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        delay: delayOut,
        y: { stiffness: 1000 },
      },
    },
  };
  return <motion.div {...props} {...{ variants }}></motion.div>;
};
