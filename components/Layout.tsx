import React, { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
