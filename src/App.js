import React from "react";
import {
  ButtonPrimary,
  Button,
  RootFront,
  TypeBlock,
  Box,
} from "./Components/";

export const App = () => (
  <RootFront>
    <ButtonPrimary disabled>Hello there</ButtonPrimary>
    <Button disabled>Another</Button>
    <Box maxWidth="800px" mx="auto">
      <TypeBlock>
        <h1>Hey there</h1>
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio
          adipisci odit ipsum. Vero dignissimos nemo, iure consequuntur
          necessitatibus culpa asperiores libero ratione odio iusto, dolore
          aliquid. Id, provident assumenda! Harum ipsa maiores quisquam adipisci
          nostrum minima ab alias ad magni obcaecati voluptatibus delectus
          debitis, vero, ipsum ea quam id perspiciatis error consectetur quae
          voluptate. Debitis totam aut asperiores quis! Eveniet officia, maiores
          ab modi dolore molestiae nulla quis minima dicta consequuntur. Ullam
          laborum cupiditate recusandae quae aliquam obcaecati illum voluptatem
          quis assumenda deserunt, sunt, ipsum accusamus, odio inventore vero!
          Esse ullam debitis quisquam illo repellendus, recusandae vero eaque
          amet eos non qui provident aliquam ipsam nisi voluptate asperiores
          inventore enim explicabo vitae perspiciatis eveniet harum laboriosam
          porro. Repellendus, labore.
        </p>
        <h2>Subtitle</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio
          adipisci odit ipsum. Vero dignissimos nemo, iure consequuntur
          necessitatibus culpa asperiores libero ratione odio iusto, dolore
          aliquid. Id, provident assumenda! Harum ipsa maiores quisquam adipisci
          nostrum minima ab alias ad magni obcaecati voluptatibus delectus
          debitis, vero, ipsum ea quam id perspiciatis error consectetur quae
          voluptate. Debitis totam aut asperiores quis! Eveniet officia, maiores
          ab modi dolore molestiae nulla quis minima dicta consequuntur. Ullam
          laborum cupiditate recusandae quae aliquam obcaecati illum voluptatem
          quis assumenda deserunt, sunt, ipsum accusamus, odio inventore vero!
          Esse ullam debitis quisquam illo repellendus, recusandae vero eaque
          amet eos non qui provident aliquam ipsam nisi voluptate asperiores
          inventore enim explicabo vitae perspiciatis eveniet harum laboriosam
          porro. Repellendus, labore.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </TypeBlock>
    </Box>
  </RootFront>
);
