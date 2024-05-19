import React from "react";

const ConfirmationModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <button className="absolute top-1 right-3 text-gray-600 hover:text-gray-900 text-xl" onClick={handleClose}>
          x
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Pesan Terkirim!</h2>
        <p className="mb-6 text-center">Terimakasih telah menghubungi kami. Kami akan merespon jawaban Anda secepatnya.</p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
