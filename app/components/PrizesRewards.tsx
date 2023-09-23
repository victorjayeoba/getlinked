import React from "react";
import reward from "../../public/images/9486889 1.png";
import awards from "../../public/images/Rewards.png";
import Image from "next/image";
function PrizesRewards() {
  return (
    <section>
      <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
        <span> Prizes and </span>
        <span className="block text-[--secondary-color]">Rewards</span>
      </h2>
      <p>
        Highlight of the prizes or rewards for winners and for participants.
      </p>
      <div className="  my-12 ">
        <Image src={reward} alt="reward" />
      </div>
      <div className="my-8">
        <Image src={awards} alt="awards" />
      </div>
    </section>
  );
}

export default PrizesRewards;
