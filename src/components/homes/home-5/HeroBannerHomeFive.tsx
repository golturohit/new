"use client";
import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import HeroLangIcon from "@/svg/home-5-icons/HeroLangIcon";
import LeftBG from "@/assets/img/shape/banner-5-shape-1.png";
import ArrowPlane from "@/assets/img/shape/banner-5-shape-10.png";

import banner_img from "@/assets/img/banner/banner-5-bg-1.png";

import banner_shape_1 from "@/assets/img/shape/banner-5-shape-7.png";
import banner_shape_2 from "@/assets/img/shape/banner-5-shape-2.png";
import banner_shape_3 from "@/assets/img/shape/banner-5-shape-3.png";
import banner_shape_4 from "@/assets/img/shape/banner-5-shape-4.png";
import banner_shape_5 from "@/assets/img/shape/banner-5-shape-5.png";
import banner_shape_6 from "@/assets/img/shape/banner-5-shape-6.png";
import banner_shape_7 from "@/assets/img/shape/banner-5-shape-8.png";
import banner_shape_8 from "@/assets/img/shape/banner-5-shape-9.png";

import brand_img_1 from "@/assets/img/brand/brand-5-1.png";
import brand_img_2 from "@/assets/img/brand/brand-5-2.png";
import brand_img_3 from "@/assets/img/brand/brand-5-3.png";
import brand_img_4 from "@/assets/img/brand/brand-5-4.png";
import brand_img_5 from "@/assets/img/brand/brand-5-5.png";
import brand_img_6 from "@/assets/img/brand/brand-5-6.png";

// banner shape data type
interface banner_shapes_type {
  id: number;
  img: StaticImageData;
  cls: string;
}
// banner shape data
const banner_shapes: banner_shapes_type[] = [
  { id: 1, img: banner_shape_1, cls: "one d-none d-lg-block" },
  { id: 2, img: banner_shape_2, cls: "two" },
  { id: 3, img: banner_shape_3, cls: "three" },
  { id: 4, img: banner_shape_4, cls: "four" },
  { id: 5, img: banner_shape_5, cls: "five" },
  { id: 6, img: banner_shape_6, cls: "six" },
  { id: 7, img: banner_shape_7, cls: "seven" },
  { id: 8, img: banner_shape_8, cls: "eight" },
];

type brands_type = StaticImageData[];
const brands: brands_type = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
];

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
        slidesToShow: 3,
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
        slidesToShow: 2,
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
// hero content type
type hero_content_type = {
  title: JSX.Element;
  sm_info: JSX.Element;
  brand_title: string;
};
const hero_content_home_5: hero_content_type = {
  title:  <> All in one <br /> SEO software made simple. </>,
  sm_info: <>We are a UK based SEO agency and the creators of the famous <br /> website
  crawler and log file analyser tools.</> ,
  brand_title: "Trusted by the big ones, loved by everyone",
};
const { title, sm_info, brand_title } = hero_content_home_5;

const HeroBannerHomeFive = () => {
  const sliderRef = useRef<Slider | null>(null);
  return (
    <>
      <section className="banner-area banner-brand fix">
        <div className="banner-5 p-relative">
          <div className="banner-5-content-shape">
            <div className="banner-5-content-shape-one">
              <Image src={ArrowPlane} alt="theme-pure" />
            </div>
            <div className="banner-5-content-shape-two">
              <i> 
                <HeroLangIcon /> 
              </i>
            </div>
          </div>
          <div className="container custom-container">
            <div className="banner-5-shape">
              <div className="banner-5-shape-one">
                <Image src={LeftBG} alt="theme-pure" />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 col-lg-6 order-2 order-lg-1">
                <div className="banner-5-content p-relative pt-80">
                  <h4 className="banner-5-title">{title}</h4>
                  <p>{sm_info}</p>
                  <div className="banner-5-btn">
                    <Link
                      className="light-blue-btn mr-20"
                      href="/keyword-search"
                    >
                      Start Free Trial
                    </Link>
                    <span>
                      Already using vault? <Link href="/sign-in">Sign in</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                <div className="banner-5-thumb p-relative">
                  <Image src={banner_img} alt="theme-pure" />
                  <div className="banner-5-thumb-shape d-none d-md-block">
                    {banner_shapes.map((item, i) => (
                      <div
                        key={i}
                        className={`banner-5-thumb-shape-${item.cls}`}
                      >
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="barnda-area pb-195">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-content mb-50 text-center">
                  <h4 className="brand-title">{brand_title}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Slider
                  {...setting}
                  ref={sliderRef}
                  className="barnd-5 tpbrand-active-5"
                >
                  {brands.map((brand, index) => (
                    <div key={index} className="brand-5-item">
                      <Image src={brand} alt="theme-pure" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBannerHomeFive;
