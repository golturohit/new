'use client'
import { useRef } from 'react';
import Image, { StaticImageData } from "next/image";
import Slider from 'react-slick';
import about_brand_img_1 from "@/assets/img/brand/inner-brand-1.png";
import about_brand_img_2 from "@/assets/img/brand/inner-brand-2.png";
import about_brand_img_3 from "@/assets/img/brand/inner-brand-3.png";
import about_brand_img_4 from "@/assets/img/brand/inner-brand-4.png";
import about_brand_img_5 from "@/assets/img/brand/inner-brand-5.png";
import about_brand_img_6 from "@/assets/img/brand/inner-brand-6.png"; 
import ScrollDownBtn from '@/svg/about_btn/ScrollDownBtn'; 

// about brand data type
type about_brand_content_type = {
    scroll_btn: JSX.Element;
    about_brand: {
        id: number;
        img: StaticImageData;
    }[];
}
// about brand data
const about_brand_content: about_brand_content_type = {
    scroll_btn: <>Scroll down <br /> to explore more</>,
    about_brand: [
        {id: 1, img: about_brand_img_1},
        {id: 2, img: about_brand_img_2},
        {id: 3, img: about_brand_img_3},
        {id: 4, img: about_brand_img_4},
        {id: 5, img: about_brand_img_5},
        {id: 6, img: about_brand_img_6},
        {id: 7, img: about_brand_img_1},
        {id: 8, img: about_brand_img_2},
        {id: 9, img: about_brand_img_3},
    ]
}
const {scroll_btn, about_brand} = about_brand_content

const setting = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
}
const AboutBrandArea = () => {
    const sliderRef = useRef(null)
    return (
        <>
            <section className="brand-area pb-120">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-2 offset-lg-5 col-md-4">
                            <div className="brand-wrapper ">
                                <div className="brand-inner-content">
                                    <h4 className="brand-inner-title">{scroll_btn}</h4>
                                    <a href="#our-misson">
                                        <i><ScrollDownBtn /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8">
                            <Slider {...setting} ref={sliderRef} className="brand-inner-wrapper tpbrand-inner-active">
                                {about_brand.map((item, i)  => 
                                    <div key={i} className="tpbrand-inner-item">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>                                
                                )}                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutBrandArea;