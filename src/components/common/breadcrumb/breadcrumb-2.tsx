"use client"
import Image  from 'next/image';
import hand_img from "@/assets/img/shape/inner-hand-1.png";
import breadcrumb_shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import breadcrumb_shape_2 from "@/assets/img/shape/about-inner-shape-2.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
 

const BreadcrumbTwo = () => { 
    return (
        <>
            <MouseParallaxContainer className="breadcrumb-services-area services-details-bg scene breadcrumb-bg p-relative">
                <div className="about-inner-shape">
                    <MouseParallaxChild factorX={0.07} factorY={0.07} className="about-inner-shape-2">
                        <Image className="layer" data-depth="0.5" src={breadcrumb_shape_1} alt="theme-pure" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.07} factorY={0.07} className="about-inner-shape-3">
                        <Image className="layer" data-depth="0.5" src={breadcrumb_shape_2} alt="theme-pure" />
                    </MouseParallaxChild>
                </div>
                <MouseParallaxChild factorX={0} factorY={0.1} className="tpbanner-shape-y scene-y">
                    <div className="about-inner-shape-4 d-none d-lg-block">
                        <Image className="layer" data-depth="0.6" src={hand_img} alt="theme-pure" />
                    </div>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </>
    );
};

export default BreadcrumbTwo;