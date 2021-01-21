import React, { useState, useEffect } from "react";
import { AuthorBio, AnimationLoaderFullPage } from "../";

export const Author = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  
  return (
    <AnimationLoaderFullPage {...{ loading }}>
      <AuthorBio />
    </AnimationLoaderFullPage>
  );
};
