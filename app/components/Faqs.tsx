import React from "react";
import FaqsCols from "./FaqsCols";
import Image from "next/image";
import man_thinking from "../../public/images/cwok_casual_21 1.png";
import { faqs } from "../../libs/faqs";

function Faqs() {
  console.log(faqs);
  return (
    <div className="wrapper">
      <section className="compulsory_flex_row">
        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Frequently Ask</span>
            <span className="block text-[--secondary-color]">Question</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon&nbsp;1.0
          </p>
          <div>
            {faqs.map((faq) => {
              return (
                <FaqsCols
                  key={faq.id}
                  question={faq.question}
                  id={faq.id}
                  answer={faq.answer}
                />
              );
            })}
          </div>
        </div>
        <div className="my-6   pt-20  ">
          <Image
            src={man_thinking}
            className="lg:w-96 mx-auto block"
            alt="man thinking"
          />
        </div>
      </section>
    </div>
  );
}

export default Faqs;
