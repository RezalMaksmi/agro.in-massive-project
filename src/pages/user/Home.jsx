import React, { useEffect } from "react";
import HomeLogin from "./HomeLogin";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";

const Home = () => {
  const { token } = useSelector((state) => state.auth);

  return <>{token ? <HomeLogin /> : <LandingPage />}</>;
};

export default Home;
