"use client"
import { useRef } from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import QuteIcon from "@/svg/qute_icon";
import PrevArrow from "@/svg/prev-arrow";
import NextArrow from "@/svg/next_arrow";
import testimonial_data from "@/data/tptestimonial-data";
import avatart_img from "@/assets/img/team/test-avatar-bg-1.png";

// slider setting 
const setting = {
	fade: false,
	autoplay: false,
	centerMode: true,
	centerPadding: '509px',
	slidesToShow: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 1,
				centerPadding: '400px',
			}
		},
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 1,
				centerPadding: '200px',
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 1,
				centerPadding: '200px',
			}
		},
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 1,
				centerPadding: '150px',
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				centerPadding: '120px',
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				centerPadding: '50px',
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerPadding: '10px',
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerPadding: '5px',
			}
		}
	],
}

type testimonial_content_type = {
	title: string;
	sm_info: string;
}
const testimonial_content: testimonial_content_type = {
	title: "Client love us & we love them",
	sm_info: "Trusted by over 4,000 clients worldwide",
}
const { title, sm_info } = testimonial_content

const TestimonialAreaHomeOne = () => {
	const sliderRef = useRef<Slider | null>(null);
	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	return (
		<>
			<section className="textimonial-area pb-120 fix">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="tpsection__content text-center mb-60">
								<div className="tptestimonial-avatar-bg mb-15">
									<Image src={avatart_img} alt="theme-pure" />
								</div>
								<h2 className="tpsection__title">{title}</h2>
								<p>{sm_info}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="tptestimonial-wrap p-relative">
						<Slider {...setting} ref={sliderRef} className="tptestimonial-wrapper tptestimonial-active">
							{testimonial_data.map((item, i) =>
								<div key={i} className="tptestimonial team_testimonial p-relative d-flex align-items-center">
									<div className="tptestimonial-thumb mr-40">
										<Image src={item.img} alt="theme-pure" />
									</div>
									<div className="tptestimonial-content">
										<div className="tptestimonial-shape mb-20">
											<i> <QuteIcon /> </i>
										</div>
										<p>{item.info}</p>
										<div className="tptestimonial-avatar-info">
											<h5 className="tptestimonial-avatar-title">{item.avatar_name}</h5>
											<span>{item.job_title}</span>
										</div>
									</div>
								</div>
							)}
						</Slider>
						<div className="testimonial-fixed-bg fix"></div>
						<div className="tptestimonial-arrow">
							<div className="testimonial-arrows p-relative">
								<button type="button" className="prev-slide prev-testimonial" onClick={handlePrev}> <PrevArrow /> </button>
								<button type="button" className="next-slide next-testimonial" onClick={handleNext}> <NextArrow /> </button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default TestimonialAreaHomeOne