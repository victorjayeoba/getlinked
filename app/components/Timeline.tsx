import React from "react";
import TimelinesCol from "./TimelinesCol";
import { timeline } from "@/libs/timline";

function Timeline() {
  return (
    <div className="wrapper">
      <section className="block lg:text-center">
        <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>Timeline</h2>
        <p className="mb-8">
          <span>Here is the breakdown of the time we anticipate</span>{" "}
          <br className="max-lg:hidden" />
          <span> using for the upcoming</span>
          event.
        </p>
        <TimelinesCol />
      </section>
    </div>
  );
}

export default Timeline;
