import React from "react";
import Facebook from "../assets/facebook.png";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="my-8">
      <div className="flex justify-center gap-4">
        <div className="w-[20px] h-[20px]">
          <img src={Facebook} alt="fbimg" className="w-full h-full" />
        </div>
        <div className="w-[20px] h-[20px]">
          <img src={Instagram} alt="Inimg" className="w-full h-full" />
        </div>
        <div className="w-[20px] h-[20px]">
          <img src={Twitter} alt="Twimg" className="w-full h-full" />
        </div>
        <div className="w-[20px] h-[20px]">
          <img src={Youtube} alt="Yoimg" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center gap-4 my-4">
        <a href="/">Conditions of Use</a>
        <a href="/">Privacy & Policy</a>
        <a href="/">Press Room</a>
      </div>
      <p className="text-center">© 2023 MovieBox by Chux </p>
    </div>
  );
};

export default Footer;
