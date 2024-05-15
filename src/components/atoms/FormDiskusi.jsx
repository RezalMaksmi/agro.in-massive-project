import React from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const FormDiskusi = ({ type }) => {
  switch (type) {
    case "pertanyaan":
      return (
        <div className="">
          <textarea
            name=""
            id=""
            className="w-full md:h-[80px] h-[60px] bg-white rounded-xl md:p-3 p-2 outline-0 focus:outline-0 md:text-lg text-base"
            placeholder="Apa yang ingin anda tanyakan"
          ></textarea>
          <div className="text-end md:pt-2 pt-1">
            <button className="bg-secondary rounded-full py-1 px-5 w-max md:text-lg text-base">
              Cari
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="">
          <textarea
            name=""
            id=""
            className="w-full md:h-[80px] h-[60px] bg-white rounded-xl md:p-3 p-2 outline-0 focus:outline-0 md:text-lg text-base"
            placeholder="Tulis Informasi..."
          ></textarea>
          <div className="flex justify-between items-center md:pt-2 pt-1">
            <div className="flex gap-3 text-lg text-white ">
              <FaCamera />
              <FaImage />
              <GrAttachment />
            </div>
            <button className="bg-secondary rounded-full py-1 px-5 w-max md:text-lg text-base">
              Kirim
            </button>
          </div>
        </div>
      );
  }
};

export default FormDiskusi;
