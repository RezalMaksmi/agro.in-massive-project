import React, { useState } from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import logo from "../../assets/bg_detail-ruang.jpg";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { FormPostingan } from "../../components/moleculs";

const ForumDiskusiDetailRuang = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col md:gap-5 gap-3 pb-3">
          <div className="border-[#ececec] shadow-md rounded-2xl bg-white border ">
            <div className="border-[#ececec] shadow-md rounded-2xl overflow-hidden md:h-[400px] h-[320px] relative">
              <img src={logo} alt="" className="w-full h-full object-cover" />
              <div className="flex flex-col md:gap-4 gap-2 absolute md:px-3 px-2 md:py-5 py-2 right-0 left-0 bottom-0 text-white bg-[#171717] backdrop-blur-lg bg-opacity-40 ">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="md:text-4xl text-base font-bold">
                    Pertanian Jagung
                  </h1>
                  <Button
                    type="PrimaryButton"
                    text={!openModal ? `Ikuti` : `Berhenti Mengikuti`}
                    className={
                      !openModal
                        ? "bg-darkGray_20 text-primary"
                        : "bg-secondary py-1 px-2"
                    }
                    onClick={() => setOpenModal(!openModal)}
                  />
                </div>
                <span className="md:text-base text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  nobis delectus quam nulla corporis molestias cum numquam, eius
                  consectetur deleniti adipisci necessitatibus.
                </span>
              </div>
            </div>
          </div>
          {/* form */}
          {openModal ? <FormPostingan /> : <></>}
          <div className=" flex flex-col gap-4 py-3 ">
            {/* card  */}
            <CardDiskusi type="detailRuang" />
            <CardDiskusi type="detailRuang" />
          </div>
        </div>
      </ForumDiskusiTemplate>{" "}
    </TemplateLogin>
  );
};

export default ForumDiskusiDetailRuang;
