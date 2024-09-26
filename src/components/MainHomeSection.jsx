import React from "react";
import Preview from "@/assets/home-section1.png";
import PreviewDesktop from "@/assets/home-section-desktop.png";
import Arrow from "@/assets/icons/arrowButton.svg";
import LandingPageRightImg from "./LandingPageRightImg";

export default function MainHomeSection() {
  return (
    <LandingPageRightImg
      title="Elevate Your Messaging Efficiency with Our Innovative Admin Tools"
      messages="Selamat datang di Fowardit! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar
            melalui fitur otomatis, sehingga Anda dapat lebih fokus pada
            interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan
            informasi dengan manajemen konten dan kontak yang praktis."
      DesktopIMG={PreviewDesktop}
      MobileIMG={Preview}
    >
      <div className="flex text-white rounded-md">
        <button className="font-medium bg-black py-3 px-8 rounded-s-md">
          Daftar Sekarang
        </button>
        <div className="bg-black flex justify-center items-center w-10 rounded-e-md">
          <img src={Arrow} />
        </div>
      </div>
    </LandingPageRightImg>
  );
}
