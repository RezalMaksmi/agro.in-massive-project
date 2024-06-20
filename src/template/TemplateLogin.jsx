import React, { useEffect } from "react";
import { Footer, Navbar } from "../components/moleculs";
import "react-toastify/dist/ReactToastify.css";
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
