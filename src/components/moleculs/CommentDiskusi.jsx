import React from "react";
import { IoMdSend } from "react-icons/io";
import { CommentCard } from "../atoms";

const CommentDiskusi = () => {
  return (
    <div className="flex flex-col  bg-darkGray_10 ">
      <div className="w-full h-auto bg-darkGray_20 p-3">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
            alt=""
            className="w-10 h-10 bg-pink-600 rounded-full object-cover "
          />
          <input
            type="text"
            className="py-1 px-2 rounded-lg border w-full"
            placeholder="Tulis Komentar..."
          />
          <button>
            <IoMdSend className="text-4xl" />
          </button>
        </div>
      </div>

      <CommentCard />
    </div>
  );
};

export default CommentDiskusi;
