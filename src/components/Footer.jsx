import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] bg-[#222f3e]">
      <div className="w-full h-10 bg-blue-gray-500 text-center">
        <a href="/" className="text-white text-3xl">
          Top
        </a>
      </div>
      <div className=" py-16  flex justify-center gap-x-28 px-6 pt-14">
        <div className="flex flex-col text-white">
          <h2 className="text-lg">Get To know Us</h2>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Press Release</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-lg">Connect Us</h2>
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-lg">Get To know Us</h2>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Press Release</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border border-gray-500"></div>
      <div className="flex justify-center items-center">
        <img
          src="https://logo.com/image-cdn/images/kts928pd/production/de7880973c80a1ac3296a4f2b6785c31aa7813bb-500x375.webp?w=1080&q=72"
          alt="brand logo"
          className="w-[100px] bg-blue-600 "
        />
      </div>
      <div className="flex justify-center items-center text-sm text-white py-4 gap-4">
        <a href="">Hindi</a>
        <a href="">English</a>
        <a href="">Portuguese</a>
        <a href="">Spanish</a>
      </div>
      <div className="w-full border border-gray-500"></div>
      <div className="flex flex-col md-flex-row text-sm items-center justify-center text-white pt-4 gap-4">
        <a href="">Conditions of Use & Sale</a>
        <a href="">Privacy Notice</a>
        <a href="">Interest-Based Ads</a>
        <a href="">© 1996-2024, Amazon.com, Inc. or its affiliates</a>
      </div>
    </div>
  );
};

export default Footer;
