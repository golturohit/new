"use client"
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import PrevArrow from "@/svg/prev-arrow";
import NextArrow from "@/svg/next_arrow";
import service_data from "@/data/service-data";
import BGShapetwo from "@/svg/bg_shape_2";


// slider setting
const setting = {
	fade: false,
	autoplay: false,
	arrows: false,
	slidesToShow: 2,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	],
}

const CaseAreaHomeOne = () => {
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
			<section className="case-area pb-140 fix">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-8">
							<div className="tpsection__wrapper mb-45">
								<div className="tpbanner__sub-title mb-15">
									<span>Featured Projects</span>
									<i><BGShapetwo /> </i>
								</div>
								<h2 className="tpsection__title">Our Case Studies</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-4">
							<div className="tpcase-arrow text-end">
								<div className="tpcase-nav p-relative">
									<button type="button" className="prev-slide prev-slide-case" onClick={handlePrev}> <PrevArrow /> </button>
									<button type="button" className="next-slide next-slide-case" onClick={handleNext}> <NextArrow /> </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<Slider {...setting} ref={sliderRef} className="row tpcase-active p-relative">
						{service_data.map((item, i) =>
							<div key={i} className="col-lg-6">
								<div className="tpcase">
									<div className="tpcase-thumb w-img">
										<Image src={item.img} alt="theme-pure" />
									</div>
									<div className="tpcase-content">
										<div className="tpcase-tag mb-15">
											<span>{item.category_1}</span> {' '}
											<span>{item.category_2}</span>
										</div>
										<h3 className="tpcase-title">
											<Link href="/portfolio-details">{item.title}</Link>
										</h3>
									</div>
								</div>
							</div>
						)}
					</Slider>
				</div>
			</section>
		</>
	);
};

export default CaseAreaHomeOne;