 'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';

import brand_1 from "@/assets/img/brand/brand-1.png";
import brand_2 from "@/assets/img/brand/brand-2.png";
import brand_3 from "@/assets/img/brand/brand-3.png";
import brand_4 from "@/assets/img/brand/brand-4.png";
import brand_5 from "@/assets/img/brand/brand-5.png";
import brand_6 from "@/assets/img/brand/brand-6.png"; 
import Image from "next/image";

const brands = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_1, brand_2, brand_3, brand_4, brand_5, brand_6,]

const setting = {
    slidesPerView: 5,
    loop: true,
    // effect: 'fade',
    // rtl: rtl_setting,
    autoplay: {
        delay: 3000,
    }, 
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 5,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

const BrandArea = () => {
    return (
        <>
            <section className="brand-area  mb-110">
         <div className="container">
            <div className="trusted-brand-bg pb-65">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="trusted-brand text-center mt-60 mb-30">
                        <h3 className="trusted-brand-title">Trusted by:</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <Swiper {...setting}  
                     slidesPerView={5} 
                     loop={true}
                     modules={[Autoplay]}
                     autoplay={ {
                        delay: 3000,
                    }}
                    breakpoints= {{
                        '1200': {
                            slidesPerView: 5,
                        },
                        '992': {
                            slidesPerView: 5,
                        },
                        '768': {
                            slidesPerView: 3,
                        },
                        '576': {
                            slidesPerView: 2,
                        },
                        '0': {
                            slidesPerView: 1,
                        },
                    }}
                     className="swiper-container trusted-brand-active"> 
                            {brands.map((item, i) => 
                                <SwiperSlide key={i} className="swiper-slide">
                                    <div className="trusted-brand-item">
                                        <Image src={item} alt="theme-pure" />
                                    </div>
                                </SwiperSlide>                            
                            )} 
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default BrandArea;