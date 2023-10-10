import Link from "next/link";
import Image from "next/image";
import SearchShape from "@/svg/search_shape";
import start_img from "@/assets/img/shape/rating-1.png";
// banner shape images
import banner_shape_1 from "@/assets/img/banner/banner-2-thumb-1.png";
import banner_shape_2 from "@/assets/img/banner/banner-2-shape-1.png";
import banner_shape_3 from "@/assets/img/banner/banner-2-shape-2.png";
import banner_shape_4 from "@/assets/img/banner/banner-2-shape-3.png";

interface hero_content_type {
    title: JSX.Element;
    sm_des: JSX.Element;
    ratting_text_1: string;
    ratting_text_2: string;
}
const hero_content: hero_content_type = {
    title: <><span>Search Engine <SearchShape /> </span> Optimization <br /> Made Easy.</>,
    sm_des: <>SEOMY makes it simple to design a good website <br /> take your idea online!</>,
    ratting_text_1: "Excellent",
    ratting_text_2: "Trustpilot",
}
const {title, sm_des, ratting_text_1, ratting_text_2}  = hero_content

const HeroBannerHomeTwo = () => {
    return (
        <>
            <div className="banner-area tpbanner-space-two" style={{backgroundImage: `url(/assets/img/banner/banner-2-bg-1.png)`}}>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7 order-2 order-md-1">
                        <div className="tpbanner-content-two">
                            <div className="tpbanner-title-two mb-20">{title}</div>
                            <p>{sm_des}</p>
                            <div className="tpbanner-two-btn mb-35">
                                <Link className="green-btn" href="/contact">Start Ranking Now</Link>
                            </div>
                            <div className="tpbanner-two-rating">
                                <span>{ratting_text_1}</span>
                                <Image src={start_img} alt="theme-pure" />
                                <p>{'  '}{ratting_text_2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 order-1 order-md-2">
                        <div className="tpbanner-two-shape p-relative" data-parallax='{"x": 15, "smoothness": 10}'>
                            <Image src={banner_shape_1} alt="theme-pure" />
                            <div className="tpbanner-two-shape-round">
                                <div className="tpbanner-two-shape-one">
                                    <Image src={banner_shape_2} alt="theme-pure" />
                                </div>
                                <div className="tpbanner-two-shape-two">
                                    <Image src={banner_shape_3} alt="theme-pure" />
                                </div>
                            </div>
                            <div className="tpbanner-two-shape-three">
                                <Image src={banner_shape_4} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBannerHomeTwo;