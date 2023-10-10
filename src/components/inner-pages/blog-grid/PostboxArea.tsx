"use client";
import Link from "next/link";
import blog_grid_data from "@/data/blog-grid-data";
import ClockIcon from "@/svg/inner-pages-icons/ClockIcon";
import UserIcon from "@/svg/inner-pages-icons/UserIcon";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import VideoIcon from "@/svg/inner-pages-icons/VideoIcon";
import VideoPopup from "@/componentsmodals/video-popup";
import { useState } from "react";
import PrevBlogIcon from "@/svg/inner-pages-icons/PrevBlogIcon";
import NextBlogIcon from "@/svg/inner-pages-icons/NextBlogIcon";
import BlogSidebar from "../blog-sidebar";

const PostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="postbox__area pt-120 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog-grid-wrapper">
                <div className="row">
                  {blog_grid_data.map((item, i) => (
                    <div key={i} className="col-lg-6 col-md-6">
                      <div className="tpblog-item-2 mb-30">
                        {item.slider && (
                          <div className="tpblog-grid-slider">
                            <Swiper
                              loop={true}
                              modules={[Autoplay, Navigation]}
                              slidesPerView={1}
                              spaceBetween={0}
                              autoplay={{
                                delay: 3000,
                              }}
                              // Navigation arrows
                              navigation={{
                                nextEl: ".blog-grid-active-button-next",
                                prevEl: ".blog-grid-active-button-prev",
                              }}
                              breakpoints={{
                                "1200": {
                                  slidesPerView: 1,
                                },
                                "992": {
                                  slidesPerView: 1,
                                },
                                "768": {
                                  slidesPerView: 1,
                                },
                                "576": {
                                  slidesPerView: 1,
                                },
                                "0": {
                                  slidesPerView: 1,
                                },
                              }}
                              className="swiper-container tpblog-grid-active"
                            >
                              {item.slider?.map((slider, index) => (
                                <SwiperSlide
                                  key={index}
                                  className="swiper-slide"
                                >
                                  <div className="tpblog-thumb-2">
                                    <Link href="/blog-details">
                                      <Image src={slider} alt="theme-pure" />
                                    </Link>
                                  </div>
                                </SwiperSlide>
                              ))}
                              <div className="tpblog-grid-btn d-flex align-items-center">
                                <div
                                  style={{ cursor: "pointer" }}
                                  className="blog-grid-active-button-prev"
                                >
                                  <i className="fa-regular fa-angle-left"></i>
                                </div>
                                <div
                                  style={{ cursor: "pointer" }}
                                  className="blog-grid-active-button-next"
                                >
                                  <i className="fa-regular fa-angle-right"></i>
                                </div>
                              </div>
                            </Swiper>
                          </div>
                        )}

                        {item.video && (
                          <div className="tpblog-thumb-2 p-relative">
                            <Link href="/blog-details">
                              <Image src={item.thumb} alt="theme-pure" />
                            </Link>
                            <div className="tpblog-video-2">
                              <a
                                className="popup-video"
                                onClick={() => setIsVideoOpen(true)}
                                style={{ cursor: "pointer" }}
                              >
                                <i>
                                  {" "}
                                  <VideoIcon />{" "}
                                </i>
                              </a>
                            </div>
                          </div>
                        )}
                        {item.img && (
                          <div className="tpblog-thumb-2">
                            <Link href="/blog-details">
                              <Image src={item?.img} alt={item.title} />
                            </Link>
                          </div>
                        )}
                        <div className="tpblog-wrap">
                          <div className="tpblog-content-2">
                            <span>
                              <Link href="/blog-details">{item.catagory}</Link>
                            </span>
                            <h4 className="tpblog-title-2">
                              <Link href="/blog-details">{item.title}</Link>
                            </h4>
                          </div>
                          <div className="tpblog-meta-2">
                            <span>
                              {" "}
                              <i>
                                {" "}
                                <ClockIcon />{" "}
                              </i>{" "}
                              {item.time}{" "}
                            </span>
                            <span>
                              {" "}
                              <a href="#">
                                {" "}
                                <i>
                                  {" "}
                                  <UserIcon />
                                </i>{" "}
                                {item.post_writer}{" "}
                              </a>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="basic-pagination mt-30">
                  <nav>
                    <ul>
                      <li>
                        {" "}
                        <Link href="/blog">
                          {" "}
                          <i>
                            <PrevBlogIcon />
                          </i>{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="current">
                          Next page{" "}
                          <i>
                            <NextBlogIcon />
                          </i>
                        </span>
                      </li>
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

export default PostboxArea;
