import React, { useState } from "react";
import Card from "./../../components/atoms/CardForm";
import InputLabel from "./../../components/atoms/InputLabel";
import bgHero from "./../../assets/bgHeroLogin.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Users } from "../../data";

const Login = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Check if the user's data matches the dummy data
    const user = Users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === "user"
    );

    if (user) {
      const token = user.token;
      const name = user.username;
      const role = "user";
      const email = user.email;
      const userData = { token, name, role, email };

     
      setError("");
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(token ? "/" : "/login");
      window.location.reload(false);
    } else {
      setError("Username atau password salah");
    }
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
        account="Belum punya akun?"
        direct="Daftar disini"
        opsi="Masuk"
        className="h-auto md:h-[490px] inset-y-24 w-full max-w-md mx-4 md:mx-0 p-6 md:p-8"
        text="Masuk"
        onClick={handleLogin}
        to={"/register"}
        title={
          <>
            Selamat Datang
            <br />
            Kembali di Agro.in
          </>
        }
      >
        <InputLabel
          type="email"
          htmlFor="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </InputLabel>
        <InputLabel
          type="password"
          htmlFor="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </InputLabel>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </Card>
    </div>
  );
};

export default Login;
