"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/componentsmodals/video-popup";
import UserIcon from "@/svg/inner-pages-icons/UserIcon";
import ClockIcon from "@/svg/inner-pages-icons/ClockIcon";
import blog_masonry_data from "@/data/blog-masonry-data";
import PrevBlogIcon from "@/svg/inner-pages-icons/PrevBlogIcon";
import NextBlogIcon from "@/svg/inner-pages-icons/NextBlogIcon";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PostboxAreaMasonry = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="postbox__area pt-120 pb-90">
        <div className="container container-lagre-box">
          <ResponsiveMasonry
            className="row blog-masonry-active"
            columnsCountBreakPoints={{ 0: 1, 750: 3, 992: 4 }}
          >
            <Masonry gutter="20px">
              {blog_masonry_data.map((item, i) => (
                <div key={i} className="blog-masonry-item-active">
                  {item.qute && (
                    <div className="tpmasonry-item mb-30">
                      <div className="tpmasonry-icon mb-40">
                        <span>{item.icon && <item.icon />}</span>
                      </div>
                      <div className="tpmasonry-content-2">
                        <span>{item.sub_title}</span>
                        <h4 className="tpmasonry-title-white">
                          <Link href="/blog-details">{item.sm_info}</Link>
                        </h4>
                        <p>{item.post_by}</p>
                      </div>
                    </div>
                  )}
                  {!item.qute && (
                    <div className="tpblog-item-2 mb-30">
                      <div className="tpblog-thumb-2 masonry_video">
                        <Link href="/blog-details">
                          {item.img && (
                            <Image src={item.img} alt="theme-pure" />
                          )}
                        </Link>
                        {item.video && (
                          <div className="tpmasonry-video mb-30">
                            <div className="masonry_video_inner">
                              <a
                                className="popup-video"
                                onClick={() => setIsVideoOpen(true)}
                                style={{ cursor: "pointer" }}
                              >
                                <span>
                                  <svg
                                    width="15"
                                    height="18"
                                    viewBox="0 0 15 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 9L0 17.6603L0 0.339746L15 9Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="tpblog-wrap">
                        <div className="tpblog-content-2">
                          <span>
                            <Link href="/blog-details">{item.catagory}</Link>
                          </span>
                          <h4 className="tpblog-title-2">
                            {item.title && (
                              <Link
                                href="/blog-details"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></Link>
                            )}
                          </h4>
                        </div>
                        <div className="tpblog-meta-2">
                          <span>
                            <i>
                              <ClockIcon />{" "}
                            </i>
                            {item.time}
                          </span>
                          <span>
                            <a href="#">
                              <i>
                                <UserIcon />{" "}
                              </i>
                              {item?.post_writer}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <div className="row">
            <div className="col-lg-12">
              <div className="basic-pagination text-center pt-30">
                <nav>
                  <ul>
                    <li>
                      <Link href="/blog">
                        <i>
                          <PrevBlogIcon />
                        </i>
                      </Link>
                    </li>
                    <li>
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

export default PostboxAreaMasonry;
