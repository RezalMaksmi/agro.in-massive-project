import React, { useState } from "react";
import { Link } from "react-router-dom";
import petani from "../../assets/info-img.jpg";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { CardDiskusi, FormDiskusi } from "../../components/atoms";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import hasna from "../../assets/tim/hasna.png";
import TemplateLogin from "../../template/TemplateLogin";

const ForumDiskusi = () => {
  const [showTable, setShowTable] = React.useState(10);
  const [selectedMenu, setSelectedMenu] = useState("pertanyaan");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    if (menu === "pertanyaan") {
      setSelectedMenu("pertanyaan");
    } else {
      setSelectedMenu("buat-informasi");
    }
  };

  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col w-full gap-6 ">
          <div className="rounded-xl bg-primary flex flex-col md:gap-5 gap-3 md:py-6 py-3 md:px-4 px-2">
            {/* Profil */}
            <div className="flex flex-row md:gap-4 gap-2 items-center">
              <img
                src="https://cdn-2.tstatic.net/trends/foto/bank/images/mulyadi-pencipta-goyang-derago-viral.jpg"
                alt=""
                className="w-10 h-10 bg-pink-600 rounded-full object-cover "
              />
              <div className="flex flex-col  text-white">
                <h1 className="md:text-xl text-base font-bold">Mulyadi</h1>
                <span className="md:text-base text-xs">
                  Petani - Jawa Tengah, Indonesia
                </span>
              </div>
            </div>
            {/* pertanyaan */}
            <div className="w-full border-2 border-dark_10 rounded-full md:p-1 p-[2px] grid grid-cols-2">
              <button
                onClick={() => handleMenuClick("pertanyaan")}
                className={` ${
                  selectedMenu === "pertanyaan"
                    ? "bg-white text-primary"
                    : "  text-white scale-95"
                } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
              >
                Pertanyaan
              </button>
              <button
                onClick={() => handleMenuClick("buat-informasi")}
                className={` ${
                  selectedMenu === "buat-informasi"
                    ? "bg-white text-primary"
                    : "  text-white scale-95"
                } rounded-full md:py-2 py-1 text-center font-semibold  md:text-lg text-sm transform transition-all duration-300`}
              >
                Buat Informasi
              </button>
            </div>
            {/* form */}

            <FormDiskusi type={selectedMenu} />
            {/*  */}
          </div>

          <Link to="detail/pertanyaan" className="bg-white">
            <CardDiskusi
              type="Postingan"
              typePost="pertanyaan"
              imgProfil="https://vannashara.files.wordpress.com/2012/11/senyum-petani.jpg"
              name="Marjuki"
              about="Petani"
              title="Bagaimana cara supaya petani indonesia bisa maju?"
              description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
              imgPost="https://d220hvstrn183r.cloudfront.net/attachment/36170596897847692237.large"
              likeUp="200"
              comment="300"
              answer={10}
            />
          </Link>
          <Link to="detail/postingan" className="bg-white">
            <CardDiskusi
              type="Postingan"
              imgProfil={hasna}
              name="Hasna GJ"
              about="Peternak Buaya"
              description="Hasil ngobrol sama petani di beberapa daerah : 1. Harga komoditas pertanian merupakan kunci kesejahteraan dan insentif utama bagi petani. Kalau harga produk pertanian selalu dipaksa harus murah, kapan petani mau sejahtera?"
              imgPost="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgb1KICWd9znve04WiiXT8qGdDCnQvVUvCA&usqp=CAU"
              likeUp="200"
              comment="300"
            />
          </Link>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusi;
