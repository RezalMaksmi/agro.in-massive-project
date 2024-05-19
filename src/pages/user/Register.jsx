import React from "react";
import bgHero from "./../../assets/bgHeroLogin.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Card from "./../../components/atoms/CardForm";
import InputLabel from "./../../components/atoms/InputLabel";

const Register = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <button
        onClick={goToLandingPage}
        className="absolute top-8 left-4 md:top-[90px] md:left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full flex items-center gap-3"
      >
        <IoIosArrowBack />
        Kembali
      </button>
      <Card
        account="Sudah punya akun?"
        direct="Masuk disini"
        opsi="Daftar"
        className="h-auto w-full max-w-xs sm:max-w-sm mx-2 sm:mx-4 p-4 sm:p-6 md:p-8 mt-20"
        text="Daftar"
        to={"/login"}
        title={
          <div className="text-center text-lg sm:text-xl md:text-2xl font-bold">
            Bergabung Bersama
            <br />
            Agro.in
          </div>
        }
      >
        <InputLabel
          type="text"
          htmlFor="username"
          id="username"
          className="text-sm sm:text-base"
        >
          Username
        </InputLabel>
        <InputLabel
          type="email"
          htmlFor="email"
          id="email"
          className="text-sm sm:text-base"
        >
          Email
        </InputLabel>
        <InputLabel
          type="password"
          htmlFor="password"
          id="password"
          className="text-sm sm:text-base"
        >
          Password
        </InputLabel>
      </Card>
    </div>
  );
};

export default Register;
