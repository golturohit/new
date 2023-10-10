'use client'
import Link  from 'next/link';
import Image  from 'next/image';

import inner_shape from "@/assets/img/shape/inner-hand-1.png";
import banner_img from "@/assets/img/about/about-inner-1.jpg";
import breadcrumb_shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import breadcrumb_shape_2 from "@/assets/img/shape/about-inner-shape-2.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

type breadcrumb_content_type = {
    top_title: string;
    title: string;
    sub_title: string;
    inner_title: string;
    inner_info: JSX.Element;

}
const breadcrumb_content: breadcrumb_content_type = {
    top_title: "About Us",
    title: "About Us",
    sub_title: "sub_title",
    inner_title: "Working Hard to Make SEO Easy. Together",
    inner_info: <>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</>,
}
const {top_title, title, sub_title, inner_title, inner_info}  = breadcrumb_content


const Breadcrumb = () => { 
    return (
        <>
            <MouseParallaxContainer className="breadcrumb-about-area scene p-relative breadcrumb-bg">
                <div className="about-inner-shape">
                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="about-inner-shape-2 d-none d-md-block">
                        <Image className="layer" data-depth="0.5" src={breadcrumb_shape_1} alt="theme-pure" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="about-inner-shape-3 d-none d-md-block">
                        <Image className="layer" data-depth="0.5" src={breadcrumb_shape_2} alt="theme-pure" />
                    </MouseParallaxChild>
                </div>
                <MouseParallaxChild factorX={0} factorY={0.2} className="tpbanner-shape-y scene-y">
                    <div className="about-inner-shape-4 d-none d-md-block">
                    <Image className="layer" data-depth="0.6" src={inner_shape} alt="theme-pure" />
                    </div>
                </MouseParallaxChild>
                {/* <!-- breadcrumb-area-start --> */}
                <section className="breadcrumb-area pb-115 pt-195">
                    <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">{top_title}</h3>
                                <div className="breadcrumb__list">
                                <span><Link href="/">Home</Link></span>
                                <span className="dvdr"></span>
                                <span>{title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* <!-- breadcrumb-area-end --> */}
                {/* <!-- about-area-start --> */}
                <section className="about-area pb-75 p-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-inner-thumb">
                                    <div className="about-inner-shape-1">
                                    <Image src={banner_img} alt="theme-pure" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner-content">
                                    <span>{sub_title}</span>
                                    <h4 className="about-inner-title">{inner_title}</h4>
                                    <p>{inner_info}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- about-area-end --> */}
            </MouseParallaxContainer>
        </>
    );
};

export default Breadcrumb;