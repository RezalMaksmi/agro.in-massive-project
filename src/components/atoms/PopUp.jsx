import React from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";

const PopUp = (props) => {
  const { onClick, type, submit, cancel } = props;
  const navigate = useNavigate();
  switch (type) {
    case "berhentiIkuti":
      return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-100% bg-[#1414149c] flex justify-center items-center z-50 px-2">
          <div className="px-10 py-8 rounded-3xl bg-white relative max-w-[700px] w-full flex flex-col gap-5 ">
            <button
              className="absolute top-3 right-3 p-2 bg-[#dfdfdf] hover:bg-[#cecece]  rounded-full"
              onClick={cancel}
            >
              <CgClose />
            </button>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-2xl font-bold mx-auto">Berhenti Ikuti</h1>
              <h1 className="text-base mx-auto">
                Yakin ingin berhenti mengikuti ruang ini?{" "}
              </h1>
            </div>

            <div className="flex flex-row gap-3 mx-auto">
              <Button
                onClick={submit}
                type="PrimaryButton"
                text="Lanjutkan"
                className="bg-primary text-white hover:bg-[#16332e]"
              />
              <Button
                onClick={cancel}
                type="PrimaryButton"
                text="Batalkan"
                className="bg-secondary hover:bg-[#c7912d]"
              />
            </div>
          </div>
        </div>
      );

    case "hapusRuang":
      return (
        <div className="fixed top-0 bottom-0 left-0 right-0 h-100% bg-[#1414149c] flex justify-center items-center z-50 px-2">
          <div className="px-10 py-8 rounded-3xl bg-white relative max-w-[700px] w-full flex flex-col gap-5 ">
            <button
              className="absolute top-3 right-3 p-2 bg-[#dfdfdf] hover:bg-[#cecece]  rounded-full"
              onClick={cancel}
            >
              <CgClose />
            </button>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="text-2xl font-bold mx-auto">Hapus Ruang</h1>
              <h1 className="text-base mx-auto">
                Ruang yang terhapus tidak bisa dikembalikan.
              </h1>
            </div>

            <div className="flex flex-row gap-3 mx-auto ">
              <Button
                onClick={submit}
                type="PrimaryButton"
                text="Lanjutkan"
                className="bg-primary text-white hover:bg-[#16332e]"
              />
              <Button
                onClick={cancel}
                type="PrimaryButton"
                text="Batalkan"
                className="bg-secondary hover:bg-[#c7912d]"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default PopUp;
