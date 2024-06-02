import React, { useState, useEffect, useRef } from "react";
import profileMulyadi from "../../assets/Profile_Mulyadi.png";
import bgProfile from "../../assets/bg_profile.png";
import Modal from "../../components/atoms/modal_edit_profile";
import { ConfirmModalProfile } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { useDispatch, useSelector } from "react-redux";
import CustomFileInput from "../../components/atoms/CustomFileInput";
import { postAPIAct } from "../../redux/featch/postData";
import axios from "axios";
import Cookies from "js-cookie";

const Profil = () => {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   job: "",
  //   phone: "",
  //   password: "",
  // });

  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = {
  //       name: "user",
  //       email: "mulyadi@example.com",
  //       job: "Petani",
  //       phone: "+123 456 7890",
  //       password: "*********",
  //     };

  //     setUserData(data);
  //   };

  //   fetchData();
  // }, []);

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const userData = localStorage.getItem("dataUser");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck.auth.user;

  const [selectedFile, setSelectedFile] = useState("null");
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileSelect = (file) => {
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const dispatch = useDispatch();
  const formData = new FormData();
  formData.append("photo", selectedFile);
  const handleFileUpload = async () => {
    // if (!selectedFile) return;

    // const formData = new FormData();
    // formData.append("photo", selectedFile);
    // console.log("apa ini", formData.get("photo"));
    // formData.append("file", selectedFile);

    if (!selectedFile) return;

    try {
      const response = await axios.post(
        "http://localhost:4000/users/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${Cookies.get("token")}`, // Menggunakan token untuk autentikasi
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("Upload berhasil!");
      } else {
        setUploadStatus("Upload gagal.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengupload:", error);
      setUploadStatus("Terjadi kesalahan saat mengupload.");
    }

    // dispatch(
    //   postAPIAct(`http://localhost:4000/users/uploud`, formData.get("photo"))
    // );
  };

  return (
    <TemplateLogin>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgProfile})` }}
      >
        <div className="mt-32 mb-16 p-6 w-full max-w-4xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <img
                className="w-20 h-20 rounded-full mb-4"
                src={`
                  ${
                    user && userCheck.profile_image
                      ? `http://localhost:4000/assets/images/${user.profile_image}`
                      : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                  }`}
                alt="Profile"
              />
              <div className="text-center md:text-left">
                <div className="  border-solid border-l-8 border-primary max-sm:border-hidden">
                  <h1 className=" mx-4 text-2xl text-white font-semibold ">
                    Halo {user ? user.name : "aa"} !
                  </h1>
                </div>
                <p className="text-white text-sm">
                  Selamat datang di akun Anda
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 md:w-2/3">
              <div className="bg-gray-50 px-12 py-4 rounded-lg shadow-inner">
                <h1 className="text-lg font-bold text-black mb-1">Akun Saya</h1>
                <p className="mb-2">Detail Kontak</p>
                <div className="mb-2 bg-slate-200 py-2 rounded-full">
                  <label className="block px-4 text-sm font-bold text-[#141414]">
                    Nama:
                  </label>
                  <p className="text-[#141414] px-4 ">
                    {user ? user.name : ""}
                  </p>
                </div>
                <div className="mb-2  bg-slate-200 py-2 rounded-full">
                  <label className="block  px-4 text-sm font-bold text-[#141414]">
                    Email:
                  </label>
                  <p className="text-gray-900 px-4">{user ? user.email : ""}</p>
                </div>
                <div className="mb-2  bg-slate-200 py-2 rounded-full">
                  <label className="block  px-4 text-sm font-bold text-[#141414]">
                    Pekerjaan:
                  </label>
                  <p className="text-gray-900 px-4">{user ? user.job : ""}</p>
                </div>
                {/* <div className="mb-2  bg-slate-200 py-2 rounded-full">
                  <label className="block  px-4 text-sm font-bold text-[#141414]">
                    No Telepon:
                  </label>
                  <p className="text-gray-900 px-4">
                    {user ? user.no_telp : "lengkapi data"}
                  </p>
                </div> */}
                <div className="mb-4  bg-slate-200 py-2 rounded-full">
                  <label className="block  px-4 text-sm font-bold text-[#141414]">
                    Kata Sandi:
                  </label>
                  <p className="text-gray-900 px-4">{"********"}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    onClick={handleEditProfile}
                  >
                    Edit Profil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal showModal={showModal} onClose={handleCloseModal}>
          <h2 className="text-2xl font-semibold mb-4">Edit Profil</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              {selectedFile && (
                <img
                  className="w-20 h-20 rounded-full mr-4"
                  src={
                    imagePreview
                      ? imagePreview
                      : `http://localhost:4000/assets/images/${user.profile_image}`
                  }
                  alt="Profile"
                />
              )}
              <CustomFileInput onFileSelect={handleFileSelect} />

              {selectedFile && (
                <div>
                  <p>File Terpilih: {selectedFile.name}</p>
                  <button onClick={handleFileUpload}>Upload File</button>
                </div>
              )}
              {uploadStatus && <p>{uploadStatus}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nama:
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={userData.name}
                onChange={""}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={userData.email}
                onChange={""}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                No Telepon:
              </label>
              <input
                type="text"
                name="phone"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={userData.phone}
                onChange={""}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Kata Sandi Baru:
              </label>
              <input
                type="password"
                name="newPassword"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={userData.newPassword || ""}
                onChange={""}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Kata Sandi Baru:
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={userData.confirmNewPassword || ""}
                onChange={""}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
                Simpan
              </button>
            </div>
          </form>
        </Modal>
        <ConfirmModalProfile
          showModal={showConfirmModal}
          onClose={handleCloseConfirmModal}
          onConfirm={""}
        />
      </div>
    </TemplateLogin>
  );
};

export default Profil;
