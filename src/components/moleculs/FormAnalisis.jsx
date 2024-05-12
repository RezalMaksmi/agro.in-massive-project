import React from "react";
import { CgClose } from "react-icons/cg";
import Searchable from "react-searchable-dropdown";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
const jenisTanah = [
  {
    value: "blitar",
    label: "blitar",
  },
  {
    value: "magelang",
    label: "magelang",
  },
  {
    value: "surabaya",
    label: "surabaya",
  },
  {
    value: "bali",
    label: "bali",
  },
  {
    value: "malang",
    label: "malang",
  },
];
const FormAnalisis = (props) => {
  const { onClick } = props;
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-100% bg-[#1414149c] flex justify-center items-center z-50 ">
      <div className="px-10 py-8 rounded-3xl bg-white relative max-w-[600px] w-full flex flex-col gap-3 ">
        <button
          className="absolute top-3 right-3 p-2 bg-[#dfdfdf] hover:bg-[#cecece]  rounded-full"
          onClick={onClick}
        >
          <CgClose />
        </button>
        <h1 className="text-2xl font-bold">Form Pengecekan Tanah</h1>
        <div className="flex flex-col gap-1 ">
          <span>Nama Tanaman</span>
          <Searchable
            placeholder="Pilih Tanaman"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>PH Tanah</span>
          <Searchable
            placeholder="Masukkan PH Tanah"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Tekstur</span>
          <Searchable
            placeholder="Masukkan Tekstur"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Struktur</span>
          <Searchable
            placeholder="Masukkan Struktur"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Warna</span>
          <Searchable
            placeholder="Masukkan Warna"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Kondisi Fisik</span>
          <Searchable
            placeholder="Masukkan Kondisi Fisik"
            value={["popular"]}
            hideSelected
            options={jenisTanah}
            onSelect={(value) => {
              console.log(value);
            }}
          />
        </div>
        <Button
          onClick={() => navigate("/hasil-analisis")}
          type="LongPrimaryButtonIconRow"
          text="Lihat Hasil"
          className="mt-3"
        />
      </div>
    </div>
  );
};

export default FormAnalisis;
