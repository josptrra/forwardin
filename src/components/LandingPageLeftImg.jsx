import React from "react";

export default function LandingPageLeftImg({
  MobileIMG,
  DesktopIMG,
  title,
  messages,
}) {
  return (
    <div className="py-16">
      <img src={MobileIMG} className="lg:hidden" />
      <div className="home-container">
        <div className="w-1/2 hidden xl:flex">
          <img src={DesktopIMG} />
        </div>
        <div className="max-w-[25rem]">
          <h1 className="global-title text-[34px] leading-10">{title}</h1>
          <p className="global-paragraph">{messages}</p>
        </div>
      </div>
    </div>
  );
}
