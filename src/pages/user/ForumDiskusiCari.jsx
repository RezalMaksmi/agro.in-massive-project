import React from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";

const ForumDiskusiCari = () => {
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col gap-5 bg-white rounded-2xl">
          <div className="flex flex-col gap-3 border border-[#ececec] shadow-md py-3 md:px-4 px-2 ">
            {/* Buat Ruang */}
            <div className="flex flex-col gap-3">
              <h2 className="md:text-xl text-lg font-bold">Cari Pertanyaan</h2>
              <div className="flex flex-row md:gap-3 gap-2 md:text-base text-sm">
                <input
                  type="text"
                  placeholder="Ketik Pertanyaan..."
                  className="py-2 px-3 border-2 border-dark_20 w-full rounded-full"
                />
                <Button type="PrimaryButton" text="Cari" />
              </div>
              <span className="md:text-xl text-base">
                Hasil dari pencarian "irigasi"
              </span>
            </div>

            {/* item card */}
            <div className="">
              <CardDiskusi
                type="pencarian"
                imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
                title="Apa Itu Jagung?"
                description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
                follow={"true"}
              />

              <CardDiskusi
                type="pencarian"
                imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
                title="Shomat"
                description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
                follow={"true"}
              />
            </div>
          </div>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusiCari;
