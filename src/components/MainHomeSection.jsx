import React from "react";
import Preview from "@/assets/home-section1.png";
import PreviewDesktop from "@/assets/home-section-desktop.png";
import Arrow from "@/assets/icons/arrowButton.svg";

export default function MainHomeSection() {
  return (
    <div className="my-10">
      <img src={Preview} className="lg:hidden" />
      <div className="home-container">
        <div className="max-w-[25rem]">
          <h1 className="text-[24px] leading-7 xl:text-[32px] xl:leading-9 font-bold">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="global-paragraph">
            Selamat datang di Fowardit! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar
            melalui fitur otomatis, sehingga Anda dapat lebih fokus pada
            interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan
            informasi dengan manajemen konten dan kontak yang praktis.
          </p>
          <div className="flex text-white rounded-md">
            <button className="font-medium bg-black py-3 px-8 rounded-s-md">
              Daftar Sekarang
            </button>
            <div className="bg-black flex justify-center items-center w-10 rounded-e-md">
              <img src={Arrow} />
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden xl:flex">
          <img src={PreviewDesktop} />
        </div>
      </div>
    </div>
  );
}
