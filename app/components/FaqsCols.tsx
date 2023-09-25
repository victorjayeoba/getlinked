"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
/* import Image from "next/image";
import plus from "../../public/images/_.png"; */

function FaqsCols(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function OpenClose() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <aside className="border-b-[1px] p-0 border-b-[--secondary-color] py-3">
      <div onClick={OpenClose} className="text-start ">
        <div className="flex items-center justify-between text-start">
          <p className="leading-6 ">{props.question}</p>
          <div onClick={() => OpenClose()} className=" cursor-pointer ">
            {<FaPlus />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima
          porro vero.
        </div>
      )}
    </aside>
  );
}

export default FaqsCols;
