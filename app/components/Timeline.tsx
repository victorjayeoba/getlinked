import React from "react";
import TimelinesCol from "./TimelinesCol";
import { timeline } from "@/libs/timline";

function Timeline() {
  return (
    <section>
      <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>Timeline</h2>
      <p>
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <TimelinesCol />
    </section>
  );
}

export default Timeline;
