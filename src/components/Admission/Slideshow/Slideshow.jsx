import React, { useState, useEffect } from "react";
import "./Slideshow.scss";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    require("../../../assets/Slideshow/Img1.jpg"),
    require("../../../assets/Slideshow/Img2.jpg"),
    require("../../../assets/Slideshow/Img3.png"),
    // require("../../../assets/Slideshow/Img4.png"),
    require("../../../assets/Slideshow/Img5.png"),
    // require("../../../assets/Slideshow/Img6.webp"),
    require("../../../assets/Slideshow/Img7.png"),
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 

    return () => {
      clearInterval(interval); 
    };
  });

  return (
    <>
      <div className="Slideshow">
        <div className="left_Image">
          {slides.map((slide, index) => (
            <img alt=""
              key={index}
              src={slide}
              
              className={`Image${index + 1} ${currentSlide === index ? "active" : ""} ${currentSlide === (index - 1 + slides.length) % slides.length ? "previous" : ""}`}
            />
          ))}
        </div>
        <div className="main_Image">
          {slides.map((slide, index) => (
            <img alt=""
              key={index}
              src={slide}
              
              className={`Image7 ${currentSlide === index ? "active" : ""} ${currentSlide === (index - 1 + slides.length) % slides.length ? "previous" : ""}`}
            />
          ))}
        </div>
        <div className="right_Image">
          {slides.map((slide, index) => (
            <img alt=""
              key={index}
              src={slide}
              
              className={`Image${index + 4} ${currentSlide === index ? "active" : ""} ${currentSlide === (index - 1 + slides.length) % slides.length ? "previous" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slideshow;
