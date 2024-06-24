import React, { useRef } from "react";

const CustomFileInput = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
    console.log("pppppppppppppp", file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="custom-file-input">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-primary text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        Pilih File
      </button>
    </div>
  );
};

export default CustomFileInput;
