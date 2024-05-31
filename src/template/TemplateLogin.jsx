import React, { useEffect } from "react";
import { Footer, Navbar } from "../components/moleculs";
import "react-toastify/dist/ReactToastify.css";
const TemplateLogin = ({ children }) => {
  // const { user, status, error, token } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (status === "succeeded" && user) {
  //     Navigate("/");
  //   }
  // });
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default TemplateLogin;
