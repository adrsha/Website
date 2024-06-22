import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Find the <i>Best Insurance</i> plans for your needs
        </h1>
        <button>Compare Now</button>
      </div>
      <div className="hero-advert">
        <div className="hero-carousel"></div>
        <span className="hero-carousel-index">
          <li></li>
          <li></li>
          <li></li>
        </span>
      </div>
    </div>
  );
}
