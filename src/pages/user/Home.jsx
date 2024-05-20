import React from "react";
import HomeLogin from "./HomeLogin";
import LandingPage from "./LandingPage";

const Home = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return <>{role && token ? <HomeLogin /> : <LandingPage />}</>;
};

export default Home;
