import React from "react";
import Image from "next/image";
import partner from "../../public/images/Partner and sponsors section.png";
function PartnersSponser() {
  return (
    <section>
      <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
        Partners and Sponsors
      </h2>

      <p className="my-5">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div>
        <Image src={partner} alt="partner" />
      </div>
    </section>
  );
}

export default PartnersSponser;
