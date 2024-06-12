import React from "react";
import { VscLoading } from "react-icons/vsc";
import logo from "../../assets/logo/Logo1.png";

const Loading = () => {
  return (
    <div className="top-0 z-50 bottom-0 left-0 right-0 fixed flex justify-center items-center bg-dark_30 backdrop-blur-xl opacity-50">
      <div className="w-auto h-auto px-4 py-4 bg-white rounded-lg flex flex-col justify-center items-center">
        {/* <img src={logo} alt="" className="w-10" /> */}
        <VscLoading className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
