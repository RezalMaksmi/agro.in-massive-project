import React from "react";

const ForumDiskusi = () => {
  return (
    <div className="h-[120vh]  bg-cover pt-32">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-slate-600">
            <div className="flex flex-col gap-2">
              <div className="">Beranda</div>
              <div className="">Beranda</div>
              <div className="">Beranda</div>
              <div className="">Beranda</div>
            </div>
          </div>
          <div className=" col-span-3">
            <div className="rounded-xl bg-primary flex flex-col gap-5 py-6 px-4">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://assets.dataindonesia.id/1693791366434_99_Muhaimin.png"
                  alt=""
                  className="w-10 h-10 bg-pink-600 rounded-full object-cover "
                />
                <div className="flex flex-col  text-white">
                  <h1 className="text-xl font-bold">Mulyadi</h1>
                  <span className="text-base">
                    Petani - Jawa Tengah, Indonesia
                  </span>
                </div>
              </div>
              {/* pertanyaan */}
              <div className="w-full border-2 border-dark_10 rounded-full p-1 grid grid-cols-2">
                <span className="bg-secondary rounded-full py-3 text-center font-semibold text-primary text-lg">
                  Pertanyaan
                </span>
                <span className="rounded-full py-3 text-center font-semibold text-white text-lg rounded-lg">
                  Buat Informasi
                </span>
              </div>
              {/* form */}
              <textarea
                name=""
                id=""
                className="w-full h-[80px] bg-white rounded-xl p-3"
                placeholder="Apa yang ingin anda tanyakan"
              ></textarea>
              <div className="text-end">
                <button className="bg-secondary rounded-full py-2 px-5 w-max ">
                  Kirim
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 col-span-2">1</div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiskusi;
