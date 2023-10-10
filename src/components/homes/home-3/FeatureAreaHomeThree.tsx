import Link from "next/link";
import Image from "next/image";

import feature_thumb_1  from "@/assets/img/bg/project-bg-1.jpg";
import feature_shape_1  from "@/assets/img/shape/feature-shape-1.png";
import feature_shape_2  from "@/assets/img/shape/feature-shape-2.png";

import feature_thumb_2  from "@/assets/img/bg/project-bg-2.jpg";
import feature_shape_3  from "@/assets/img/shape/feature-shape-3.png";
import feature_shape_4  from "@/assets/img/shape/feature-shape-4.png";
import feature_shape_5  from "@/assets/img/shape/feature-shape-5.png";

import feature_thumb_3  from "@/assets/img/bg/project-bg-3.png";
import feature_shape_6  from "@/assets/img/shape/feature-shape-6.png";


const feature_content ={
    title: "Tools to dominate your competitors",
    feature_title_1: "Rank Tracker",
    feature_title_info_1: "Analyses your ranking",
    feature_title_2: "Reporting",
    feature_title_info_2: "Analyses your ranking",
    feature_title_3: "Site Audit",
    feature_title_info_3: "Analyses your ranking",
}
const { 
	title, 
	feature_title_1,
	feature_title_info_1,
	feature_title_2,
	feature_title_info_2,
	feature_title_3,
	feature_title_info_3,
} = feature_content

const FeatureAreaHomeThree = () => {
    return (
        <>
            <section className="feature-area feature-wrapper theme-bg-4 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="tpsection-wrapper text-center mb-60">
                            <h2 className="tpsection-title-white-2">{title}</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-item mb-90">
                                <div className="feature-thumb p-relative mb-40">
                                    <Image src={feature_thumb_1} className="feature_thumb" alt="theme-pure" />
                                    <div className="feature-shape-one">
                                    <Image src={feature_shape_1} alt="theme-pure" />
                                    </div>
                                    <div className="feature-shape-two">
                                    <Image src={feature_shape_2} alt="theme-pure" />
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h5 className="feature-title mb-10">{feature_title_1}</h5>
                                    <span>{feature_title_info_1}</span>
                                </div>
                                <div className="feature-btn">
                                    <Link href="/marketing-analysis" className="radient-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-item-3 mb-90">
                                <div className="feature-item">
                                    <div className="feature-thumb p-relative mb-40">
                                        <Image src={feature_thumb_2} alt="theme-pure" />
                                    <div className="feature-shape-three">
                                        <Image src={feature_shape_3} alt="theme-pure" />
                                    </div>
                                    <div className="feature-shape-four">
                                        <Image src={feature_shape_4} alt="theme-pure" />
                                    </div>
                                    <div className="feature-shape-five">
                                        <Image src={feature_shape_5} alt="theme-pure" />
                                    </div>
                                    </div>
                                    <div className="feature-content">
                                    <h5 className="feature-title mb-10">{feature_title_2}</h5>
                                    <span>{feature_title_info_2}</span>
                                    </div>
                                    <div className="feature-btn">
                                    <Link href="social-services" className="radient-btn">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-item mb-90">
                                <div className="feature-thumb p-relative mb-40">
                                    <Image src={feature_thumb_3} alt="theme-pure" />
                                    <div className="feature-shape-six">
                                    <Image src={feature_shape_6} alt="theme-pure" />
                                    </div>
                                    {/* <div className="feature-shape-two">
                                    <img src="assets/img/shape/feature-shape-7.png" alt="theme-pure" />
                                    </div> */}
                                </div>
                                <div className="feature-content">
                                    <h5 className="feature-title mb-10">{feature_title_3}</h5>
                                    <span>{feature_title_info_3}</span>
                                </div>
                                <div className="feature-btn">
                                    <Link href="/seo-audit" className="radient-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>      
            </section>
        </>
    );
};

export default FeatureAreaHomeThree;