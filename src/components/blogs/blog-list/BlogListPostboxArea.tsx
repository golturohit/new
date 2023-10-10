'use client'
import Link from "next/link";
import BlogSidebar from "@/componentsinner-pages/blog-sidebar";
import ClockIcon from "@/svg/inner-pages-icons/ClockIcon";
import UserIcon from "@/svg/inner-pages-icons/UserIcon";
import blog_list from "@/data/blog-list-data";
import Image from "next/image";
import VideoIcon from "@/svg/inner-pages-icons/VideoIcon";
import VideoPopup from "@/componentsmodals/video-popup";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PrevBlogIcon from "@/svg/inner-pages-icons/PrevBlogIcon";
import NextBlogIcon from "@/svg/inner-pages-icons/NextBlogIcon";


const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    // rtl: rtl_setting,
    autoplay: false,
    // autoplay: {
    //     delay: 3000,
    // },
    // Navigation arrows
    navigation: {
        nextEl: ".blog-list-active-button-next",
        prevEl: ".blog-list-active-button-prev",
    },
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

const BlogListPostboxArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <section className="postbox__area pt-120 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="blog-list-wrap">
                                {blog_list.map((item, i) =>
                                    <div key={i} className="blog-list-item d-flex mb-30">
                                        {item.img ?
                                            <div className="blog-list-thumb">
                                                <Link href="/blog-details">
                                                    <Image src={item.img} alt="theme-pure" />
                                                </Link>
                                            </div>
                                            : <></>
                                        }
                                        {item.thumb ?
                                            <div className="blog-list-thumb p-relative">
                                                <Link href="/blog-details">
                                                    <Image src={item.thumb} alt="theme-pure" />
                                                </Link>
                                                <div className="tpblog-video-2 d-flex justify-content-center">
                                                    <a className="popup-video"
                                                        onClick={() => setIsVideoOpen(true)}
                                                        style={{ cursor: "pointer" }} >
                                                        <i> <VideoIcon /> </i>
                                                    </a>
                                                </div>
                                            </div>
                                            : <></>
                                        }
                                        {item.slider ?
                                            <div className="blog-list-thumb-slide">
                                                <Swiper
                                                    {...setting}
                                                    loop={true}
                                                    modules={[Navigation]}
                                                    className="swiper-container tpblog-list-active">

                                                    <div className="swiper-wrapper">
                                                        {item.slider?.map((slider, index) =>
                                                            <SwiperSlide key={index} className="swiper-slide">
                                                                <div className="blog-list-thumb">
                                                                    <Link href="/blog-details">
                                                                        <Image src={slider} alt="theme-pure" />
                                                                    </Link>
                                                                </div>
                                                            </SwiperSlide>


                                                        )} 
                                                    </div>
                                                    <div className="tpblog-grid-btn d-flex align-items-center" style={{ cursor: "pointer" }}>
                                                        <div className="blog-list-active-button-prev"><i className="fa-regular fa-angle-left"></i>
                                                        </div>
                                                        <div className="blog-list-active-button-next"><i className="fa-regular fa-angle-right"></i>
                                                        </div>
                                                    </div>
                                                </Swiper>
                                            </div>
                                            : <></>
                                        }


                                        <div className="blog-list-content">
                                            <div className="blog-list-tag">
                                                <Link href="/blog-details">{item.catagory}</Link>
                                            </div>
                                            <h4 className="blog-list-title">
                                                <Link href="/blog-details">{item.title}</Link>
                                            </h4>
                                            <p>{item.sm_des}</p>
                                            <div className="tpblog-meta-2 mb-35">
                                                <span>
                                                    <i> <ClockIcon /> </i>
                                                    {item.time}
                                                </span>
                                                <span> <a href="#"> <i> <UserIcon /> </i> {item.post_writer} </a> </span>
                                            </div>
                                            <div className="blog-list-btn">
                                                <Link href="/blog-details">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )} 

                                <div className="basic-pagination pt-25 pb-25">
                                    <nav>
                                        <ul>
                                            <li> <Link href="/blog"> <i> <PrevBlogIcon /> </i> </Link></li>
                                            <li> <span className="current"> Next page <i> <NextBlogIcon /> </i> </span> </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                        <BlogSidebar />
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

export default BlogListPostboxArea;