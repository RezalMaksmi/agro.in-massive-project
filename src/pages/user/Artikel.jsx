import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct, getAPIActDetail } from "../../redux/featch/getData";
import { Loading } from "../../components/moleculs";

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
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.get);

  useEffect(() => {
    dispatch(getAPIAct(`${process.env.API_URL}/artikel`));
  }, []);

  return (
    <div className="grid gap-y-8 mx-auto sm:mx-0">
      {data ? (
        data.map((news, i) => (
          <div className={`flex flex-col ${props.className} gap-y-2`} key={i}>
            <img
              src={`${process.env.API_URL}/assets/images/${news.featured_image}`}
              alt={news.title}
              className="w-full sm:max-w-[580px] sm:w-full rounded-lg"
            />
            <p className="text-[12px] text-gray-500">{news.created}</p>
            <Link
              to={`/artikel/${news.slug}`}
              className="text-[24px] sm:text-[32px] font-semibold w-full sm:w-[430px] hover:text-gray-700"
            >
              {news.title}
            </Link>
            <p className="w-full sm:w-[430px] text-sm">{news.summary}</p>
            <Line />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

const ChildArtikel = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.get);

  useEffect(() => {
    dispatch(getAPIAct(`${process.env.API_URL}/artikel`));
  }, []);

  return (
    <div className="flex flex-col items-center sm:items-start sm:mx-8 border-l-0 sm:border-l-2 border-dark_10 px-4 h-max">
      {data ? (
        data.map((news, i) => (
          <Link
            to={`/artikel/${news.slug}`}
            className="flex flex-row w-full max-w-sm gap-x-4 mb-7"
            key={i}
          >
            <img
              src={`${process.env.API_URL}/assets/images/${news.featured_image}`}
              alt={news.title}
              className="w-24 h-24 object-cover rounded-2xl"
            />
            <div className="ml-3 flex flex-col justify-between">
              <div className="text-[12px] font-bold hover:text-gray-700">
                {news.title}
              </div>
              <p className="  text-[9px]">{news.summary}</p>
              <p className="text-xs font-thin text-gray-500">{news.created}</p>
            </div>
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

const Artikel = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.get);

  useEffect(() => {
    const formattedSlug = search.replace(/\s+/g, "-");
    dispatch(
      getAPIAct(`${process.env.API_URL}/artikel/search?q=${formattedSlug}`)
    );
  }, [search]);
  return (
    <TemplateLogin>
      <div className="bg-white bg-gradient-to-b from-[rgba(40, 70, 65, 0.2)] to-white">
        <div className="pt-20 sm:pt-32 text-center mt-7">
          <p className="text-[32px] sm:text-[64px] text-[#1A3D37] font-bold">
            Majalah <span className="text-[#FAB737]">Agro.in</span>
          </p>
          <p className="text-[16px] mt-4">
            Menyajikan Wawasan Terbaru dalam Dunia Pertanian
          </p>
          <SearchBar onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="container px-3 mx-auto flex flex-col sm:flex-row pt-20 sm:pt-32 pb-16 justify-center items-center sm:items-start">
          {!search ? (
            <div className="h-full flex flex-col gap-10 sm:flex-row  w-auto">
              <MainArtikel className="mx-4 " />
              <ChildArtikel />
            </div>
          ) : (
            <div className="grid gap-3 grid-cols-3">
              {data &&
                data.map((news, i) => (
                  <div
                    className={`flex flex-col ${props.className} gap-y-2 rounded-lg bg-white shadow-xl`}
                    key={i}
                  >
                    <div className="flex flex-col p-3 gap-1">
                      <img
                        src={`${process.env.API_URL}/assets/images/${news.featured_image}`}
                        alt={news.title}
                        className="w-full h-[250px] rounded-lg object-cover"
                      />
                      <p className="text-[12px] text-gray-500 ">
                        {news.created}
                      </p>
                      <Link
                        to={`/artikel/${news.slug}`}
                        className="text-[24px]  sm:text-[20px] font-semibold   hover:text-gray-700"
                      >
                        {news.title}
                      </Link>
                      <p className="w-full  pb-5  text-sm">{news.summary}</p>{" "}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </TemplateLogin>
  );
};

export default Artikel;
