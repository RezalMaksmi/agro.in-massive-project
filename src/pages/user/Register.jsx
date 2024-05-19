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
        className="h-auto md:h-[575px] inset-y-24 w-full max-w-md mx-4 md:mx-0 p-6 md:p-8"
        text="Daftar"
        to={"/login"}
        title={
          <>
            Bergabung Bersama
            <br />
            Agro.in
          </>
        }
      >
        <InputLabel type="text" htmlFor="username" id="username">
          Username
        </InputLabel>
        <InputLabel type="email" htmlFor="email" id="email">
          Email
        </InputLabel>
        <InputLabel type="password" htmlFor="password" id="password">
          Password
        </InputLabel>
      </Card>
    </div>
  );
};

export default Register;
