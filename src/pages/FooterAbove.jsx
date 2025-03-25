import React, { useState } from "react";
import "../styles/FooterAbove.scss"; 
import { Link } from 'react-router-dom';

const p1 = "/assets/Neupass.jpg";
const p2 = "/assets/Galary.jpg";
const p3 = "/assets/Destinationwedd.jpg";
const p4 = "/assets/House.jpg";
const p5 = "/assets/Dining.jpg";



const TravelSlider = () => {
  const destinations = [
  { id: 1, title: "Subscription", image: p1, link:"/subscriptions"},
    { id: 2, title: "Galary", image: p2 , link: "/gallery"},
    { id: 3, title: "Destination Wedding", image: p3 },
    { id: 4, title: "RentalHouse", image: p4 },
    { id: 5, title: "Dining", image: p5,link:"/dining" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container1">
      <div
        className="slider-background1"
        style={{
            backgroundImage: `url(${destinations[currentIndex].image})`,
          }}
      >
        <div className="slider-text1">
          <Link to={destinations[currentIndex].link}>
            <h2>{destinations[currentIndex].title}</h2>
          </Link>
        </div>
      </div>

      <button className="slider-btn left1" onClick={prevSlide}>
        &#8249;
      </button>

      <div className="card-container1">
      <Link to={destinations[currentIndex].link}>
        <div
          className="card1"
          style={{
            backgroundImage:`url(${destinations[currentIndex].image})`,
          }}
        >
          <div className="card-title1">
            <h3>{destinations[currentIndex].title}</h3>
          </div>
        </div>
        </Link>
      </div>

      <button className="slider-btn right1" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default TravelSlider;