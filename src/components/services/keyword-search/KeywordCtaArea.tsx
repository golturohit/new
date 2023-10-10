import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import cta_bg from "@/assets/img/banner/cta-inner-bg-1.png";
import cta_shape_1 from "@/assets/img/shape/cta-shape-1.png";
import cta_shape_2 from "@/assets/img/shape/cta-shape-2.png";
import cta_shape_3 from "@/assets/img/shape/cta-shape-3.png";

// cta data type
type cta_content_type = {
	title: string;
	sm_des: JSX.Element;
	cta_shapes: {
		id: number;
		cls: string;
		img: StaticImageData;
	}[];
}
// cta content
const cta_content: cta_content_type = {
	title: "Grow your business today",
	sm_des: <>Enim cras in eget urna. Ut proin integer tempor, bibendum <br /> quam ullamcorper faucibus</>,
	cta_shapes: [
		{
			id: 1,
			cls: "1 d-none d-lg-block",
			img: cta_shape_1,
		},
		{
			id: 2,
			cls: "2 d-none d-lg-block",
			img: cta_shape_2,
		},
		{
			id: 3,
			cls: "3 d-none d-lg-block",
			img: cta_shape_3,
		},
	],
}
const { title, sm_des, cta_shapes } = cta_content

const KeywordCtaArea = () => {
	return (
		<>
			<section className="cta-area pt-15">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="cta-content mt-40">
								<h4 className="cta-title">{title}</h4>
								<p>{sm_des}</p>
								<div className="cta-btn">
									<Link className="tp-btn" href="/contact">Get in Touch</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7 align-self-end">
							<div className="cta-thumb p-relative">
								<div className="cta-main-bg d-flex justify-content-center">
									<Image src={cta_bg} alt="theme-pure" />
								</div>
								<div className="cta-shape">
									{cta_shapes.map((item, i) =>
										<div key={i} className={`cta-shape-${item.cls}`}>
											<Image src={item.img} alt="theme-pure" />
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default KeywordCtaArea;