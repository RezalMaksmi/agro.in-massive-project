import React from "react";
import { Footer, Navbar } from "../components/moleculs";

const TemplateLogin = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default TemplateLogin;
