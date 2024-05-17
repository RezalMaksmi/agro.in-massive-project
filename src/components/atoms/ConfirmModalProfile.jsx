// src/components/ConfirmModal.jsx
import React from "react";

const ConfirmModalProfile = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto relative">
        <div className="absolute top-0 right-0 p-2">
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            ×
          </button>
        </div>
        <h2 className="text-2xl text-center font-semibold mb-2">Simpan Perubahan?</h2>
        <p className="mb-6 text-center">Perubahan akan disimpan secara permanen.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 " onClick={onConfirm}>
            Simpan
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 " onClick={onClose}>
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModalProfile;
