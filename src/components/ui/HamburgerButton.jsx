import React from "react";

export default function HamburgerButton({ onClick, isOpen }) {
  return (
    <button className="relative group lg:hidden" onClick={onClick}>
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] transform transition-all duration-200">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
          <div
            className={`bg-[#3366FF] h-[4px] w-6 transform transition-all duration-300 origin-left rounded-xl ${
              isOpen ? "rotate-45 translate-y-0" : ""
            }`}
          ></div>
          <div
            className={`bg-[#3366FF] h-[4px] w-6 rounded transform transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`bg-[#3366FF] h-[4px] w-6 transform transition-all duration-300 origin-left rounded-xl ${
              isOpen ? "-rotate-45 -translate-y-0" : ""
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
}
