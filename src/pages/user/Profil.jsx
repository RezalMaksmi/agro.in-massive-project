import React, { useState, useEffect, useRef } from "react";
import profileMulyadi from "../../assets/Profile_Mulyadi.png";
import bgProfile from "../../assets/bg_profile.png";
import Modal from "../../components/atoms/modal_edit_profile";
import { ConfirmModalProfile } from "../../components/atoms";
import TemplateLogin from "../../template/TemplateLogin";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateProfilAPIAct } from "../../redux/featch/Profil";
import axiosInstance from "../../api/axiosInstance";

const Profil = () => {
  const [viewImage, setViewImage] = useState();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setViewImage(reader.result); // This will store the base64 representation of the image
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const dispatch = useDispatch();
  const userData = localStorage.getItem("user");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck ? userCheck : "";

  const [username, setUsername] = useState(user ? user.username : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [job, setJob] = useState(user ? user.job : "");
  const [img, setImg] = useState(user ? user.img : "");
  const [phone_number, setPhoneNumber] = useState(
    user ? user.phone_number : ""
  );

  const navigate = useNavigate();

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const [selectedFile, setSelectedFile] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    setImg(selectedFile.name);

    try {
      const response = await axiosInstance.post(
        `${process.env.API_URL}/utils/image-upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("Upload successful");
      const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        job: user.job,
        phone_number: user.phone_number,
        img: img ? img : user.img,
      };

      const dataUpdate = {
        username: username ? username : user.name,
        email,
        job: job ? job : user.job,
        phone_number: phone_number ? phone_number : user.phone_number,
        img: img ? img : user.img,
      };
      dispatch(updateProfilAPIAct(dataUpdate));
      setShowModal(false);

      localStorage.setItem("user", JSON.stringify(data));

      toast.success(`${response.data.message}`, {
        position: "bottom-right",
      });
    } catch (error) {
      setUploadStatus("Upload failed");
      console.error("Error uploading the image:", error);
    }
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    setImg(selectedFile.name);
  }, [selectedFile]);
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
                className="w-20 h-20 rounded-full mb-4 object-cover"
                src={`
               ${
                 (user.img !== null) & (user.img !== "")
                   ? `${process.env.API_URL}/public/images/${user.img}`
                   : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
               }`}
                alt="Profile"
              />
              <div className="text-center md:text-left">
                <div className="  border-solid border-l-8 border-primary max-sm:border-hidden">
                  <h1 className=" mx-4 text-2xl text-white font-semibold ">
                    Halo {user ? user.username : "aa"} !
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
                    {user ? user.username : ""}
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
                  <p className="text-gray-900 px-4">
                    {user && user.job != null ? user.job : "Belum dilengkapi"}
                  </p>
                </div>
                <div className="mb-2  bg-slate-200 py-2 rounded-full">
                  <label className="block  px-4 text-sm font-bold text-[#141414]">
                    No Telepon:
                  </label>
                  <p className="text-gray-900 px-4">
                    {user && user.phone_number != null
                      ? user.phone_number
                      : "Belum dilengkapi"}
                  </p>
                </div>
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
          <div>
            <div className="flex items-center mb-4">
              {selectedFile && (
                <img
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                  src={
                    viewImage
                      ? viewImage
                      : user & (user.img !== "")
                      ? `${process.env.API_URL}/public/images/${user.img}`
                      : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
                  }
                  alt="Profile"
                />
              )}
              <span
                onClick={handleIconClick}
                className="cursor-pointer bg-[#e2e2e2] text-primary font-bold px-3 py-2 rounded-full"
              >
                Pilih Gambar
              </span>

              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pekerjaan:
              </label>
              <input
                type="text"
                name="job"
                className="mt-1 p-2 rounded-full bg-slate-200 w-full"
                value={job}
                onChange={(e) => setJob(e.target.value)}
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
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {/* <div className="mb-4">
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
            </div> */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
                Simpan
              </button>
            </div>
          </div>
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
