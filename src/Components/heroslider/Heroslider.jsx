import React, { useState, useEffect } from "react";
import img1 from "../../assets/sliderimgs/img-1.jpg";
import img2 from "../../assets/sliderimgs/img-2.jpg";
import img3 from "../../assets/sliderimgs/img-3.jpg";
import "../../styles/heroslider.css";

const slides = [
  { id: 1, image: img1, title: "Luxury & Comfort", description: "Experience the best luxury stay with premium amenities." },
  { id: 2, image: img2, title: "Breathtaking Views", description: "Enjoy stunning scenery right from your room." },
  { id: 3, image: img3, title: "Unmatched Hospitality", description: "We ensure a memorable and delightful stay." },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentIndex ? "active" : ""}`}>
          <img src={slide.image} alt={slide.title} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
}
