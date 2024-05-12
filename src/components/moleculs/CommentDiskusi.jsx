import React from "react";
import { IoMdSend } from "react-icons/io";

const CommentDiskusi = () => {
  return (
    <div className="flex flex-col  ">
      <div className="w-full h-auto bg-darkGray_20 p-3">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
            alt=""
            className="w-10 h-10 bg-dark_20 rounded-full object-cover "
          />
          <input
            type="text"
            className="py-2 px-3 text-lg rounded-full border w-full outline-0 focus:outline-0"
            placeholder="Tulis Komentar..."
          />
          <button>
            <IoMdSend className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentDiskusi;
