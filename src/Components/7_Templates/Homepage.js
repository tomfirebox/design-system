import React from "react";
import { Container, homepageData, getImageUrl, Image } from "../";

console.log(homepageData);

export const Homepage = () => {
  const { homeVideoMainFeatured, homeQuoteText } = homepageData;
  return (
    <Container py="2rem">
      <FeaturedArticle {...homeVideoMainFeatured} />
      <p>{homeQuoteText}</p>
    </Container>
  );
};

const FeaturedArticle = ({ image, title, ...props }) => (
  <Image alt={title} src={getImageUrl(image, "thumbmd")} {...props} />
);
