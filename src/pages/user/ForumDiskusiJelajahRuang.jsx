import React from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { CardDiskusi } from "../../components/atoms";

const ForumDiskusiJelajahRuang = () => {
  return (
    <ForumDiskusiTemplate>
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-3 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
          <h2 className="text-xl font-bold">Jelajahi Ruang yang ada</h2>
          <div className="flex flex-col gap-2">
            <CardDiskusi
              type="jelajahRuang"
              imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
              title="Shomat"
              description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
            />

            <CardDiskusi
              type="jelajahRuang"
              imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
              title="Shomat"
              description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
            />
          </div>
        </div>
      </div>
    </ForumDiskusiTemplate>
  );
};

export default ForumDiskusiJelajahRuang;
