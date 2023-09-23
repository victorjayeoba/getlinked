import React from "react";
import menuBar from "../../public/images/Vector (1).png";
import times from "../../public/images/Vector.png";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="pt-7 px-12 py-4 border-b-[1px] fixed_nav  border-b-gray-500 lg:py-3 lg:px-28  ">
      <div className="flex justify-between">
        <h1 className="text-sm" style={{ fontFamily: "__clashdisplay_10f617" }}>
          <span>get</span>
          <span className="text-[--secondary-color]">linked</span>
        </h1>

        <div className="lg:hidden">
          <Image src={menuBar} alt="menuBar" />
        </div>
        <div className="hidden">
          <div className="lg:hidden">
            <FaTimes />
          </div>

          <div>
            <ul>
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
            <div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
