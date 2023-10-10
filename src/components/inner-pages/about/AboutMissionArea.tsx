import Image from "next/image";
import smill_shape_1 from "@/assets/img/shape/smill.png";

import text_img_1 from "@/assets/img/shape/about-5-shape-1.svg";
import text_img_2 from "@/assets/img/shape/about-5-shape-2.svg";
import mission_shap_1 from "@/assets/img/shape/mission-shape-1.png";
import mission_shap_2 from "@/assets/img/shape/mission-shape-2.png";

type about_content_type = {
  sm_info_1: string;
  sm_info_2: string;
};

const about_content: about_content_type = {
  sm_info_1:
    "e are in business to develop an SEO software that allows anyone to independently optimize and promote a website on the web, regardless of the level of expertise.",
  sm_info_2:
    "We aim to constantly improve the user experience, functionality, and support to provide the best possible options for search engine optimization.",
};
const {sm_info_1, sm_info_2} = about_content;

const AboutMissionArea = () => {
  return (
    <>
      <div className="mission-area pb-120 pt-100" id="our-misson">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-content">
                <span>
                  <Image src={text_img_1} alt="theme-pure" />
                </span>
                <p>{sm_info_1}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-shape p-relative d-none d-lg-block">
                <div className="mission-shape-1">
                  <Image src={smill_shape_1} alt="triangle" />
                </div>
              </div>
            </div>
          </div>
          <div className="mission-two">
            <div className="row">
              <div className="col-lg-4">
                <div className="mission-shape p-relative  d-none d-lg-block">
                  <div className="mission-shape-2">
                    <Image src={mission_shap_1} alt="theme-pure" />
                  </div>
                  <div className="mission-shape-3">
                    <Image src={mission_shap_2} alt="theme-pure" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="mission-content">
                  <span>
                    <Image src={text_img_2} alt="theme-pure" />
                  </span>
                  <p>{sm_info_2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMissionArea;
