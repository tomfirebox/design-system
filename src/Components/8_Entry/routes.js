import { motion } from "framer-motion";
import React from "react";
import { Guide } from "../10_Guide/Guide";
import { AnimationLoaderFullPage } from "../4_Atoms";
import { Homepage, Author } from "../7_Templates";
import { RootFront } from "./RootFront";

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

export const routes = [
  {
    path: "/admin",
    component: () => <div>Admin coming soon</div>,
  },
  {
    path: "/guide",
    component: Guide,
  },
  {
    path: "",
    component: RootFront,
    routes: [
      {
        path: "/steering-committee/:id/:author",
        component: Author,
      },
      {
        path: "/steering-committee",
        component: () => (
          <AnimationLoaderFullPage loading={false}>
            steering-committee
          </AnimationLoaderFullPage>
        ),
      },
      {
        path: "/about-us",
        component: () => (
          <AnimationLoaderFullPage loading={false}>
            About us
          </AnimationLoaderFullPage>
        ),
      },
      {
        path: "/newsletter",
        component: () => (
          <AnimationLoaderFullPage loading={false}>
            Newsletter
          </AnimationLoaderFullPage>
        ),
      },
      {
        path: "/contact",
        component: () => (
          <AnimationLoaderFullPage loading={false}>
            Contact
          </AnimationLoaderFullPage>
        ),
      },
      {
        path: "",
        component: Homepage,
      },
    ],
  },
];
