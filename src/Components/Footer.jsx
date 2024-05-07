import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#061229] text-white pt-10 pb-5 px-10">
        <h1 className="text-center font-bold ">AR.</h1>
        <div className="flex flex-row gap-5 text-sm justify-center pt-5">
          <a
            href="#"
            className="transform hover:scale-125  transition duration-100"
          >
            Home
          </a>
          <a
            href="#"
            className="transform hover:scale-125  transition duration-100"
          >
            About
          </a>
          <a
            href="#"
            className="transform hover:scale-125  transition duration-100"
          >
            Skill
          </a>
          <a
            href="#"
            className="transform hover:scale-125  transition duration-100"
          >
            Project
          </a>
          <a
            href="#"
            className="transform hover:scale-125  transition duration-100"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 text-xl pb-5 justify-center pt-5">
          <a
            href="#"
            className="text-white transform hover:scale-125  transition duration-100"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="text-white transform hover:scale-125  transition duration-100"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="#"
            className="text-white transform hover:scale-125  transition duration-100"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <span className="text-xl bg-white rounded-sm text-black p-2 ">
          <a href="#" className="text-end">
            <i class="fa-solid fa-arrow-up"></i>
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
