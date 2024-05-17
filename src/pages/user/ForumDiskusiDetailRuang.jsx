import React from "react";
import ForumDiskusiTemplate from "../../template/ForumDiskusiTemplate";
import logo from "../../assets/bg_detail-ruang.jpg";
import { Button, CardDiskusi } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";

const ForumDiskusiDetailRuang = () => {
  return (
    <TemplateLogin>
      <ForumDiskusiTemplate>
        <div className="flex flex-col gap-5 pb-3">
          <div className="border-[#ececec] shadow-md rounded-2xl bg-white border ">
            <div className="border-[#ececec] shadow-md rounded-2xl overflow-hidden h-[400px] relative">
              <img src={logo} alt="" className="w-full object-cover" />
              <div className="flex flex-col gap-4 absolute px-3 py-5 right-0 left-0 bottom-0 text-white bg-[#171717] backdrop-blur-lg bg-opacity-40 ">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="text-4xl font-bold">Pertanian Jagung</h1>
                  <Button type="PrimaryButton" text="Ikuti" />
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  nobis delectus quam nulla corporis molestias cum numquam, eius
                  consectetur deleniti adipisci necessitatibus est deserunt
                  pariatur quas itaque? Aperiam, error aliquam.
                </span>
              </div>
            </div>
          </div>

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
