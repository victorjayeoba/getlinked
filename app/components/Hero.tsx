import React from "react";
import bulb from "../../public/images/Creative 1.png";
import blast from "../../public/images/1f4a5 (1).png";
import chain from "../../public/images/chain-9365116-7621444 (1).png";
import counter from "../../public/images/Countdown time.png";
import metrix from "../../public/images/metrix 1.png";
import man from "../../public/images/man-wearing-smart-glasses-touching-virtual-screen 1 (4).png";
import man_touch from "../../public/images/Image 1.png";
import Image from "next/image";
function Hero() {
  return (
    <main className="pt-8 pr-0 lg:pt-10">
      <h2 className="italic text-center font-semibold mb-10  txt_stroke lg:text-right lg:mb-0">
        Igniting a Revolution in{" "}
        <div className="inline-block relative">
          <span>HR Innovation</span>{" "}
          <div className="animated_line">
            <svg
              width="100%"
              height="11"
              viewBox="0 0 117 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
                stroke="#FF26B9"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </h2>

      <aside className="lg:flex lg:mx-auto lg:pl-24 relative lg:items-start lg:gap-4  lg:justify-center">
        <div className="lg:py-10 ">
          <div>
            <div className=" lg:flex flex-1 lg:flex-col lg:gap-16 lg:pt-4 my-3">
              <h1
                className="inline text-4xl lg:text-5xl"
                style={{ fontFamily: "__clashdisplay_10f617" }}
              >
                <span>getlinked Tech</span> <br />
                <span className="inline-flex">
                  <span>Hackathon</span>
                  <span className="text-[--secondary-color]">1.0</span>
                  <div className="inline-flex lg:-mt-3">
                    <Image
                      className="w-full .image inline-block"
                      src={chain}
                      alt={"chain"}
                    />
                    <Image
                      className="w-full h-full  inline-block"
                      src={blast}
                      alt={"chain"}
                    />
                  </div>
                </span>
              </h1>
              {/*  <Image className=" inline-block" src={bulb} alt={"chain"} /> */}
            </div>
            <div>
              <p className=" font-extralight  leading-6">
                <span>Participate in getlinked tech Hackathon </span>
                <br />
                <span>2023 stand a chance to win a Big prize</span>
              </p>
            </div>
            <div className=" my-5 lg:mt-8">
              <button className="p_gradient py-3 px-14 rounded-md  ">
                Register
              </button>
            </div>
          </div>
          <div className="lg:mt-12">
            <Image
              className="mx-auto inline-block "
              src={counter}
              alt="counter"
            />
          </div>
        </div>
        <div className=" flex-1  flex justify-end  items-end  ">
          <div className="relative pt-3 w-full  lg:p-0  ">
            <Image
              src={man}
              alt="counter"
              className="w-full mx-auto inline-block   object-contain"
            />
            <Image
              className="absolute_hero_image"
              src={man_touch}
              alt="counter"
            />
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Hero;
