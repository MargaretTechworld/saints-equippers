import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Images from './Images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Hero.css';

export default function Hero() {
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide');
    slides.forEach((el) => {
      const url = el.getAttribute('data-src');
      if (url) {
        el.setAttribute('style', `background-image: url("${url}")`);
      }
    });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <Slider
          infinite={Images.length > 1}
          autoplay={Images.length > 1}
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          autoplaySpeed={3000}
          dots
        >
          {Images.map((item) => (
            <div key={item.id} className="hero-slide" data-src={item.src}>
              <div className="overlay" />
              <div className="text-content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button type="button" className="know-christ-btn">
                  {item.btn || 'Know Christ'}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
