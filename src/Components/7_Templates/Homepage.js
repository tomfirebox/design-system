import css from "@styled-system/css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Container, homepageData, getImageUrl, Image, Box } from "../";
import { AnimationLoaderFullPage } from "../4_Atoms";

console.log(homepageData);

export const Homepage = () => {
  const { homeVideoMainFeatured, homeQuoteText } = homepageData;
  const [loading, setLoading] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      position: "absolute",
    },
    in: {
      opacity: 1,
      position: "absolute",
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <AnimationLoaderFullPage {...{ loading }}>
        {!loading && (
          <Container py="2rem">
            <FeaturedArticle {...homeVideoMainFeatured} />
            <p>{homeQuoteText}</p>
          </Container>
        )}
    </AnimationLoaderFullPage>
  );
};

const FeaturedArticle = ({ image, title, ...props }) => (
  <Image alt={title} src={getImageUrl(image, "thumbmd")} {...props} />
);
