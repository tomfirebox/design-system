import React from "react";
import { Guide } from "../10_Guide/Guide";
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
        component: () => <div>steering-committee</div>,
      },
      {
        path: "/about-us",
        component: () => <div>About us</div>,
      },
      {
        path: "/newsletter",
        component: () => <div>Newsletter</div>,
      },
      {
        path: "/contact",
        component: () => <div>Contact</div>,
      },
      {
        path: "",
        component: Homepage,
      },
    ],
  },
];
