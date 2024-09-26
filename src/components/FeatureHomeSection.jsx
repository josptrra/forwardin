import React from "react";
import Feature from "@/assets/home-section2.png";
import FeatureDesktop from "@/assets/home-section-desktop2.png";
import LandingPageLeftImg from "./LandingPageLeftImg";

export default function FeatureHomeSection() {
  return (
    <LandingPageLeftImg
      title="React Further With Ease"
      messages="Forwardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak akan pernah semudah ini."
      MobileIMG={Feature}
      DesktopIMG={FeatureDesktop}
    />
  );
}
