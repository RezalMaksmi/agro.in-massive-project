import React, { useRef } from "react";
import { CgClose } from "react-icons/cg";
import { FaCamera, FaImage } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import TextShortener from "./TextShortener";

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
  nameFile,
  handleCancelFile,
  keyImg,
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
                key={keyImg}
                type="file"
                onChange={selectFile}
                ref={fileInputRef}
                className="hidden"
              />
              <div className="flex flex-row gap-6 items-center ">
                <FaImage onClick={handleIconClick} className="cursor-pointer" />
                {nameFile && (
                  <div className="flex flex-row gap-5 justify-center items-center">
                    <TextShortener text={nameFile} maxLength="20" />
                    <CgClose onClick={handleCancelFile} />
                  </div>
                )}
              </div>
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
