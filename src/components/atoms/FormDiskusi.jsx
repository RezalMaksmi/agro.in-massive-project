import React, { useRef } from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const FormDiskusi = ({
  type,
  title,
  description,
  submit,
  descriptionValue,
  titleValue,
  selectFile,
  idSpace,
  handleIconClick,
  fileInputRef,
}) => {
  switch (type) {
    case "question":
      return (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name=""
            id=""
            value={titleValue}
            onChange={title}
            className="w-full md:h-[35px] h-[10px] bg-white rounded-xl md:p-3 p-2 outline-0 focus:outline-0 md:text-base text-sm"
            placeholder="Apa yang ingin anda tanyakan?"
          ></input>
          <textarea
            name=""
            id=""
            onChange={description}
            value={descriptionValue}
            className="w-full md:h-[50px] h-[40px] bg-white rounded-xl md:p-3 p-2 outline-0 focus:outline-0 md:text-base text-sm"
            placeholder="Tuliskan deskripsi dari pertanyaanmu"
          ></textarea>
          <div className="text-end md:pt-2 pt-1">
            <button
              onClick={submit}
              className="bg-secondary rounded-full py-1 px-5 w-max md:text-lg text-base"
            >
              Kirim
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
            onChange={description}
            value={descriptionValue}
            className="w-full md:h-[95px] h-[60px] bg-white rounded-xl md:p-3 p-2 outline-0 focus:outline-0 md:text-base text-sm"
            placeholder="Tulis Informasi..."
          ></textarea>
          <div className="flex justify-between items-center md:pt-2 pt-1">
            <div className="flex gap-3 text-lg text-white ">
              <input
                type="file"
                onChange={selectFile}
                ref={fileInputRef}
                className="hidden"
              />
              <FaImage onClick={handleIconClick} className="cursor-pointer" />
              <GrAttachment
                onClick={handleIconClick}
                className="cursor-pointer"
              />
            </div>
            <button
              onClick={submit}
              className="bg-secondary rounded-full py-1 px-5 w-max md:text-lg text-base"
            >
              Kirim
            </button>
          </div>
        </div>
      );
  }
};

export default FormDiskusi;
