'use client'
import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import shape_2 from "@/assets/img/shape/about-inner-shape-2.png";
import shape_3 from "@/assets/img/shape/inner-hand-1.png";
import shape_4 from "@/assets/img/banner/pricing-banner-shape.png";

const BreadcrumbSix = () => {
    return (
        <>
            <MouseParallaxContainer className="breadcrumb-services-area pricing-inner-bg scene breadcrumb-bg p-relative">
                <div className="about-inner-shape">
                    <MouseParallaxChild factorX={0.1} factorY={0.2} className="about-inner-shape-2">
                        <Image className="layer" data-depth="0.5" src={shape_1} alt="theme-pure" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.2} className="about-inner-shape-3 d-none d-lg-block">
                        <Image className="layer" data-depth="0.5" src={shape_2} alt="theme-pure" />
                    </MouseParallaxChild>
                </div>
                <MouseParallaxChild factorX={0} factorY={0.2} className="tpbanner-shape-y scene-y">
                    <div className="about-inner-shape-4 d-none d-lg-block"> 
                        <Image className="layer" data-depth="0.6" src={shape_3} alt="theme-pure" />
                    </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.2} className="about-inner-shape-5 d-none d-lg-block">
                    <Image src={shape_4} alt="theme-pure" />
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </>
    );
};

export default BreadcrumbSix;