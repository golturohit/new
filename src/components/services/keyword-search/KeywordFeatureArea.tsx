import Image, { StaticImageData } from "next/image";

import analysis_shape_1 from "@/assets/img/services/analysis/services-analysis-bg-1.png";
import analysis_shape_2 from "@/assets/img/services/analysis/services-analysis-bg-2.png";
import analysis_shape_3 from "@/assets/img/services/analysis/services-analysis-bg-3.png";

import seo_analysis_shape_1 from "@/assets/img/services/analysis/services-analysis-shape-1.png";
import seo_analysis_shape_2 from "@/assets/img/services/analysis/services-analysis-shape-2.png";
import seo_analysis_shape_3 from "@/assets/img/services/analysis/services-analysis-shape-3.png";

import shape_1 from "@/assets/img/services/analysis/services-analysis-shape-6.png";
import shape_2 from "@/assets/img/services/analysis/services-analysis-shape-7.png";
import shape_3 from "@/assets/img/services/analysis/services-analysis-shape-4.png";
import shape_4 from "@/assets/img/services/analysis/services-analysis-shape-5.png";
import shape_5 from "@/assets/img/services/analysis/services-analysis-shape-8.png";
import shape_6 from "@/assets/img/services/analysis/services-analysis-shape-9.png";

// keyword feature data type 
interface keyword_feature_content_type {
	sub_title: string;
	title?: JSX.Element;
	title_2?: string,
	features_list: {
		id: number;
		col_md: number;
		wrap_cls: string;
		thumb_cls: string;
		bg_cls: string;
		img: StaticImageData;
		inner_item: {
			id: number,
			img: StaticImageData,
			cls: number,
		}[];
		shape_cls: number;
		seo_shape: StaticImageData;
		count_cls: string;
		title: JSX.Element;
	}[];
}
// keyword feature content 
const keyword_feature_content: keyword_feature_content_type = {
	sub_title: "How we do it",
	title: <>The smart choice for <br /> smart SEO</>,
	title_2: "Your free SEO analysis.",
	// feature data 
	features_list: [
		{
			id: 1,
			col_md: 6,
			wrap_cls: "",
			thumb_cls: "",
			bg_cls: "seo-analysis-bg",
			img: analysis_shape_1,
			inner_item: [
				{
					id: 1,
					img: shape_1,
					cls: 2,
				},
				{
					id: 2,
					img: shape_2,
					cls: 3,
				}
			],
			shape_cls: 1,
			seo_shape: seo_analysis_shape_1,
			count_cls: "",
			title: <>Brainstorming and Creative ideas & Research</>,
		},
		{
			id: 2,
			col_md: 6,
			wrap_cls: "seo-analysis-wrap-2",
			thumb_cls: "text-center",
			bg_cls: "seo-analysis-bg-2",
			img: analysis_shape_2,
			inner_item: [
				{
					id: 1,
					img: shape_3,
					cls: 5,
				},
				{
					id: 2,
					img: shape_4,
					cls: 6,
				},
				{
					id: 3,
					img: shape_5,
					cls: 7,
				}
			],
			shape_cls: 4,
			seo_shape: seo_analysis_shape_2,
			count_cls: "seo-analysis-thumb-count-2",
			title: <>Fully-Automated Keyword Grouping</>,
		},
		{
			id: 3,
			col_md: 5,
			wrap_cls: "",
			thumb_cls: "",
			bg_cls: "seo-analysis-bg-3",
			img: analysis_shape_3,
			inner_item: [
				{
					id: 1,
					img: shape_6,
					cls: 8,
				},
			],
			shape_cls: 9,
			seo_shape: seo_analysis_shape_3,
			count_cls: "",
			title: <>Helping to achieve <br /> more People</>,
		}
	],
}
const { sub_title, title, title_2, features_list } = keyword_feature_content

type style_type = {
	style?: any
}

const KeywordFeatureArea = ({ style }: style_type) => {
	return (
		<>
			<section className={`${style ? "seo-analysis-area pt-100" : "feature-area"} mb-75`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className={`section-inner-wrapper ${style ? "mb-115 text-center" : "mb-120"}`}>
								<span>{sub_title}</span>
								<h4 className="section-inner-title">{style ? title_2 : title}</h4>
							</div>
						</div>
					</div>
					<div className="row justify-content-between">
						{features_list.map((item, i) =>
							<div key={i} className={`col-lg-3 col-md-${item.col_md}`}>
								<div className={`seo-analysis-wrap ${item.wrap_cls} mb-40`}>
									<div className={`seo-analysis-thumb ${item.thumb_cls}`}>
										<div className={`${item.bg_cls} p-relative`}>
											<Image src={item.img} alt="theme-pure" />
											{item.inner_item?.map((inner_item, index) =>
												<div key={index} className={`seo-analysis-shape-${inner_item.cls}`}>
													<Image src={inner_item.img} alt="theme-pure" />
												</div>
											)}
										</div>
										<div className="seo-analysis-shape">
											<div className={`seo-analysis-shape-${item.shape_cls}`}>
												<Image src={item.seo_shape} alt="theme-pure" />
											</div>
										</div>
										{style ? <></> :
											<div className={`seo-analysis-thumb-count ${item.count_cls}`}>
												<span>0{item.id}</span>
											</div>
										}
									</div>
									<div className={`seo-analysis-content ${style ? "text-center" : ""}`}>
										{style ? <span>Strategic Thinking</span> : <></>}
										<h4 className="seo-analysis-title fs-18">{item.title}</h4>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default KeywordFeatureArea;