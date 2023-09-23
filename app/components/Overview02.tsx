import React from "react";
import Image from "next/image";
import womanSitting from "../../public/images/7450159 1.png";

function Overview02() {
  return (
    <section>
      <Image src={womanSitting} alt="woman sitting down" />

      <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
        <span> Rules and</span>

        <span className="block text-[--secondary-color]">Guidelines</span>
      </h2>
      <p>
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        as clear as day: to shape the future. Whether you're a coding genius, a
        design maverick, or a concept wizard, you'll have the chance to
        transform your ideas into reality. Solving real-world problems, pushing
        the boundaries of technology, and creating solutions that can change the
        world, that's what we're all about!
      </p>
    </section>
  );
}

export default Overview02;
