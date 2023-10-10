"use client"
import Image from "next/image";
import testimonial_data_two from "@/data/tptestimonial-two";
import Slider from "react-slick";
import { useRef } from "react";
import QuteTwo from "@/svg/qute_2";

const setting = {
    autoplay: false,
    vertical: true,
    dots: true,
    fade: false,
    arrows: false,
    slidesToShow: 1,
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
                arrows: false,
            }
        }
    ], 
}

type style_type = {
    style?: any
    service_style?: any
}
const TestimonialHomeTwo = ({style, service_style} : style_type) => {
    const sliderRef = useRef<Slider | null>(null);
    const handlePrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };  
    const handleNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
    return (
        <>                          
            <section className={`testimonial-area ${style ? "testimonial-blue pb-120" : service_style? "pt-20 pb-40" : "pt-85"} `}>
                <div className="container">
                    <div className={`${service_style? "testimonial-inner-bg" : "tptestimonial-two-bg"}`}>
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-lg-10 col-md-9">
                            <div className="tptestimonial-area-two p-relative">
                                <Slider {...setting} ref={sliderRef} className="tptestimonial-active-two">
                                    {testimonial_data_two.map((item, i) => 
                                        <div key={i} className="tptestimonial-two-item">
                                            <div className="tptestimonial-two">
                                                <div className="tptestimonial-two-avatar">
                                                    <Image src={item.img} alt="theme-pure" />
                                                </div>
                                                <div className="tptestimonial-two-content">
                                                        <i><QuteTwo /> </i>
                                                        <p dangerouslySetInnerHTML={{__html: item.sm_des}}></p>
                                                    <div className="tptestimonial-two-avatar-info">
                                                    <h5 className="title">{item.name}</h5>
                                                        <span>{item.job_title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                    
                                    )} 
                                </Slider>
                                <div className="tptestimonial-two-nav">
                                <button type="button" className="slick-prev" onClick={handlePrev}><span><i className="fa-regular fa-angle-up"></i></span></button>
                                <button type="button" className="slick-next" onClick={handleNext}><span><i className="fa-regular fa-angle-down"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialHomeTwo;