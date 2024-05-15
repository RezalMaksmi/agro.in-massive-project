import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo1_white.svg";
import petani from "../../assets/info-img.jpg";
import { BiChat, BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import { TbMessageSearch } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { CardDiskusi } from "../../components/atoms";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import { IoMdSend } from "react-icons/io";

const ForumDiskusiDetail = () => {
  return (
    <ForumDiskusiTemplate>
      <div className="bg-white">
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
        />
        <div className="flex flex-col  ">
          <div className="w-full h-auto bg-darkGray_20 p-3">
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
                alt=""
                className="w-10 h-10 bg-pink-600 rounded-full object-cover "
              />
              <input
                type="text"
                className="py-2 px-3 text-lg rounded-full border w-full outline-0 focus:outline-0"
                placeholder="Tulis Komentar..."
              />
              <button>
                <IoMdSend className="text-4xl" />
              </button>
            </div>
          </div>

          <CardDiskusi
            type="Comment"
            imgProfil="data:image/jpeg;base64,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"
            name="Aura Lintang"
            about="Manager Perusahaan Agro.In"
            title="Bagaimana cara supaya petani indonesia bisa maju?"
            description="Hasil Maksimal dengan kerja yang optimal"
            likeUp="200"
          />
        </div>
      </div>
    </ForumDiskusiTemplate>
  );
};

export default ForumDiskusiDetail;
