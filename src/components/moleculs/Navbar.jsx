import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoText from "../../assets/logo/logo_navbar.svg";
import Button from "../atoms/Button";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState("");
  const [openProfil, setOpenProfil] = useState(false);
  const dispatch = useDispatch();

  const { pathname } = location;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleClick = (e) => {
    const value = e.target.href.toLowerCase();
    setHover(value);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  // const getUserDataFromLocalStorage = () => {
  //   const user = localStorage.getItem("token");
  //   return user ? JSON.parse(user) : {};
  // };

  // const { token } = getUserDataFromLocalStorage();
  const { token } = useSelector((state) => state.auth);

  const userData = localStorage.getItem("user");
  const userCheck = userData ? JSON.parse(userData) : null;
  const user = userCheck ? userCheck : "";

  const firstLetter = user ? user.username.split(" ")[0] : "";
  return token ? (
    <div className="w-full md:px-10 px-3 fixed top-7 z-50 ">
      <div className="w-full h-[70px] text-[#1A3D37] bg-[#E8ECEB] shadow-lg relative rounded-full flex justify-between px-6 items-center">
        <div className="-mr-2 flex md:hidden z-10">
          <button
            onClick={toggleNavbar}
            type="button"
            className="bg-darkGray_20 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-[#abb9b6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark_10 focus:ring-white "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="md:w-max flex justify-center items-center md:relative absolute text-center left-0 right-0 z-0">
          <img src={logoText} alt="" className="text-center " />
        </div>
        <div className={`md:block ${isOpen ? `block` : `hidden`}`}>
          <ul className="flex p-0 px-5 md:py-2 py-3 md:flex-row flex-col md:relative absolute md:top-0 md:left-0 md:right-0 top-20 left-0 md:bg-transparent bg-[#eaeaea] rounded-lg w-full md:gap-10 gap-5 font-semibold">
            <li>
              <Link to={"/"} className={``}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={``}>
                Tentang Kami
              </Link>
            </li>
            <li
              className="relative dropdown flex md:justify-center justify-start "
              ref={dropdownRef}
            >
              <div
                onClick={toggleDropdown}
                className={`cursor-pointer flex flex-row justify-center items-center gap-2`}
              >
                Layanan{" "}
                {!openDropdown ? (
                  <BsFillCaretDownFill />
                ) : (
                  <BsFillCaretUpFill />
                )}
              </div>

              <div
                className={`${
                  openDropdown ? "h-[140px] " : "h-0 opacity-0"
                } absolute bg-white z-20 top-14 w-max overflow-hidden p-2 rounded-lg shadow-lg transform transition-all duration-300`}
              >
                <ul>
                  <li className="px-8 py-2 hover:bg-darkGray_10 text-start rounded-md cursor-pointer">
                    <Link to={"/harga-pangan"}>Harga Pangan</Link>
                  </li>
                  <li className="px-8 py-2 hover:bg-darkGray_10 text-start rounded-md cursor-pointer">
                    <Link to={"/analisis"}>Analisis Cuaca & Tanah</Link>
                  </li>
                  <li className="px-8 py-2 hover:bg-darkGray_10 text-start rounded-md cursor-pointer">
                    <Link to={"/diskusi"}>Forum Diskusi</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to={"/artikel"} className={``}>
                Artikel
              </Link>
            </li>
          </ul>
        </div>

        <div className=" relative " onClick={() => setOpenProfil(!openProfil)}>
          <div
            className={`bg-white  md:p-1 p-0 md:pl-4  pl-0  flex flex-row md:gap-4 gap-2 rounded-full justify-center items-center z-10 relative transform transition-all duration-300`}
          >
            {!openProfil ? (
              <BsFillCaretDownFill className="text-dark_20 md:flex hidden" />
            ) : (
              <BsFillCaretUpFill className="text-dark_20 md:flex hidden" />
            )}
            <img
              src={`
               ${
                 (user.img != null) & (user.img !== "")
                   ? `${process.env.API_URL}/assets/images/${user.img}`
                   : "https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
               }`}
              alt=""
              className="md:w-8 md:h-8 w-10 h-10 m-1 rounded-full overflow-hidden bg-slate-700 object-cover"
            />
          </div>

          <div
            className={`${
              openProfil ? "h-[170px] w-[200px]" : "h-0 w-0 right-3 top-1"
            }  bg-white rounded-[24px] absolute shadow-lg right-0 top-0 transform transition-all duration-300 overflow-hidden flex flex-col px-2 py-2 justify-start`}
          >
            <span className="p-2 font-semibold">
              {firstLetter ? firstLetter : ""}
              {/* {user ? user.name : ""} */}
            </span>
            <Link
              to={"/profil"}
              className="hover:bg-netral_20 px-2 rounded-md py-2"
            >
              Lihat Profil
            </Link>
            <div
              onClick={handleLogout}
              className="hover:bg-netral_20 px-2 rounded-md py-2 cursor-pointer"
            >
              Keluar
            </div>
            <span className="mx-auto mt-2">
              <img src={logoText} alt="" className="w-16" />
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full md:px-10 px-3 fixed top-7 z-50">
      <div className="w-full h-[70px] text-[#1A3D37] bg-[#E8ECEB] relative rounded-full flex justify-between px-6 items-center">
        <img src={logoText} alt="" />
        <div className={`md:block ${isOpen ? `block` : `hidden`}`}>
          <ul className="flex p-0 px-5 md:py-2 py-3 md:flex-row flex-col md:relative absolute md:top-0 md:left-0 md:right-0 top-20 left-0 md:bg-transparent bg-[#eaeaea] rounded-lg w-full md:gap-10 gap-5 font-semibold">
            <li>
              <a href={"#home"} className={pathname === "/" ? "" : ""}>
                Home
              </a>
            </li>
            <li>
              <a
                href={"#tentang"}
                className={pathname === "#tentang" ? "" : ""}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href={"#layanan"}
                className={pathname === "#layanan" ? "" : ""}
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href={"#artikel"}
                className={pathname === "#artikel" ? "" : ""}
              >
                Artikel
              </a>
            </li>
            <Button
              type="PrimaryButton"
              className="md:hidden flex bg-secondary"
              text="Login"
              onClick={() => navigate("/login")}
            />
          </ul>
        </div>
        <Button
          type="PrimaryButton"
          className="md:flex hidden bg-secondary"
          text="Login"
          onClick={() => navigate("/login")}
        />
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="bg-darkGray_20 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-[#abb9b6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark_10 focus:ring-white "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    // border-solid border-b-[3px] border-[#FAB737]
  );
};

export default Navbar;
