"use client";
import React from "react";
import { Chrono } from "react-chrono";
import { FaLightbulb, FaWalking } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";
import { timeline } from "@/libs/timline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function TimelinesCol() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",

      cardDetailedText:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",

      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",

      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",

      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",

      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Chrono
        theme={{
          primary: "#d434fe",
        }}
        nestedCardHeight="10px"
        items={items}
        mode="VERTICAL_ALTERNATING"
        slideShow=" true"
        slideItemDuration={4500}
        slideShowType="reveal"
      >
        <div className="chrono-icons">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </Chrono>
    </div>
  );
}

export default TimelinesCol;
