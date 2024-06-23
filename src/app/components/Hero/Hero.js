import Image from "next/image";
import "./Hero.css";
import { viewportWidth, viewportHeight } from "./CarouselImages";

export default function Hero() {
  const imageLoader = (width, height) => {
    return `https://picsum.photos/${width}/${height}`;
  };
  console.log(viewportWidth, viewportHeight);
  // const carouselSizeWidth = viewportWidth * 0.2;
  // const carouselSizeHeight = viewportHeight * 0.4;
  const carouselSizeWidth = 1920 * 0.2;
  const carouselSizeHeight = 1080 * 0.4;

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Find the <i>Best Insurance</i> plans for your needs
        </h1>
        <button>Compare Now</button>
      </div>
      <div className="hero-advert">
        <div className="hero-carousel">
          <div className="hero-carousel-item">
            <Image
              src={imageLoader(carouselSizeWidth, carouselSizeHeight)}
              alt="advert_1"
              width={carouselSizeWidth}
              height={carouselSizeHeight}
            />
          </div>
          <div className="hero-carousel-item">
            <Image
              src={imageLoader(carouselSizeWidth, carouselSizeHeight)}
              alt="advert_2"
              width={carouselSizeWidth}
              height={carouselSizeHeight}
            />
          </div>
        </div>
        <span className="hero-carousel-index">
          <li></li>
          <li></li>
          <li></li>
        </span>
      </div>
    </div>
  );
}
