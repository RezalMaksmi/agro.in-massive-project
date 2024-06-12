import React, { useEffect, useState } from "react";
import Card from "./../../components/atoms/CardForm";
import InputLabel from "./../../components/atoms/InputLabel";
import bgHero from "./../../assets/bgHeroLogin.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiLoaderAlt } from "react-icons/bi";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error, token } = useSelector((state) => state.auth);

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email dan password tidak boleh kosong!", {
        position: "bottom-right",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email tidak valid! Harus mengandung simbol @.", {
        position: "bottom-right",
      });
      return;
    }

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user && token) {
      toast.success("Berhasil Masuk!", {
        position: "bottom-right",
      });
      navigate("/");

      user.job == null || user.phone_number == null
        ? setTimeout(() => {
            toast.info("Lengkapi data diri anda!", {
              position: "bottom-right",
            });
          }, 9000)
        : "";
    }
  }, [user, token, status]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-4 md:left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full flex items-center gap-3"
      >
        <IoIosArrowBack />
        Kembali
      </button>
      <Card
        account="Belum punya akun?"
        direct="Daftar disini"
        opsi="Masuk"
        className="h-auto w-full max-w-sm mx-4 p-4 sm:p-6 md:p-7 mt-20 bg-white md:rounded-3xl shadow-md"
        text={
          status === "loading" ? (
            <>
              <div className="animate-spin">
                <BiLoaderAlt />
              </div>
            </>
          ) : (
            "Masuk"
          )
        }
        onClick={handleSubmit}
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
          onChange={(e) => setUsername(e.target.value)}
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
