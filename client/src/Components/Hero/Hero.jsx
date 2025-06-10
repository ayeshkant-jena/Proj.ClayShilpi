import React, { useState } from "react";
import './Hero.css'
import banner1 from '../Assets/banner1.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/banner3.jpg';

const Hero = () => {
  const banners = [
    { id: 1, image: banner1, title: "Banner 1" },
    { id: 2, image: banner2, title: "Banner 2" },
    { id: 3, image: banner3, title: "Banner 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < banners.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="hero">
      <div className="banner-container">
        <img src={banners[currentIndex].image} alt={banners[currentIndex].title} />
      </div>
      <div className="navigation">
        {currentIndex > 0 && (
          <button className="left-arrow" onClick={handlePrev}>
            &lt;
          </button>
        )}
        {currentIndex < banners.length - 1 && (
          <button className="right-arrow" onClick={handleNext}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
