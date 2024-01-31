import React from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  let Links = [
    { name: "Account", link: "/" },
    { name: "Orders", link: "/" },
    { name: "Carts", link: "/" },
    { name: "Contacts", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-md z-20 w-full fixed top-0 left-0 flex justify-between bg-[#131921] px-12">
        <div className="md:flex items-center  bg-white overflow-hidden">
          <img
            src="https://logo.com/image-cdn/images/kts928pd/production/de7880973c80a1ac3296a4f2b6785c31aa7813bb-500x375.webp?w=1080&q=72"
            alt="brand logo"
            className="w-[100px] "
          />
        </div>
        <div className="flex justify-center items-center overflow-hidden opacity-0 md:opacity-100">
          <input
            className="opacity-0 md:opacity-100 rounded-l-lg h-[50%] "
            type="text"
            name="search"
          />
          <button className="bg-white text-2xl rounded-r-lg  h-[50%] ">
            <IoIosSearch />
          </button>
        </div>

        <div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <MdClose /> : <FiMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0  pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full h-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-16 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-4 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-red-200 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
