import React, { useState, useRef, useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const EcoSelect = () => {
  const [selectedImage, setSelectedImage] = useState("/logos/optimism.svg");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { setEcosystem } = useContext(EcoSystemContext);

  const handleChange = (image, ecosystemName) => {
    setSelectedImage(image);
    setEcosystem(ecosystemName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="h-[48px] rounded-[10px] bg-white focus:outline-none"
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="w-[188px] h-[20px]"
        />
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="flex flex-col gap-[12px] absolute w-[188px] border p-[12px] rounded-[10px] bg-white mt-[12px] shadow-lg"
        >
          <li className="cursor-pointer">
            <button
              onClick={() => handleChange("/logos/optimism.svg", "optimism")}
            >
              <img
                src="/logos/optimism.svg"
                alt="Option 1"
                className="w-[188px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/base.svg", "base")}>
              <img
                src="/logos/base.svg"
                alt="Option 2"
                className="w-[188px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/zora.svg", "zora")}>
              <img
                src="/logos/zora.svg"
                alt="Option 3"
                className="w-[188px] h-[48px]"
              />
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => handleChange("/logos/mode.svg", "mode")}>
              <img
                src="/logos/mode.svg"
                alt="Option 4"
                className="w-[188px] h-[48px]"
              />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EcoSelect;