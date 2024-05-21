import React from "react";
import Logo from "./../../assets/logo/logo-txt-hijau.png";
// import InputLabel from './../atoms/InputLabel';
import Button from "./../atoms/Button";
import Goggle from "./../../assets/logo/google.png";
import { Link } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import InputLabel from "./../atoms/InputLabel";

// const InputLabel = (props) => {
//   return (
//     <form className='flex flex-col border-b-2 border-[#8D9E9B] items-start w-3/4 gap-y-3'>
//       	<label htmlFor={props.htmlFor} className='text-sm font-semibold text-[#8D9E9B] mt-5'>{props.children}</label>
//       	<input type={props.type} name='email' id={props.id} className='focus:outline-none focus:ring-0'/>
//     </form>
//   )
// }

const CardForm = (props) => {
  return (
    <div
      className={`bg-white w-[330px] ${props.className} rounded-3xl absolute right-[20%] py-8 flex flex-col items-center`}
    >
      <img src={Logo} alt="" className="w-[100px]" />
      <h1 className="text-xl font-semibold text-center mt-2">{props.title}</h1>
      <div className="flex flex-col items-start w-auto gap-y-3">
        {props.children}
        <div className="mt-3 flex gap-x-20 ">
          <div className="flex flex-row w-full justify-center items-center  gap-1 pt-[9px]">
            <input type="checkbox" />
            <span className="text-xs  font-normal text-dark_30">
              Remember Me
            </span>
          </div>
          <Button
            type="PrimaryButton"
            text={props.text}
            onClick={props.onClick}
            className="hover:bg-primary hover:text-white bg-secondary px-3 py-1 md:text-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        className="hover:bg-primary hover:text-white border-2 border-gray-400 text-sm rounded-full flex items-center gap-x-2 py-1 mt-4 px-4"
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
