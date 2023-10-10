"use client"
import Image from "next/image";
import { useRef , useState} from 'react';
import Slider from "react-slick"; 
import VideoPopup from "@/componentsmodals/video-popup";

import brand_img_1 from "@/assets/img/brand/logo-3-1.png";
import brand_img_2 from "@/assets/img/brand/logo-3-2.png";
import brand_img_3 from "@/assets/img/brand/logo-3-3.png";
import brand_img_4 from "@/assets/img/brand/logo-3-4.png";
import brand_img_5 from "@/assets/img/brand/brand-3-5.png";
import brand_img_6 from "@/assets/img/brand/logo-3-6.png";
import testimonial_thumb from "@/assets/img/bg/testimonial-bg.jpg";


 // slider setting 
 const setting = {
    fade: false,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
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
// testimonial data 
const testimonial_data_3 = [
    {
        id: 1, 
        name: "Reed Howard",
        job_title: "Founder & CEO, Lemontree",
        sm_des: <>
        "SSO Site Checkup runs through a fast audit of your site, checking for proper tags and
        surfacing any errors that might come up. understanding of SEO is amazing. They understand understanding of SEO is amazing. They understand
        what they are unique business."</>,
    },
    {
        id: 2, 
        name: "Howard Reed",
        job_title: "Founder & CEO, Lemontree",
        sm_des: <>"PEO Site Checkup runs through a fast audit of your site, checking for proper tags and
        surfacing any errors that might come up. understanding of SEO is amazing. They understand understanding of SEO is amazing. They understand
        what they are unique business."</>,
    },
    {
        id: 3, 
        name: "Jamil Rayhan",
        job_title: "Founder & CEO, Lemontree",
        sm_des: <>
        "SEO Site Checkup runs through a fast audit of your site, checking for proper tags and
        surfacing any errors that might come up. understanding of SEO is amazing. They understand understanding of SEO is amazing. They understand
        what they are unique business."</>,
    },
    {
        id: 4, 
        name: "Ahsan Howard",
        job_title: "Founder & CEO, Lemontree",
        sm_des: <> "SEO Site Checkup runs through a fast audit of your site, checking for proper tags and
        surfacing any errors that might come up. understanding of SEO is amazing. They understand understanding of SEO is amazing. They understand
        what they are unique business."</>,
    },
]

const brands_data = [ brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_6, brand_img_1, brand_img_2];
const setting_2 = {
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
                slidesToShow: 5,
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
                slidesToShow: 3,
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
const TestimonialAreaHomeThree = () => {
    const sliderRef = useRef(null)
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <section className="testimonial-area theme-bg-4 pt-110">
                <div className="services-bg-wrapper pt-90 pb-90">
                    <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-lg-8">
                            <div className="tpsection-wrapper">
                                <h2 className="tpsection-title-white-2 mb-60">What our customers have been review</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-60">
                        <div className="col-lg-7 col-md-12 order-2 order-lg-1">
                            <Slider {...setting} ref={sliderRef} className="tptestimonial-3-active">
                                {testimonial_data_3.map((item, i)  => 
                                    <div key={i} className="tptestimonial-content-3">
                                        <div className="tptestimonial-star mb-10">
                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                        </div>
                                        <p>
                                        {item.sm_des}
                                        </p>
                                        <div className="author-info">
                                        <h5 className="author-title">{item.name}</h5>
                                        <span>{item.job_title}</span>
                                        </div>
                                    </div>                        
                                )} 
                            </Slider>
                        </div>
                        <div className="col-lg-5 col-md-12 order-1 order-lg-2">
                            <div className="tpvideo">
                                <div className="tpvideo-thumb p-relative">
                                <Image src={testimonial_thumb} alt="theme-pure" />
                                <div className="tpvideo-icon">
                                    <div className="tpvideo-icon-anim">
                                        <a className="popup-video" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        style={{cursor: "pointer"}}
                                        ><i className="fa-sharp fa-solid fa-play"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <Slider {...setting_2} ref={sliderRef} className="tpbrand tpbrand-active-2">
                                {brands_data.map((brand, index)  => 
                                    <div  key={index} className="tpbrand-item-2">
                                        <Image src={brand} alt="theme-pure" />
                                    </div>
                                )} 
                            </Slider>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

             {/* video modal start */}
             <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"TYYf8zYjP5k"}
            />
            {/* video modal end */}
        </>
    );
};

export default TestimonialAreaHomeThree;