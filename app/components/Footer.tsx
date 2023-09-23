import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import instagram from "../../public/images/Vector (5).png";
import x_app from "../../public/images/Vector (2).png";
import facebook from "../../public/images/Vector (3).png";
import linkedin from "../../public/images/ri_linkedin-fill.png";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div>
        <h1
          className="text-xl my-8"
          style={{ fontFamily: "__clashdisplay_10f617" }}
        >
          <span>get</span>
          <span className="text-[--secondary-color]">linked</span>
        </h1>
        <p className="mb-5">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
        <p>
          <span>Terms of Use</span>{" "}
          <span className="text-[--secondary-color]  font-bold text-lg">|</span>{" "}
          <span>Privacy Policy</span>
        </p>
      </div>

      <div>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="">Overview</a>
          </li>
          <li>
            <a href="">Timeline</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Register</a>
          </li>
        </ul>
        <aside className="flex">
          <h3>Follow us</h3>
          <div className="flex gap-5">
            <Image
              className=" block w-full h-23"
              src={instagram}
              alt="instagram"
            />
            <Image className="block w-full h-4" src={x_app} alt="instagram" />
            <Image className="block w-full" src={facebook} alt="instagram" />
            <Image className="block w-full" src={linkedin} alt="linkedin" />
          </div>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
