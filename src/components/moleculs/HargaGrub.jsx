import React, { useState } from "react";
import { hargaPangan } from "../../data";
import CardHargaPangan from "../atoms/CardHargaPangan";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchable from "react-searchable-dropdown";

const HargaGrub = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const jenisData = [
    {
      value: "pedagang eceran",
      label: "Pedagang Eceran",
    },
    {
      value: "pedagang grosir",
      label: "Pedagang Grosir",
    },
    {
      value: "produsen",
      label: "Produsen",
    },
  ];

  console.log(dateRange);
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
        <div className="flex flex-col md:col-span-1 col-span-3 gap-1 justify-start">
          <span className="font-semibold text-lg">Jenis Data</span>
          <Searchable
            placeholder="Pilih Jenis Data"
            value={["popular"]}
            hideSelected
            options={jenisData}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col md:col-span-1 col-span-3 gap-1 justify-start">
          <span className="font-semibold text-lg">Tanggal</span>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            className=" px-3 py-3 rounded-full w-full bg-[#dddddd]"
            placeholderText="Pilih Tanggal"
            withPortal
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 mb-3">
        {/* items */}
        {hargaPangan.map((items, i) => {
          return (
            <CardHargaPangan
              Key={i + 1}
              Title={items.nama}
              Img={items.img}
              Price={items.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HargaGrub;
