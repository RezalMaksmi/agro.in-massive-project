import React from "react";

const Modal = ({ showModal, onClose, children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
