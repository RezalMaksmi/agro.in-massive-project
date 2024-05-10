import React from "react";

const CardHargaPangan = ({ Img, Title, Price, Key }) => {
  return (
    <div
      key={Key}
      className="border-2 border-dark_10 p-3 rounded-xl bg-white hover:bg-darkGray_10 hover:shadow-md transform transition-all duration-300"
    >
      <img
        src={Img}
        alt=""
        className="w-full h-[270px] object-cover overflow-hidden rounded-lg"
      />
      <div className="flex flex-col gap-1 pt-3">
        <h1 className="text-xl">{Title}</h1>
        <span className="text-base font-bold">Rp. {Price}</span>
      </div>
    </div>
  );
};

export default CardHargaPangan;
