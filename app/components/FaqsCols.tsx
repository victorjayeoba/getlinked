import React from "react";
import { FaPlus } from "react-icons/fa";
/* import Image from "next/image";
import plus from "../../public/images/_.png"; */
function FaqsCols(props: Props) {
  return (
    <aside className="border-b-[1px]  border-b-[--secondary-color] py-3">
      <div className="text-start">
        <div className="flex items-center justify-between text-start">
          <p className="leading-6 ">{props.question}</p>
          <div className="pointer">{<FaPlus />}</div>
        </div>
      </div>
      <div className="text-start h-0 overflow-hidden">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima
        porro vero.
      </div>
    </aside>
  );
}

export default FaqsCols;
