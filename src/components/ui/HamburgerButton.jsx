import React from "react";

export default function HamburgerButton() {
  return (
    <>
      <button class="relative group lg:hidden">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] transform transition-all duration-200">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ">
            <div class="bg-[#3366FF] h-[4px] w-6 transform transition-all duration-300 origin-left group-focus:translate-x-10 rounded-xl"></div>
            <div class="bg-[#3366FF] h-[4px] w-6 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75 rounded-xl"></div>
            <div class="bg-[#3366FF] h-[4px] w-6 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150 rounded-xl"></div>

            <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div class="absolute bg-[#3366FF] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div class="absolute bg-[#3366FF] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
