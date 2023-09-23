import React from "react";
import Image from "next/image";
import idea from "../../public/images/The big idea.png";
import arrow from "../../public/images/arrow.png";
function Overview01() {
  return (
    <section>
      <div className="py-4">
        <Image src={idea} alt="idea" />
        <Image className="mx-auto" src={arrow} alt="arrow" />
      </div>

      <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
        <span>Introduction to getlinked</span>

        <span className="block text-[--secondary-color]">
          tech Hackathon 1.00
        </span>
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

export default Overview01;
