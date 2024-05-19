import React from "react";
import Artikel1 from "./../../assets/artikel/artikel1.png";
import Artikel2 from "./../../assets/artikel/artikel2.png";
import Artikel3 from "./../../assets/artikel/artikel3.jpg";
import Artikel4 from "./../../assets/artikel/artikel4.png";
import Artikel6 from "./../../assets/artikel/artikel6.png";
import Artikel7 from "./../../assets/artikel/artikel7.png";
import Artikel8 from "./../../assets/artikel/artikel8.png";
import Artikel9 from "./../../assets/artikel/artikel9.png";
import { Link } from "react-router-dom";
import SearchBar from "../../components/atoms/SearchBar";
import TemplateLogin from "../../template/TemplateLogin";

const DataArtikel = [
  {
    image: Artikel1,
    title: "Mentan Ingin Bangun Klaster Pertanian Modern",
    timestamps: "07 Mei 2024 15:52 WIB",
    description:
      "Kementerian Pertanian (Kementan) berencana untuk membangun klaster pertanian modern. Klaster pertanian modern tersebut mengacu sistem pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan Andi Amran Sulaiman saat mendatangi para petani Bojongemas, Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024). Menurut Amran, demi merealisasikan pertanian modern, pemerintah daerah perlu menyediakan lahan.",
  },
  {
    image: Artikel2,
    title: "PJ Bupati Palas Edy Junaedi Salurkan Bantuan Alsintan ke Petani",
    timestamps: "07 Mei 2024 14:40 WIB",
    description:
      "Pj Bupati Padang Lawas (Palas) Edy Junaedi menyampaikan sejumlah langkah yang akan dilakukan untuk meningkatkan produksi pangan masyarakat. Satu di antaranya, memaksimalkan bantuan dari kementerian berupa alat dan mesin pertanian (Alsintan)",
  },
];

const SampingArtikel = [
  {
    judulArtikel: `Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah`,
    timestamps: "2 Mei 2024",
    image: Artikel3,
  },
  {
    judulArtikel: `Pemerintah Aceh Gelora Kembali Pasar Tani di 2024`,
    timestamps: "25 April 2024",
    image: Artikel4,
  },
  {
    judulArtikel: `Apakah Makanan Organik Benar-benar Sehat?`,
    timestamps: "25 April 2024",
    image: Artikel6,
  },
  {
    judulArtikel: `Stok Pupuk Bersubsidi Melimpah, Petani Diminta Menebus Kuota yang Dimiliki`,
    timestamps: "25 April 2024",
    image: Artikel7,
  },
  {
    judulArtikel: `Violet Sun Agro+, Solusi Pertanian Lahan Kering Bertenaga Surya`,
    timestamps: "25 April 2024",
    image: Artikel8,
  },
  {
    judulArtikel: `6 Pengaruh Negatif IPTEK di Bidang Pertanian`,
    timestamps: "25 April 2024",
    image: Artikel9,
  },
];

const Line = (props) => {
  return (
    <div className="border-t border-gray-400 my-4" style={props.style}></div>
  );
};

export const MainArtikel = (props) => {
  return (
    <div className="grid gap-y-8 mx-auto sm:mx-0">
      {DataArtikel.map((news, index) => (
        <div className={`flex flex-col ${props.className} gap-y-2`} key={index}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full sm:w-[470px]"
          />
          <p className="text-[12px] text-gray-500">{news.timestamps}</p>
          <Link
            to="/artikeldetail"
            className="text-[24px] sm:text-[32px] font-semibold w-full sm:w-[430px] hover:text-gray-700"
          >
            {news.title}
          </Link>
          <p className="w-full sm:w-[430px] text-sm">{news.description}</p>
          <Line />
        </div>
      ))}
    </div>
  );
};

const ChildArtikel = () => {
  return (
    <div className="flex flex-col items-center sm:items-start sm:mx-8">
      {SampingArtikel.map((tes, index) => (
        <div className="flex flex-row w-full max-w-sm gap-x-4 mb-7" key={index}>
          <img
            src={tes.image}
            alt={tes.judulArtikel}
            className="w-24 h-24 object-cover rounded-2xl"
          />
          <div className="ml-3 flex flex-col justify-between">
            <Link className="text-[12px] font-bold hover:text-gray-700" to="/">
              {tes.judulArtikel}
            </Link>
            <p className="text-xs font-thin text-gray-500">{tes.timestamps}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Artikel = (props) => {
  return (
    <TemplateLogin>
      <div className="bg-white bg-gradient-to-b from-[rgba(14,27,25,0.2)] to-white">
        <div className="pt-20 sm:pt-48 text-center">
          <p className="text-[32px] sm:text-[64px] text-[#1A3D37] font-bold">
            Majalah <span className="text-[#FAB737]">Agro.in</span>
          </p>
          <p className="text-[16px] mt-4">
            Menyajikan Wawasan Terbaru dalam Dunia Pertanian
          </p>
          <SearchBar />
        </div>
        <div className="flex flex-col sm:flex-row pt-20 sm:pt-48 pb-16 justify-center items-center sm:items-start">
          <MainArtikel className="mx-4 sm:mx-32" />
          <div className="hidden sm:block border-l border-gray-400 h-full mx-8"></div>
          <ChildArtikel />
        </div>
      </div>
    </TemplateLogin>
  );
};

export default Artikel;
