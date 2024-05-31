import React, { useEffect, useState } from "react";
import bgHero from "./../../assets/bgHeroLogin.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Card from "./../../components/atoms/CardForm";
import InputLabel from "./../../components/atoms/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/slices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  // const goToLandingPage = () => {
  //   navigate("/");
  // };

  const addData = { name: name, email: email, password: password };
  // console.log(addData);

  const { user, status, error, token } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (check === true) {
      dispatch(register(addData));
      navigate("/login");
    } else {
      console.log("checked dulu bos");
    }
  };

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     navigate("/login");
  //   }
  // });
  const handleCheckboxChange = (event) => {
    setCheck(event.target.checked);
  };

  console.log(user);
  console.log(addData);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <button
        onClick={""}
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
        onClick={handleSubmit}
        handleCheckboxChange={handleCheckboxChange}
        check={check}
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
          onChange={(e) => setName(e.target.value)}
        >
          Username
        </InputLabel>
        <InputLabel
          type="email"
          htmlFor="email"
          id="email"
          className="text-sm sm:text-base"
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </InputLabel>
        <InputLabel
          type="password"
          htmlFor="password"
          id="password"
          className="text-sm sm:text-base"
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </InputLabel>
      </Card>
    </div>
  );
};

export default Register;
