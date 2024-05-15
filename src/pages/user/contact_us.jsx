import React from "react";
import gambarcontact from "../../assets/contact_us.png";
import bgLogo from "../../assets/logo/bg-logo.svg";

const ContactUs = () => {
  return (
    <div className="flex  justify-evenly mt-32 mb-36 max-sm:mb-10">
      {/* Form */}
      <div className="max-w-lg z-10 md:w-1/2 p-8 max-sm:py-1 max-sm:my-0 max-sm:bg-slate-300 max-sm:bg-opacity-90 max-sm:rounded-2xl">
        <h1 className="text-4xl p-2 font-bold mb-1 max-sm:py-1 max-sm:my-0">Hubungi Kami</h1>
        <p className="p-3 mb-4 text-xl max-sm:py-1 max-sm:my-0">Dengan senang kami akan menjawab pertanyaan dan pesan yang telah dikirim.</p>

        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6 max-sm:py-0 max-sm:my-0">
            <div className="w-1/2 px-3 mb-6 md:mb-0 max-sm:py-0 max-sm:my-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                Nama Depan
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="first_name" type="text" placeholder="Nama Depan" />
            </div>
            <div className="w-1/2 px-3 max-sm:py-0 max-sm:my-0">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                Nama Belakang
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="last_name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 max-sm:py-0 max-sm:my-0">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 max-sm:py-0 max-sm:my-0">
            <div className="w-full px-3 max-sm:py-0 max-sm:my-0">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Nomor Telepon
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="text" placeholder="Nomor Telepon" />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 max-sm:py-0 max-sm:my-0">
            <div className="w-full px-3 max-sm:py-0 max-sm:my-0">
              <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                id="message"
                placeholder="Pesan"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 max-sm:py-0 max-sm:my-0">
            <div className="w-full px-3 max-sm:py-0 max-sm:my-0">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-[#1A3D37]">You agree to our privacy policy</span>
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full max-sm:p-4">
              <button className="shadow w-full bg-primary  hover:text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-2xl " type="button">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="max-w-xl lg:w-lg md:w-sm p-8 max-sm:absolute max-sm:-top-3 max-sm:left-0 max-sm:p-0 max-sm:w-screen max-sm:overflow max-sm:h-[84%]">
        <img src={gambarcontact} alt="Contact Us" className="max-w-lg lg:max-w-lg md:h-5/6 md:max-w-sm sm:w-screen max-sm:w-full max-sm:h-full" />
      </div>
      <div className={`h-full w-full z-0 absolute lg:top-28  bg-no-repeat  bg-right-bottom scale-x-[-1] md:-top-80 max-sm:hidden`} style={{ backgroundImage: `URL(${bgLogo})`, backgroundSize: "17%" }}></div>
    </div>
  );
};

export default ContactUs;
