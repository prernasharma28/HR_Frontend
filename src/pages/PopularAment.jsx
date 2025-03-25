import React from 'react';
import '../styles/PopularAment.scss'; // Import the SCSS file for styling
import Slider from 'react-slick';
const PopularAment = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };
  const amenities = [
    { name: "Pool", icon: "🏊‍♂️", className: "pool", img: "/assets/PLACES/pool.jpeg" },
    { name: "Free parking", icon: "🚗", className: "parking", img: "/assets/PLACES/parking.jpg" },
    { name: "Air conditioning", icon: "❄️", className: "ac" , img: "/assets/PLACES/ac.jpg"},
    { name: "Kitchen", icon: "🍴", className: "kitchen", img: "/assets/PLACES/kitchen.jpg" },
    { name: "Wifi", icon: "📶", className: "wifi", img: "/assets/PLACES/Wifi.jpg" },
  ];

  return (
    <>
    <div className="popular-ament">
      <h2 className="title">Popular Amenities</h2>
      <div className="ament-cards">
        {amenities.map((ament, index) => (
          <div key={index} className={`ament-card ${ament.className}`}>
            <div className="ament-card-icon">{ament.icon}</div>
            <p className="ament-card-text">{ament.name}</p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default PopularAment;
