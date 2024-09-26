import React from "react";

export default function LandingPageRightImg({
  title,
  messages,
  children,
  DesktopIMG,
  MobileIMG,
}) {
  return (
    <div className="my-10">
      <img src={MobileIMG} className="lg:hidden" />
      <div className="home-container">
        <div className="max-w-[25rem]">
          <h1 className="text-[24px] leading-7 xl:text-[32px] xl:leading-9 font-bold">
            {title}
          </h1>
          <p className="global-paragraph">{messages}</p>
          {children}
        </div>
        <div className="w-1/2 hidden xl:flex">
          <img src={DesktopIMG} />
        </div>
      </div>
    </div>
  );
}
