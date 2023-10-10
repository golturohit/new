"use client"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Image, { StaticImageData } from "next/image";
import WellcomeShape from "@/svg/wellcome_shape";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/banner-tree.png";
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";
import HeroSearchForm from "@/components/forms/HeroSearchForm";

interface shapes_img_type {
	img: StaticImageData;
	cls: string;
	data_depth: string;
}

const shapes_img: shapes_img_type[] = [
	{ img: shape_1, cls: "one", data_depth: "0.3" },
	{ img: shape_2, cls: "three", data_depth: "0.4" },
	{ img: shape_3, cls: "four", data_depth: "0.1" },
	{ img: shape_4, cls: "five", data_depth: "0.2" },
	{ img: shape_5, cls: "six", data_depth: "0.3" },
]
const hero_banner_content = {
	sub_title: "Welcome To",
	title: "SEO Marketing & Agency.",
	sm_des: <>Ensuring the best return on investment for your bespoke SEO <br /> Campaign requirement.</>,
}
const { sub_title, title, sm_des } = hero_banner_content

const BannerHomeOne = () => {
	return (
		<>
			<MouseParallaxContainer>
				<section className="banner__area tpbanner-space scene tpbanner-shape-wrapper fix"
					style={{ backgroundImage: `url(/assets/img/banner/banner-1.png)` }}>
					<div className="tpbanner-shape-wrappers">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-8">
									<div className="tpbanner__content text-center">
										<div className="tpbanner__sub-title mb-15">
											<span>{sub_title}</span>
											<i><WellcomeShape /></i>
										</div>
										<h1 className="tpbanner__title mb-25 pb-10">{title}</h1>
										<p>{sm_des}</p>
										<div className="tpbanner__search">
											<HeroSearchForm />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tpbanner-shape  d-none d-lg-block">
							<MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-one" >
								<Image className="layer" data-depth="0.3" src={shape_1} alt="theme-pure" />
							</MouseParallaxChild>
							<MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-three">
								<Image className="layer" data-depth="0.4" src={shape_2} alt="theme-pure" />
							</MouseParallaxChild>
							<MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-four">
								<Image src={shape_3} alt="theme-pure" />
							</MouseParallaxChild >
							<MouseParallaxChild  factorX={0.02} factorY={0.02}  className="tpbanner-shape-five">
								<Image className="layer" data-depth="0.2" src={shape_4} alt="theme-pure" />
							</MouseParallaxChild>
							<MouseParallaxChild factorX={0.07} factorY={0.07} className="tpbanner-shape-six">
								<Image className="layer" data-depth="0.3" src={shape_5} alt="theme-pure" />
							</MouseParallaxChild>
						</div>
					</div>
					<MouseParallaxChild factorX={0} factorY={0.1} className="tpbanner-shape-wrappers tpbanner-shape-y scene-y">
						<div className="tpbanner-shape  d-none d-md-block">
							<div className="tpbanner-shape-two" >
								<Image className="layer" data-depth="0.6" src={shape_1_2} alt="theme-pure" />
							</div>
						</div>
					</MouseParallaxChild>
				</section>
			</MouseParallaxContainer>
		</>
	);
};

export default BannerHomeOne;