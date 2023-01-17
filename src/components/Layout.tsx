import { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  return (
    <div className="md:w-[768px] my-0 mx-auto px-8">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
