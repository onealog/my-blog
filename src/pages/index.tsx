import type { NextPage } from "next";

import Seo from "../components/Seo";
import Home from "../components/Home";

const home: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Home />
    </>
  );
};

export default home;
