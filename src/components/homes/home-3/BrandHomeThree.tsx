"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
// brand images 
import brand_1 from "@/assets/img/brand/logo-3-1.png";
import brand_2 from "@/assets/img/brand/logo-3-2.png";
import brand_3 from "@/assets/img/brand/logo-3-3.png";
import brand_4 from "@/assets/img/brand/logo-3-4.png";
import brand_5 from "@/assets/img/brand/logo-3-5.png";
import brand_6 from "@/assets/img/brand/logo-3-6.png";
// branda data
const brand_images = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_1,
  brand_2,
];

// slider setting
const setting = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BrandHomeThree = () => {
  const sliderRef = useRef(null);
  return (
    <>
      <div className="brand-area theme-bg-4 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <Slider
                {...setting}
                ref={sliderRef}
                className="tpbrand tpbrand-active-2"
              >
                {brand_images.map((item, i) => (
                  <div key={i} className="tpbrand-item-2">
                    <Image src={item} alt="theme-pure" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandHomeThree;
