import React from "react";
import gambarcontact from "../../assets/contact_us.png";
import bgLogo from "../../assets/logo/bg-logo.svg";

const ContactUs = () => {
  return (
    <div className="flex  justify-evenly mt-32 mb-36 ">
      {/* Form */}
      <div className="max-w-lg z-10 md:w-1/2 p-8">
        <h1 className="text-4xl p-2 font-bold mb-1">Hubungi Kami</h1>
        <p className="p-3 mb-4 text-xl">Dengan senang kami akan menjawab pertanyaan dan pesan yang telah dikirim.</p>

        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                Nama Depan
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="First Name" />
            </div>
            <div className="w-1/2 px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                Nama Belakang
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="last_name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Nomor Telepon
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-[#1A3D37]">You agree to our privacy policy</span>
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button className="shadow w-full bg-primary  hover:text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl" type="button">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="max-w-xl md:w-1/2 p-8">
        <img src={gambarcontact} alt="Contact Us" className="max-w-lg  md:max-h-80vh " />
      </div>
      <div className={`h-full w-full z-0 absolute top-28  bg-no-repeat  bg-right-bottom scale-x-[-1]`} style={{ backgroundImage: `URL(${bgLogo})`, backgroundSize: "17%" }}></div>
    </div>
  );
};

export default ContactUs;
