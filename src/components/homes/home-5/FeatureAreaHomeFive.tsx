import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// features images
import feature_icon_1 from "@/assets/img/shape/feature-5-icon-1.png";
import feature_shape_1 from "@/assets/img/shape/feature-5-shape-1.png";
import feature_icon_2 from "@/assets/img/shape/feature-5-icon-2.png";
import feature_shape_2 from "@/assets/img/shape/feature-5-shape-2.png";

import icon_1 from "@/assets/img/shape/trafic-icon-1.png";
import icon_2 from "@/assets/img/shape/trafic-icon-2.png";

// features content data types
interface feature_content_type {
    feature_data: {
        id: number;
        cls: string;
        icon: StaticImageData;
        shape: StaticImageData;
        sub_title: string;
        title: string;
        feature_list: string[];
    }[];
    sub_title: string;
    title: string;
    agree: JSX.Element;
}
// features content 
const feature_content: feature_content_type = {
    feature_data: [
        {
            id: 1,
            cls: "",
            icon: feature_icon_1,
            shape: feature_shape_1,
            sub_title: "SEO",
            title: "Backlink checking & Monitoring",
            feature_list: ["Audit", "On page SEO", "Local SEO"],
        },
        {
            id: 2,
            cls: "feature-5-item-2",
            icon: feature_icon_2,
            shape: feature_shape_2,
            sub_title: "Web design",
            title: "Backlink checking & Monitoring",
            feature_list: ["Concept", "layout", "Programming"]
        },
    ],
    sub_title: "Website Traffic!",
    title: "Start the short analysis to find out where the priorities lie.",
    agree: <>I agree to the <span>Data Protection</span> <br /> Agreement.</>,
}
const { feature_data, sub_title, title, agree } = feature_content

const FeatureAreaHomeFive = () => {
    return (
        <>
            <section className="feature-area p-relative pb-95">
                <div className="feature-bg-shape"></div>
                <div className="container">
                    <div className="row">
                        {feature_data.map((item, i) =>
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className={`feature-5-item ${item.cls} mb-55`}>
                                    <div className="feature-5-icon p-relative mb-40">
                                        <Image src={item.icon} alt="theme-pure" />
                                        <div className="feature-5-icon-shape">
                                            <Image src={item.shape} alt="theme-pure" />
                                        </div>
                                        <span></span>
                                    </div>
                                    <div className="feature-5-content">
                                        <span>{item.sub_title}</span>
                                        <h4 className="feature-5-content-title mb-50">{item.title}</h4>
                                        <ul className="feature-5-list">
                                            {item.feature_list?.map((list, index) =>
                                                <li key={index}><i className="fa-sharp fa-solid fa-circle-check"></i> <span>{list}</span></li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="col-lg-4 col-md-6">
                            <div className="traffic-item traffic-bg mb-55">
                                <div className="traffic-item-content">
                                    <h4 className="traffic-item-content-title">{sub_title}</h4>
                                    <span>{title}</span>
                                </div>
                                <div className="traffic-item-form">
                                    <div className="web-item web-url p-relative">
                                        <input type="text" placeholder="https" />
                                        <i> <Image src={icon_1} alt="theme-pure" /> </i>
                                    </div>
                                    <div className="web-item web-mail p-relative">
                                        <input type="text" placeholder="email" />
                                        <Image src={icon_2} alt="theme-pure" />
                                    </div>
                                </div>
                                <div className="agreement">
                                    <div>
                                        <div className="switcher">
                                            <label htmlFor="toggle-0">
                                                <input type="checkbox" id="toggle-0" />
                                                <span><small></small></span>
                                                <small>{agree}</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="traffic-btn">
                                    <Link href="/marketing-analysis" className="light-blue-btn">Analysis Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureAreaHomeFive;