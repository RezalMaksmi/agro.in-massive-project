import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Button = (props) => {
  const { onClick, className, type, children, to, icon, text } = props;
  switch (type) {
    case "PrimaryButton":
      return (
        <button
          onClick={onClick}
          className={` px-5 py-2 rounded-full  ${
            className
              ? className
              : "hover:bg-primary hover:text-white bg-secondary"
          }`}
        >
          {text}
        </button>
      );
    case "LongPrimaryButtonIconRow":
      return (
        <button
          onClick={onClick}
          className={`py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full w-max flex flex-row justify-center items-center gap-3 ${className}`}
        >
          {text} <IoArrowForward />
        </button>
      );
    case "ButtonCsColor":
      return (
        <button
          onClick={onClick}
          className={` px-5 py-2 rounded-full ${className}`}
        >
          {text}
        </button>
      );
    default:
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-white border text-black ${className} `}
        >
          <span>{text}</span>
        </a>
      );
  }
};

export default Button;
