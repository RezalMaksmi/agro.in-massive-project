import React from "react";

const PopupModal = ({ handleSend, handleCancel }) => {
  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-white rounded-lg shadow-lg p-6 max-w-5/12 relative">
        <div className="absolute top-0 right-2 ">
          <button className=" text-gray-800 hover:text-gray-800" onClick={handleCancel}>
            ×
          </button>
        </div>
        <h2 className="text-2xl text-center font-bold mb-4">Apakah anda ingin mengirim pesan?</h2>
        <p className="mb-6 text-center">Kami akan merespon pesan anda secepat mungkin.</p>
        <div className="flex justify-center">
          <button onClick={handleSend} className="bg-primary text-white font-bold py-2 px-6 mx-3 rounded-full">
            Kirim
          </button>
          <button onClick={handleCancel} className="bg-yellow-500 text-black font-bold py-2 px-6 mx-3 rounded-full">
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
