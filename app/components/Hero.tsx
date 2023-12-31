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
    <main className=" pt-20 pr-0 ">
      <h2 className="italic text-center font-semibold mb-6  txt_stroke lg:text-right lg:mb-0  lg:mr-24 ">
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

      <aside className="lg:flex lg:mx-auto  relative lg:items-start lg:gap-4  lg:justify-center">
        <div className="lg:pt-6">
          <div>
            <div className=" lg:flex flex-1 lg:flex-col  pt-12">
              <h1
                className="inline  text-4xl lg:text-6xl"
                style={{ fontFamily: "__clashdisplay_10f617" }}
              >
                <span
                  className="relative

                "
                >
                  <span>getlinked Tech</span>
                  <Image
                    className=" inline-block absolute_bulb max-lg:w-8"
                    src={bulb}
                    alt="counter"
                  />
                </span>{" "}
                <br />
                <span className="inline-flex gap-2">
                  <span>Hackathon </span>
                  <span className="text-[--secondary-color]"> 1.0</span>
                  <div className="inline-flex items-center lg:-mt-3">
                    <Image
                      className="w-8 lg:w-[4rem] aspect-square  inline-block"
                      src={chain}
                      alt={"chain"}
                    />
                    <Image
                      className="w-8 h-full lg:w-[3.5rem] lg:h-[3.5rem]  inline-block "
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
                <br className="lg:hidden" />
                <span>
                  2023 stand <br className=" max-lg:hidden " /> a chance to win
                  a Big prize
                </span>
              </p>
            </div>
            <div className=" my-5 lg:mt-8">
              <button className="p_gradient py-3 px-14 rounded-md  ">
                Register
              </button>
            </div>
          </div>
          <div className="lg:mt-8">
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
