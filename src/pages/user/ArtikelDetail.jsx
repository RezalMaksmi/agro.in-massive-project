import React from "react";
import Artikel1 from "./../../assets/artikel/artikel1.png";
import Artikel3 from "./../../assets/artikel/artikel3.jpg";
import Artikel4 from "./../../assets/artikel/artikel4.png";
import Artikel6 from "./../../assets/artikel/artikel6.png";
import Artikel7 from "./../../assets/artikel/artikel7.png";
import Artikel8 from "./../../assets/artikel/artikel8.png";
import Artikel9 from "./../../assets/artikel/artikel9.png";
import Iklan1 from "./../../assets/artikel/iklan1.png";
import Iklan2 from "./../../assets/artikel/iklan2.png";
import { Link } from "react-router-dom";
import { MainArtikel } from "./Artikel";
import TemplateLogin from "../../template/TemplateLogin";
import Line from "./../../components/atoms/Line";

const articles = [
  {
    image: Artikel3,
    title:
      "Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah",
    date: "2 Mei 2024",
  },
  {
    image: Artikel4,
    title:
      "Menciptakan Keseimbangan: Antara Tanggung Jawab di Sawah dan Dunia Digital",
    date: "2 Mei 2024",
  },
  {
    image: Artikel6,
    title: "Pemerintah Aceh Gelora Kembali Pasar Tani di 2024",
    date: "25 April 2024",
  },
  {
    image: Artikel7,
    title: "Apakah Makanan Organik Benar-benar Sehat?",
    date: "25 April 2024",
  },
  {
    image: Artikel8,
    title: `Violet Sun Agro+, Solusi Pertanian Lahan Kering Bertenaga Surya`,
    date: "25 April 2024",
  },
  {
    image: Artikel9,
    title: `6 Pengaruh Negatif IPTEK di Bidang Pertanian`,
    date: "25 April 2024",
  },
];

const ChildArtikel = () => {
  return (
    <div className="flex flex-col items-center sm:items-start sm:mx-8 mt-8 sm:mt-0">
      {articles.map((tes, index) => (
        <div className="flex flex-row w-full max-w-sm gap-x-4 mb-7" key={index}>
          <img
            src={tes.image}
            alt={tes.title}
            className="w-24 h-24 object-cover rounded-2xl"
          />
          <div className="ml-3 flex flex-col justify-between">
            <Link className="text-[12px] font-bold hover:text-gray-700" to="/">
              {tes.title}
            </Link>
            <p className="text-xs font-thin text-gray-500">{tes.date}</p>
          </div>
        </div>
      ))}
      <div className="w-full h-max bg-gray-300 rounded-md p-3">
        <p className="text-[20px] font-light text-gray-500 text-center py-3">
          ADVERTISEMENT
        </p>
        <div className="w-full">
          <img src={Iklan1} alt="Advertisement 1" className="w-full" />
          <img src={Iklan2} alt="Advertisement 2" className="w-full mt-3" />
        </div>
      </div>
    </div>
  );
};

export const ArtikelDetail = () => {
  const lineStyle = {
    height: "690px",
    border: "1px solid #807D7E",
    width: "2px",
  };
  const horizStyle = {
    height: "2px",
    width: "100%",
    border: "1px solid #807D7E",
    marginTop: "50px",
  };

  return (
    <TemplateLogin>
      <div className="py-32 min-h-screen flex flex-col sm:flex-row justify-center items-start">
        <div className="flex flex-col gap-y-4 px-4 sm:px-32 w-full sm:w-[60%]">
          <img
            src={Artikel1}
            alt="Artikel 1"
            className="w-full h-72 object-cover"
          />
          <p className="text-[12px] text-gray-500">07 Mei 2024 15:52 WIB</p>
          <p className="text-sm text-justify leading-loose">
            Kementerian Pertanian (Kementan) berencana untuk membangun klaster
            pertanian modern. Klaster pertanian modern tersebut mengacu sistem
            pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan
            Andi Amran Sulaiman saat mendatangi para petani Bojongemas,
            Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024).
            Menurut Amran, demi merealisasikan pertanian modern, pemerintah
            daerah perlu menyediakan lahan.
          </p>
          <p className="text-sm text-justify leading-loose">
            "Saya ingin ada kluster pertanian modern, ini sejajar dengan negara
            maju, nanti kasih pupuk pake drone, lima atau sepuluh hektare di
            sini," ujar Amran.
          </p>
          <p className="text-sm text-justify leading-loose">
            Amran mengungkapkan yang akan menggarap pertanian tersebut adalah
            para petani milenial. Pasalnya berbagai alat-alat teknologi akan
            digunakan dalam pertanian tersebut. "Saya ingin petani milenial
            turun ke lapangan, pake drone, jadi bertani itu hanya di pinggir,
            karena mereka ini generasi bonus demografi itu gak akan ke lapangan
            kalau gak menguntungkan," pungkasnya.
          </p>
          <Line style={horizStyle} />
          <h2 className="text-[32px] sm:text-[48px] font-bold mt-8">
            Berita Lainnya
          </h2>
          <MainArtikel className="mt-4" />
        </div>
        <div className="hidden sm:block">
          <Line style={lineStyle} />
        </div>
        <ChildArtikel />
      </div>
    </TemplateLogin>
  );
};
