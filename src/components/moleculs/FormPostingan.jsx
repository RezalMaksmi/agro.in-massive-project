import React, { useState } from "react";
import { FormDiskusi } from "../atoms";

const FormPostingan = ({
  submit,
  type,
  title,
  titleValue,
  description,
  descriptionValue,
  selectFile,
  idSpace,
  typeQuestion,
  typeInformation,
  selectedMenu,
  handleIconClick,
  fileInputRef,
  nameFile,
  handleCancelFile,
  keyImg,
}) => {
  const userData = localStorage.getItem("user");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck ? userCheck : "";

  return (
    <div className="rounded-xl bg-primary flex flex-col md:gap-5 gap-3 md:py-6 py-3 md:px-4 px-2">
      {/* Profil */}
      <div className="flex flex-row md:gap-4 gap-2 items-center">
        <img
          src={`
               ${
                 user.img !== null
                   ? `${process.env.API_URL}/assets/images/${user.img}`
                   : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
               }`}
          alt=""
          className="w-10 h-10 bg-slate-500 rounded-full object-cover "
        />
        <div className="flex flex-col  text-white">
          <h1 className="md:text-xl text-base font-bold">
            {user && user.username}
          </h1>
          <span className="md:text-base text-xs">{user && user.job}</span>
        </div>
      </div>
      {/* pertanyaan */}
      <div className="w-full border-2 border-dark_10 rounded-full md:p-1 p-[2px] grid grid-cols-2">
        <button
          onClick={typeQuestion}
          className={` ${
            selectedMenu === "question"
              ? "bg-white text-primary"
              : "  text-white scale-95"
          } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
        >
          Pertanyaan
        </button>
        <button
          onClick={typeInformation}
          className={` ${
            selectedMenu === "information"
              ? "bg-white text-primary"
              : "  text-white scale-95"
          } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
        >
          Buat Informasi
        </button>
      </div>
      {/* form */}

      <FormDiskusi
        type={selectedMenu}
        submit={submit}
        title={title}
        titleValue={titleValue}
        description={description}
        descriptionValue={descriptionValue}
        selectFile={selectFile}
        idSpace={idSpace}
        handleIconClick={handleIconClick}
        fileInputRef={fileInputRef}
        nameFile={nameFile}
        handleCancelFile={handleCancelFile}
        keyImg={keyImg}
      />
    </div>
  );
};

export default FormPostingan;
