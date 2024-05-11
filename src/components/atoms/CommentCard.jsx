import React from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const CommentCard = () => {
  return (
    <div className="px-3 py-6">
      {/* Profil */}
      <div className="flex flex-row gap-4  w-full items-start">
        <img
          src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
          alt=""
          className="w-10 h-10 bg-pink-600 rounded-full object-cover col-span-1 "
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col  text-dark_30 col-span-2 w-full ">
            <h1 className="text-xl font-bold">Mulyadi</h1>
            <span className="text-sm">Petani - Diperbarui 3 mei</span>
          </div>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            modi provident alias impedit illo quidem corporis pariatur deserunt,
            quae a.
          </span>
          <div className="">
            <div className="w-max flex flex-row gap-2 items-center text-dark_30  rounded-full text-lg">
              <AiFillUpCircle className="text-xl" />
              <span>3455</span>
              <AiFillDownCircle className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
