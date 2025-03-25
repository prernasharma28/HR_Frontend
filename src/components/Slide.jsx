import React, { useState, useEffect } from 'react';
import '../styles/Slide.scss';

const Slide = () => {
  const images = [
    'url("../assets/slide.jpg")',
    'url("../assets/slider2.webp")',
    'url("../assets/slider3.webp")',
    'url("../assets/slider4.webp")',
    'url("../assets/slider5.webp")',
    'url("../assets/slider6.webp")',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="slide"
      style={{
        backgroundImage: images[currentImageIndex],
      }}
    >
     <h1>
        Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
        memories
      </h1> 
    </div>
  );
};

export default Slide;
