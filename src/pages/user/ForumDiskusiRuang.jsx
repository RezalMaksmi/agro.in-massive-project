import React from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { CardDiskusi } from "../../components/atoms";

const ForumDiskusiRuang = () => {
  return (
    <ForumDiskusiTemplate>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
          {/* Buat Ruang */}
          <h2 className="text-xl font-bold">Ruang Buat Anda</h2>

          {/* item card */}
          <div className="">
            <CardDiskusi
              type="Ruang"
              imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
              name="Marjuki"
              about="Petani"
              description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
              follow={"true"}
            />
          </div>
        </div>

        {/* ruang yang diikuti */}
        <div className="flex flex-col gap-2 border border-[#ececec] shadow-md py-3 px-4 rounded-2xl bg-white">
          <h2 className="text-xl font-bold">Ruang yang anda ikuti</h2>

          {/* item card */}
          <div>
            <CardDiskusi
              type="Ruang"
              imgProfil="https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/02/1675311278-4000x2667.webp"
              name="Mega Lodon"
              about="Peternak Tikus"
              description="Irigasi merupakan usaha penyediaan, pengaturan, dan pembuangan air untuk menunjang pertanian yang jenisnya meliputi irigasi permukaan, irigasi rawa, irigasi air bawah tanah, irigasi pompa, dan irigasi tambak."
              follow={"false"}
            />
            <CardDiskusi
              type="Ruang"
              imgProfil="data:image/jpeg;base64,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"
              name="Rezal Nur Syaifudin"
              about="Peternak Paus"
              description="Saya seorang peternak paus besar dengan taring panjang dan bergizi"
              follow={"false"}
            />
          </div>
        </div>
      </div>
    </ForumDiskusiTemplate>
  );
};

export default ForumDiskusiRuang;
