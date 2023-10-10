'use client'
import Image from "next/image";
import Slider from "react-slick";

import testi_shape_1 from "@/assets/img/shape/testimonial-5-bg-1.png";
import testi_shape_2 from "@/assets/img/shape/testimonial-5-bg-2.png";
import testi_shape_3 from "@/assets/img/shape/testimonial-5-shape-2.png";
import testi_shape_4 from "@/assets/img/shape/testimonial-5-shape-3.png";
import testi_shape_5 from "@/assets/img/shape/testimonial-5-shape-4.png";


type testimonial_data_5_type = {
    id: number;
    sm_info: JSX.Element;
    author: string;
    job_title: string;
}

const testimonial_data_5: testimonial_data_5_type[] = [
        {
            id: 1, 
            sm_info: <>"SEOMY really simplified our sales process. <br /> It's so easy for us to find talent, track our reps' time and progress, and pay them all from <br /> one platform."</>,
            author: "John Smith",
            job_title: "CEO of Advisor Fuel",
        },
        {
            id: 2, 
            sm_info: <>"SEOMY really simplified our sales process. <br /> It's so easy for us to find talent, track our reps' time and progress, and pay them all from <br /> one platform."</>,
            author: "Smith John",
            job_title: "CEO of Advisor Fuel",
        },
        {
            id: 3, 
            sm_info: <>"SEOMY really simplified our sales process. <br /> It's so easy for us to find talent, track our reps' time and progress, and pay them all from <br /> one platform."</>,
            author: "Jamil rayhan",
            job_title: "CEO of Advisor Fuel",
        },
        {
            id: 4, 
            sm_info: <>"SEOMY really simplified our sales process. <br /> It's so easy for us to find talent, track our reps' time and progress, and pay them all from <br /> one platform."</>,
            author: "Mahdi Hasa",
            job_title: "CEO of Advisor Fuel",
        },

    ]
 
// slider setting 
const setting = {
    autoplay: true,
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

const TestimonialAreaHomeFive = ({style} : any) => {
    return (
        <> 
            <section className={`testimonial-area p-relative ${style ? "mt-120 pb-90" : "pb-100"}`}>
                <div className="container">
                    <div className="testimonial-5-bg">
                        <div className="testimonial-5-bg-shape">
                            <Image src={testi_shape_1} alt="theme-pure" />
                        </div>
                    <div className="testimonial-5-bg-shape-two wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                        <Image src={testi_shape_2} alt="theme-pure" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-5-head text-center mb-60">
                            <h4 className="testimnial-5-title">Our partners know best</h4>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-5 p-relative" style={{backgroundImage: `url(/assets/img/shape/testimonial-5shape-1.png)`}}>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 order-2 order-md-1">
                                    <div className="testimonial-5-shape">
                                        <div className="testimonial-5-shape-one">
                                            <Image src={testi_shape_3} alt="theme-pure" />
                                        </div>
                                        <div className="testimonial-5-shape-two d-none d-md-block">
                                            <Image src={testi_shape_4} alt="theme-pure" />
                                        </div>
                                        <div className="testimonial-5-shape-three d-none d-md-block">
                                            <Image src={testi_shape_5} alt="theme-pure" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 order-1 order-md-2">
                                        <Slider {...setting} className="testimonial-5-content testi-5-active">
                                            {testimonial_data_5.map((item, i)  => 
                                                <div key={i} className="testimonial-5-content-wrap">
                                                    <div className="tptestimonial-star mb-15">
                                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                                                        <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                                                    </div>
                                                    <p>{item.sm_info}</p>
                                                    <div className="author-info-5">
                                                        <h5 className="author-title-5">{item.author}</h5>
                                                        <span>{item.job_title}</span>
                                                    </div>
                                                </div>                                            
                                            )} 
                                        </Slider>
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

export default TestimonialAreaHomeFive;