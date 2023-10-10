"use client";
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/componentsmodals/video-popup";
import video_bg_img from "@/assets/img/video/video-bg-1.jpg";
import VideoIcon from "@/svg/services_icon/VideoIcon";
 

const MediaVideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="video-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-inner-wrap">
                <div className="video-inner-bg">
                  <Image src={video_bg_img} alt="theme-pure" />
                  <div className="video-inner-content">
                    <h4 className="video-inner-title">
                      Social <br /> Media Marketing
                    </h4>
                  </div>
                  <div className="video-inner-icon">
                    <a
                      className="popup-video"
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>
                        {" "}
                        <VideoIcon />{" "}
                      </span>
                    </a>
                  </div>
                </div>
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

export default MediaVideoArea;
