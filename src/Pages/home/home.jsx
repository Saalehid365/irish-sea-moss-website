import React from "react";
import { AboutHome } from "./aboutHome";
import { Feature1 } from "./feature1";
import { Feature2 } from "./feature2";
import { HomeBanner } from "./homeBanner";

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutHome />
      <Feature1 />
      <Feature2 />
    </div>
  );
};
