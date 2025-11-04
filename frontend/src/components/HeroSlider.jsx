import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const images = [
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1753036424/elite-crew/vd6cxahrjlr5uxj8f7sf.jpg",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1753033711/elite-crew/h57yslhplat3lbzojtsr.jpg",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1753037957/elite-crew/ri1aq7mdp9m73mgvncmi.jpg",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1753037855/elite-crew/lze5a7zkppz4dxol4mpw.jpg",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1753032434/elite-crew/aywfetozctpvxh8hkanr.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto mt-4 rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {images.map((url, i) => (
          <div key={i}>
            <img
              src={url}
              alt={`slide-${i}`}
              className="w-full h-[200px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
