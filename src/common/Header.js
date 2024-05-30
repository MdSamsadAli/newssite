import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { MdOutlineSearch } from "react-icons/md";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navOpen = () => {
    setToggleNav(!toggleNav);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <>
      <div className="header border-b py-6">
        <div className="w-10/12 m-auto">
          <div className="sm:flex items-center justify-between">
            <div className="relative">
              <input
                type="text"
                placeholder="search..."
                className="w-full border px-8 py-1 rounded-3xl focus:outline-none"
              />
              <span className="absolute top-1/2 -translate-y-1/2 left-3">
                <MdOutlineSearch className="text-gray-400" />
              </span>
            </div>
            <div className="uppercase text-2xl font-semibold">
              <h1>MegaDesign</h1>
            </div>
            <div className="flex gap-4">
              <BiLogoTwitter />
              <BiLogoFacebook />
              <BiLogoLinkedin />
            </div>

            <div className="text-4xl hamburger" onClick={navOpen}>
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-10 fixed w-1/5 bg-white right-0 top-0 h-full transform ${
          toggleNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out shadow-lg w-fullscreen768`}
      >
        <div className="bg-white">
          <div className="absolute right-0 p-4" onClick={navOpen}>
            <FaTimes />
          </div>
          <ul className="p-4 mt-2">
            {navbar.map((val, index) => (
              <li className="my-2" key={index}>
                {val.cat ? (
                  <>
                    <div className="flex justify-between items-center hover:text-red-500">
                      <Link>{val.nav}</Link>
                      <button onClick={() => toggleDropdown(index)}>
                        {dropdownOpen === index ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        )}
                      </button>
                    </div>
                    <div
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                        dropdownOpen === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4">
                        {val.cat.map((subVal) => (
                          <li
                            key={subVal.id}
                            className="my-1 hover:text-red-500"
                          >
                            <Link to={subVal.path}>{subVal.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link to={val.path} className="hover:text-red-500">
                    {val.nav}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
