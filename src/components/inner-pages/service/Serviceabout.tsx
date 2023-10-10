"use client"
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import service_slider_img_1 from "@/assets/img/banner/about-inner-1.png";
import service_slider_img_2 from "@/assets/img/banner/about-inner-2.png";
import service_slider_img_3 from "@/assets/img/banner/about-inner-4.png";
import service_slider_img_4 from "@/assets/img/banner/about-inner-3.png";


interface service_about_data_type {
	slider_data: StaticImageData[];
	sub_title: string;
	title: JSX.Element;
	sm_info: JSX.Element;
	features_list: string[];
}
const service_about_data: service_about_data_type = {
	slider_data: [
		service_slider_img_1, service_slider_img_2, service_slider_img_3, service_slider_img_4, service_slider_img_1
	],
	sub_title: "Best SEO results?",
	title: <>Time to climb the rankings.</>,
	sm_info: <>Et proin odio elit tortor quis pretium ut. <br /> A Perth SEO agency that'll help you ascend <br /> to your goals.!</>,
	features_list: [
		"Mimics Google Search",
		"Purchase Intent Searches",
		"Highest Value Keywords",
	]
}
const { slider_data, sub_title, title, sm_info, features_list } = service_about_data

const setting = {
	dots: false,
	infinite: true,
	autoplaySpeed: 3000,
	autoplay: true,
	arrows: false,
	centerMode: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				centerMode: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				
			}
		}
	],
}
const Serviceabout = () => {
	const sliderRef = useRef(null)
	return (
		<>
			<section className="about-area p-relative pt-170 pb-180 about_bg" style={{ backgroundImage: `url(/assets/img/banner/about-inner-bg.jpg)` }}>
				<div className="fix">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<Slider {...setting} ref={sliderRef} className="about-inner-slide tpabout-inner-active">
									{slider_data.map((item, i) =>
										<div key={i} className="about-inner-item">
											<Image src={item} alt="theme-pure" />
										</div>
									)}
								</Slider>
							</div>
						</div>
					</div>
				</div>
				<div className="about-inner-box">
					<div className="about-inner-content-3">
						<span>{sub_title}</span>
						<h4 className="about-inner-title-3">{title}</h4>
						<p>{sm_info}</p>
						<ul className="about-inner-list">
							{features_list.map((item, i) =>
								<li key={i}><i className="fa-sharp fa-solid fa-circle-check"></i>{item}</li>
							)}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Serviceabout;