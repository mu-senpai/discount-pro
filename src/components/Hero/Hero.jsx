import { useEffect, useState } from "react";
import saleImg from "../../assets/salebg.jpg";
import adidasImg from "../../assets/adidas.jpg";
import nikeImg from "../../assets/nike.jpg";
import zaraImg from "../../assets/zara.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, img: saleImg },
    { id: 1, img: adidasImg },
    { id: 2, img: nikeImg },
    { id: 3, img: zaraImg },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-[20rem] sm:h-[37.5rem] lg:h-[44rem] 2xl:h-[60rem] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
        <button
          onClick={handlePrevious}
          className="btn btn-circle bg-transparent border-none"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-transparent border-none"
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-5 flex justify-center w-full space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`btn btn-circle btn-xs border-none ${
              currentSlide === index ? "bg-blue-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
