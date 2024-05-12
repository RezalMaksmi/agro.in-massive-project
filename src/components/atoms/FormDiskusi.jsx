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
            className="w-full h-[80px] bg-white rounded-xl p-3 outline-0 focus:outline-0 text-lg"
            placeholder="Apa yang ingin anda tanyakan"
          ></textarea>
          <div className="text-end pt-2">
            <button className="bg-secondary rounded-full py-1 px-5 w-max text-lg">
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
            className="w-full h-[80px] bg-white rounded-xl p-3 outline-0 focus:outline-0 text-lg"
            placeholder="Tulis Informasi..."
          ></textarea>
          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-3 text-lg text-white ">
              <FaCamera />
              <FaImage />
              <GrAttachment />
            </div>
            <button className="bg-secondary rounded-full py-1 px-5 w-max text-lg">
              Kirim
            </button>
          </div>
        </div>
      );
  }
};

export default FormDiskusi;
