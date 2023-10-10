 'use client'

import Image from "next/image";
import brand_img_1 from "@/assets/img/brand/brand-1.png";
import brand_img_2 from "@/assets/img/brand/brand-2.png";
import brand_img_3 from "@/assets/img/brand/brand-3.png";
import brand_img_4 from "@/assets/img/brand/brand-4.png";
import brand_img_5 from "@/assets/img/brand/brand-5.png";
import brand_img_6 from "@/assets/img/brand/brand-6.png"; 
import Slider from "react-slick";

const brand_images = [brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_6, brand_img_4, brand_img_5, brand_img_6]

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
                slidesToShow: 4,
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

const BrandHomeTwo = () => {
    return (
        <>
            <div className="brand-area pb-30 pt-85">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-8 col-lg-10">
                        <Slider {...setting} className="tpbrand tpbrand-active">
                            {brand_images.map((item, i) => 
                                <div key={i} className="tpbrand-item">
                                    <Image src={item} alt="theme-pure" />
                                </div>  
                            )}
                            {/* <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-1.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-2.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-3.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-4.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-5.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-6.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-4.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-5.png" alt="theme-pure" />
                            </div>
                            <div className="tpbrand-item">
                                <img src="assets/img/brand/brand-6.png" alt="theme-pure" />
                            </div> */}
                        </Slider>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandHomeTwo;