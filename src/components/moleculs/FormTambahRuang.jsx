import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Searchable from "react-searchable-dropdown";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postSpaceAPIAct } from "../../redux/featch/Spaces";

const FormTambahRuang = (props) => {
  const { onClick } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //localhost:4000/spaces

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Data tidak boleh kosong!", {
        position: "bottom-right",
      });
      return;
    }
    dispatch(postSpaceAPIAct({ title, description }));

    navigate("/diskusi/ruang");
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-100% bg-[#1414149c] flex justify-center items-center z-50 ">
      <div className="px-10 py-8 rounded-3xl bg-white relative max-w-[700px] w-full flex flex-col gap-5 ">
        <button
          className="absolute top-3 right-3 p-2 bg-[#dfdfdf] hover:bg-[#cecece]  rounded-full"
          onClick={onClick}
        >
          <CgClose />
        </button>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mx-auto">Form Tambah Ruang</h1>
          <h1 className="text-xl mx-auto">
            Bagikan minat Pengalaman dan Selenggarakan diskusi diruangmu
          </h1>
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="font-bold">Nama Ruang</span>
          <input
            type="text"
            placeholder="Nama Ruang"
            className="border-2 border-dark_10 px-3 py-3 rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="font-bold">Deskripsi Ruang</span>
          <span>
            Sertakan beberapa kata kunci yang menggambarkan topik dalam ruang
            agar pengguna lain dapat bergabung
          </span>
          <input
            type="text"
            placeholder="Nama Ruang"
            className="border-2 border-dark_10 px-3 py-3 rounded-lg"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="text-end">
          <Button
            // onClick={() => navigate("")}
            type="PrimaryButton"
            text="Buat"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default FormTambahRuang;
