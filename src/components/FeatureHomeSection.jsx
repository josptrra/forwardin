import React from "react";
import Feature from "@/assets/home-section2.png";
import FeatureDesktop from "@/assets/home-section-desktop2.png";

export default function FeatureHomeSection() {
  return (
    <div className="py-16">
      <img src={Feature} className="lg:hidden" />
      <div className="home-container">
        <div className="w-1/2 hidden xl:flex">
          <img src={FeatureDesktop} />
        </div>
        <div className="max-w-[25rem]">
          <h1 className="global-title text-[34px] leading-10">
            React Further With Ease
          </h1>
          <p className="global-paragraph">
            Forwardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak akan pernah semudah ini.
          </p>
        </div>
      </div>
    </div>
  );
}
