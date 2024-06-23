"use client";
import "mathjs";
import HeroCarousel from "./HeroCarouselImg.js";
import "./Hero.css";
import { useState } from "react";

const carouselIndex = new Array(3).fill(0).map((_, i) => i);

export default function Hero() {
  const [pos, setPos] = useState(0);
  const carouselIndexEl = carouselIndex.map((i) => {
    return (
      <span
        id={`carouselIndex` + i}
        key={i}
        className={
          "heroCarouselIndexBalls " + (i === pos ? "activeCarouselIndex" : "")
        }
        onClick={(e) => {
          setPos(i);
          Array.from(e.target.parentElement.children).forEach((e_ch) => {
            e_ch.classList.remove("activeCarouselIndex");
          });
          e.target.classList.add("activeCarouselIndex");
        }}
      ></span>
    );
  });
  return (
    <div className="hero">
      <div className="heroContent">
        <h1>
          Find the <i>Best Insurance</i> plans for your needs
        </h1>
        <button>Compare Now</button>
      </div>
      <div className="heroAdvert">
        <div className="heroCarousel">
          <HeroCarousel pos={0 - pos} />
          <HeroCarousel pos={1 - pos} />
          <HeroCarousel pos={2 - pos} />
          <span id="heroAdventPrev">←</span>
          <span id="heroAdventNext">→</span>
        </div>
        <span className="heroCarouselIndex">{carouselIndexEl}</span>
      </div>
    </div>
  );
}
