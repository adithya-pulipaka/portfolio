import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-auto">
        <Header></Header>
        <main className="mx-8">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
