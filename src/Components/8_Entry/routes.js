import React from "react";
import { Guide } from "../10_Guide/Guide";
import { AnimationLoaderFullPage } from "../4_Atoms";
import { Homepage, Author } from "../7_Templates";
import { RootFront } from "./RootFront";

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
          <AnimationLoaderFullPage>steering-committee</AnimationLoaderFullPage>
        ),
      },
      {
        path: "/about-us",
        component: () => (
          <AnimationLoaderFullPage>About us</AnimationLoaderFullPage>
        ),
      },
      {
        path: "/newsletter",
        component: () => (
          <AnimationLoaderFullPage>Newsletter</AnimationLoaderFullPage>
        ),
      },
      {
        path: "/contact",
        component: () => (
          <AnimationLoaderFullPage>Contact</AnimationLoaderFullPage>
        ),
      },
      {
        path: "",
        component: Homepage,
      },
    ],
  },
];
