import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-center my-32">
        <div className="flex justify-center gap-4">
          <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-xl">
            <FaFacebook />
          </div>
          <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-xl">
            <FaInstagram />
          </div>
          <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-xl">
            <FaLinkedin />
          </div>
          <div className="border p-4 rounded-2xl bg-gray-300 hover:scale-110 transition-all hover:bg-yellow-600 hover:text-white hover:shadow-xl">
            <FaTwitter />
          </div>
        </div>

        <div>
          <p className="mt-4 text-xl">
            Copyright &copy; 2024 All rights reserved. Made By{" "}
            <Link
              className="font-bold text-green-950 hover:text-yellow-600"
              to={"https://www.youtube.com/@shamskhus5063"}
              target="_blank"
            >
              Shamskhus
            </Link>
            <div className="mt-4">
              <Link className="hover:text-yellow-600">Terms & Condition</Link>
              {" / "}
              <Link className="hover:text-yellow-600">Privacy & Policy</Link>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
