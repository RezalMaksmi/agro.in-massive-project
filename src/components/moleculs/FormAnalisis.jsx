import React from "react";
import { CgClose } from "react-icons/cg";
import Searchable from "react-searchable-dropdown";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
const jenistanaman = [
  {
    value: "padi",
    label: "padi",
  },
  {
    value: "jagung",
    label: "jagung",
  },
  {
    value: "palawija",
    label: "palawija",
  },
  {
    value: "cabai",
    label: "cabai",
  },
  {
    value: "bawang merah",
    label: "bawang merah",
  },
  {
    value: "bawang putih",
    label: "bawang putih",
  },
  {
    value: "Umbi-Umbian",
    label: "Umbi-Umbian",
  },
  {
    value: "kacang-kacangan",
    label: "kacang-kacangan",
  },
  {
    value: "tanaman rimpang",
    label: "tanaman rimpang",
  },
];

const phTanah = [
  {
    value: "4-7",
    label: "4-7",
  },
  {
    value: "5,6-7,5",
    label: "5,6-7,5",
  },
  {
    value: "4,5-6,5",
    label: "4,5-6,5",
  },
  {
    value: "6-7",
    label: "6-7",
  },
  {
    value: " 5,6-6,5",
    label: " 5,6-6,5",
  },
  {
    value: "5,5-7,5",
    label: "5,5-7,5",
  },
  {
    value: "5-7",
    label: "5-7",
  },
  {
    value: "6,5-7",
    label: "6,5-7",
  },
  {
    value: "5,5-6,5",
    label: "5,5-6,5",
  },
];

const tekstur = [
  {
    value: "Pasir",
    label: "Pasir",
  },
  {
    value: "Pasir berlempung",
    label: "Pasir berlempung",
  },
  {
    value: "Lempung berpasir",
    label: "Lempung berpasir",
  },
  {
    value: "Lempung",
    label: "Lempung",
  },
  {
    value: "Lempung berdebu",
    label: "Lempung berdebu",
  },
  {
    value: "Debu",
    label: "Debu",
  },
  {
    value: "Lempung berliat",
    label: "Lempung berliat",
  },
  {
    value: "Lempung liat berpasir",
    label: "Lempung liat berpasir",
  },
  {
    value: "Lempung berliat berdebu",
    label: "Lempung berliat berdebu",
  },
  {
    value: "Liat berpasir",
    label: "Liat berpasir",
  },
  {
    value: "Liat berdebu",
    label: "Liat berdebu",
  },
  {
    value: "Liat",
    label: "Liat",
  },
];

const struktur = [
  {
    value: "Struktur Butir",
    label: "Struktur Butir",
  },
  {
    value: "Struktur Blok",
    label: "Struktur Blok",
  },
  {
    value: "Struktur Prisma",
    label: "Struktur Prisma",
  },
  {
    value: "Struktur Columnar",
    label: "Struktur Columnar",
  },
  {
    value: "Struktur Lempengan",
    label: "Struktur Lempengan",
  },
  {
    value: "Struktur Serbuk",
    label: "Struktur Serbuk",
  },
  {
    value: "Struktur Crumb",
    label: "Struktur Crumb",
  },
];

const warna = [
  {
    value: "coklat",
    label: "coklat",
  },
  {
    value: "hitam",
    label: "hitam",
  },
  {
    value: "coklat kehitaman",
    label: "coklat kehitaman",
  },
  {
    value: "coklat gelap kuning kemerahan",
    label: "coklat gelap kuning kemerahan",
  },
  {
    value: "hitam kekuningan",
    label: "hitam kekuningan",
  },
];

const kondisi = [
  {
    value: "Halus",
    label: "Halus",
  },
  {
    value: "Agak halus",
    label: "Agak halus",
  },
  {
    value: "Sedang",
    label: "Sedang",
  },
  {
    value: "Agak kasar",
    label: "Agak kasar",
  },
  {
    value: "Kasar",
    label: "Kasar",
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
            options={jenistanaman}
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
            options={phTanah}
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
            options={tekstur}
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
            options={struktur}
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
            options={warna}
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
            options={kondisi}
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
