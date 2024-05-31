import React, { useEffect } from "react";
import HomeLogin from "./HomeLogin";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";

const Home = () => {
  // const getUserDataFromLocalStorage = () => {
  //   const user = localStorage.getItem("userData");
  //   return user ? JSON.parse(user) : {};
  // };

  // const { token } = getUserDataFromLocalStorage();

  const { token } = useSelector((state) => state.auth);

  return <>{token ? <HomeLogin /> : <LandingPage />}</>;
};

export default Home;
