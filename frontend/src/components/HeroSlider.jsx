import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const images = [
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412292/Gemini_Generated_Image_yl3xvwyl3xvwyl3x_hdxro6.png",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412497/Gemini_Generated_Image_c20gbvc20gbvc20g_wiobmi.png",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412499/Gemini_Generated_Image_c20gbvc20gbvc20g_1_ly9e0l.png",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412502/Gemini_Generated_Image_yau5jlyau5jlyau5_zruka0.png",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412504/Gemini_Generated_Image_yau5jlyau5jlyau5_1_pdfcxr.png",
    "https://res.cloudinary.com/dwq5qifuk/image/upload/v1762412538/Gemini_Generated_Image_c20gbvc20gbvc20g_2_cssqxt.png",
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
