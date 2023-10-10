import Image from "next/image";
import Link from "next/link";
// optimize shape images 
import optimize_img_1 from "@/assets/img/bg/optimize-bg.png"; 
import optimize_img_2 from "@/assets/img/bg/optimize-bg-2.png"; 
import optimize_img_3 from "@/assets/img/shape/optimize-shape-2.png"; 
import optimize_img_4 from "@/assets/img/shape/optimize-shape-1.png"; 
// data type
type optimize_content_type = {
    sub_title: string;
    title: JSX.Element;
    sm_info: JSX.Element;
    score: string;
    skill: string;
}
// optimize content
const optimize_content: optimize_content_type = {
    sub_title: "Looking for best SEO results?",
    title: <>Organic Search <br /> Engine Optimisation</>,
    sm_info: <>So I said down the you owt to do with me absolutely bladdered, <br /> amongst what a plonker brolly baking.</>,
    score: "Desktop Score",
    skill: "Development Skill",
}
const {sub_title, title, sm_info, score, skill}  = optimize_content

const OptimizeAreaHomeFour = () => {
    return (
      <>
        <section className="optimize-area optimize-wrapper pb-140">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="optimize-wrapperp pt-35">
                  <div className="section-wrapper mb-40">
                    <span>{sub_title}</span>
                    <h5 className="section-title-4 section-title-4-2">
                        {title}
                    </h5>
                    <p>{sm_info}</p>
                  </div>
                  <div className="tpdrive-progress mb-25 pr-150">
                    <div className="tpdrive-bar-item mb-30">
                      <h4 className="tpdrive-bar-title mb-15">{score}</h4>
                      <div className="tpdrive-bar-progress">
                        <div className="progress"> 
                          <div
                            className="progress-bar wow slideInLeft"
                            data-wow-delay="0s"
                            data-wow-duration=".8s"
                            role="progressbar"
                            data-width={"98%"}
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{
                              width: "98%",
                              visibility: "visible",
                              animationDuration: "0.8s",
                              animationDelay: "0s",
                              animationName: "slideInLeft",
                            }}
                          >
                            <span>98</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tpdrive-bar-item yellow-bar">
                      <h4 className="tpdrive-bar-title mb-15">
                        {skill}
                      </h4>
                      <div className="tpdrive-bar-progress">
                        <div className="progress"> 
                          <div
                            className="progress-bar wow slideInLeft"
                            data-wow-delay="0s"
                            data-wow-duration=".8s"
                            role="progressbar"
                            data-width={"84%"}
                            aria-valuenow={84}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{
                              width: "65%",
                              visibility: "visible",
                              animationDuration: "0.8s",
                              animationDelay: "0s",
                              animationName: "slideInLeft",
                            }}
                          >
                            <span>84</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="optimize-btn">
                    <Link className="blue-btn" href="/keyword-search">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="optimize-thumb text-end p-relative pt-35">
                  <div className="optimize-thumb-img">
                    <Image src={optimize_img_1} alt="theme-pure" />
                  </div>
                  <div className="optimize-shape">
                    <Image
                      src={optimize_img_2} 
                      alt=""
                      className="optimize-shape-1"
                    />
                    <Image
                      src={optimize_img_3} 
                      alt=""
                      className="optimize-shape-2 d-none d-md-block"
                      data-parallax='{"y": 50, "smoothness": 20}'
                    />
                    <Image
                      src={optimize_img_4} 
                      alt=""
                      className="optimize-shape-3 d-none d-md-block"
                      data-parallax='{"y": 50, "smoothness": 20}'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default OptimizeAreaHomeFour;