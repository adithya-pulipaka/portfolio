import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-8">{children}</main>
    </>
  );
};

export default Layout;
