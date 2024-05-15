import React, { useState, useEffect } from "react";
import profileMulyadi from "../../assets/Profile_Mulyadi.png";
import bgProfile from "../../assets/bg_profile.png";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    job: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        name: "Mulyadi",
        email: "mulyadi@example.com",
        job: "Software Engineer",
        phone: "+123 456 7890",
        password: "*********",
      };

      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgProfile})` }}>
      <div className="mt-24 mb-8 p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img className="w-20 h-20 rounded-full mb-4" src={profileMulyadi} alt="Profile" />
            <div className="text-center md:text-left">
              <div className=" border-solid border-1 border-primary">
                <h1 className="text-2xl text-white font-semibold ">Halo {userData.name}</h1>
              </div>
              <p className="text-white text-sm">Selamat datang di akun Anda</p>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6 md:w-2/3">
            <div className="bg-gray-50 px-12 py-4 rounded-lg shadow-inner">
              <h1 className="text-lg font-bold text-black mb-1">Akun Saya</h1>
              <p className="mb-2">Detail Kontak</p>
              <div className="mb-2 bg-slate-200 py-2 rounded-full">
                <label className="block px-4 text-sm font-bold text-[#141414]">Nama:</label>
                <p className="text-[#141414] px-4 ">{userData.name}</p>
              </div>
              <div className="mb-2  bg-slate-200 py-2 rounded-full">
                <label className="block  px-4 text-sm font-bold text-[#141414]">Email:</label>
                <p className="text-gray-900 px-4">{userData.email}</p>
              </div>
              <div className="mb-2  bg-slate-200 py-2 rounded-full">
                <label className="block  px-4 text-sm font-bold text-[#141414]">Pekerjaan:</label>
                <p className="text-gray-900 px-4">{userData.job}</p>
              </div>
              <div className="mb-2  bg-slate-200 py-2 rounded-full">
                <label className="block  px-4 text-sm font-bold text-[#141414]">No Telepon:</label>
                <p className="text-gray-900 px-4">{userData.phone}</p>
              </div>
              <div className="mb-4  bg-slate-200 py-2 rounded-full">
                <label className="block  px-4 text-sm font-bold text-[#141414]">Kata Sandi:</label>
                <p className="text-gray-900 px-4">{userData.password}</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">Edit Profil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
