import React, { useEffect, useState } from "react";
import Card from "./../../components/atoms/CardForm";
import InputLabel from "./../../components/atoms/InputLabel";
import bgHero from "./../../assets/bgHeroLogin.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Users } from "../../data";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };

  const handleLogin = () => {
    // Cek apakah data pengguna sesuai dengan data dummy json
    const user = Users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === "user"
    );

    if (user) {
      console.log(user);
      const token = user.token;
      const name = user.username;
      const role = "user";
      const email = user.email;
      const userData = { token, name, role, email };

      // Autentikasi berhasil
      setError("");
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(token ? "/" : "/login");
      window.location.reload(false);
    } else {
      // Autentikasi gagal
      setError("Username atau password salah");
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `URL(${bgHero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={goToLandingPage}
        className="relative top-[90px] left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full w-max flex flex-row justify-center items-center gap-3"
      >
        <IoIosArrowBack />
        Kembali
      </button>
      <Card
        account="Belum punya akun?"
        direct="Daftar disini"
        opsi="Masuk"
        className="h-[490px] inset-y-24"
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
      </Card>
    </div>
  );
};

export default Login;
