"use client"
import Image from "next/image";
import { useState } from 'react';
import VideoPopup from "@/componentsmodals/video-popup";
import about_bg_img from "@/assets/img/bg/about-5-bg-2.jpg";

import video_shape_1 from "@/assets/img/shape/video-blue.png";
import video_shape_2 from "@/assets/img/shape/video-white.png";

import about_shape_1 from "@/assets/img/shape/about-5-shape-1.svg";
import about_shape_2 from "@/assets/img/shape/about-5-shape-2.svg";

const about_content = {
	sub_title: "Abour Us",
	title: "Meet pure visibility",
	sm_des: "Our experience spans a wide range of industries, fromhealthcare and <br /> ecommerce to multi-location businesses",
	about_data: [
		{
			id: 1,
			cls: "about-5-item",
			img: about_shape_1,
			info: <>We pride our selves on working <br /> as an extension of your marketing <br /> team & making tailored to your <br /> industry, business goals.</>,
		},
		{
			id: 2,
			cls: "about-5-item about-5-item-2",
			img: about_shape_2,
			info: <>We work with the teams that build <br /> brands to understand, improve, <br /> and protect.</>,
		},
	]

}
const { sub_title, title, sm_des, about_data } = about_content

const AboutAreaHomeFive = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<>
			<section className="about-area pb-60">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="about-5">
								<div className="about-5-section mb-70">
									<span className="sub-title">{sub_title}</span>
									<h4 className="title">{title}</h4>
									<p>{sm_des}</p>
								</div>
								<div className="about-5-content">
									<div className="row">
										{about_data.map((item, i) =>
											<div key={i} className="col-lg-6 col-md-6">
												<div className={item.cls}>
													<div className="about-5-item-title mb-20">
														<span>
															<Image src={item.img} alt="theme-pure" />
														</span>
													</div>
													<div className="about-5-item-text">
														<p>{item.info}</p>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="about-5-thumb p-relative">
								<Image className="tpchoose-border-anim" src={about_bg_img} alt="theme-pure" />
								<a
									onClick={() => setIsVideoOpen(true)}
									style={{ cursor: "pointer" }}
									className="popup-video">
									<div className="about-5-shape">
										<div className="about-5-shape-one">
											<Image src={video_shape_1} alt="theme-pure" />
										</div>
										<div className="about-5-shape-two">
											<Image src={video_shape_2} alt="theme-pure" />
										</div>
										<div className="about-5-video-icon">
											<i className="fa-solid fa-play"></i>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* video modal start */}
			<VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={"TYYf8zYjP5k"}
			/>
			{/* video modal end */}
		</>
	);
};

export default AboutAreaHomeFive;