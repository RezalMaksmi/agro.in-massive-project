import React from "react";
import Logo from "./../../assets/logo/logo-txt-hijau.png";
import Button from "./../atoms/Button";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

const CardForm = (props) => {
  return (
    <div
      className={`bg-white w-full max-w-[330px] ${props.className} rounded-3xl md:absolute md:right-[20%] py-8 flex flex-col items-center px-6 md:px-8`}
    >
      <img src={Logo} alt="Logo" className="w-16 h-auto" />
      <h1 className="text-xl md:text-2xl font-semibold text-center mt-2">
        {props.title}
      </h1>
      <div className="flex flex-col items-start w-full gap-y-2 mt-4">
        {props.children}
        <div className="mt-4 flex flex-col md:flex-row md:gap-x-4 w-full justify-between">
          <label className="flex items-center w-full md:w-auto">
            <input
              type="checkbox"
              className="mr-2"
              onChange={props.handleCheckboxChange}
              checked={props.check}
            />
            <p className="text-sm text-dark_30">Remember Me</p>
          </label>
          <Button
            type="PrimaryButton"
            text={props.text}
            onClick={props.onClick}
            className="hover:bg-primary hover:text-white bg-secondary w-max px-3 py-1 "
          />
        </div>
      </div>
      <button
        type="submit"
        className="hover:bg-primary hover:text-white border-2 border-gray-400 text-sm rounded-full flex items-center gap-x-2 py-1 mt-4 px-4 w-full md:w-auto"
      >
        <GrGoogle />
        {props.opsi} Dengan Google
      </button>
      <p className="text-xs font-normal text-dark_30 my-2">{props.account}</p>
      <Link to={props.to} className="font-normal text-dark_30">
        {props.direct}
      </Link>
    </div>
  );
};

export default CardForm;
