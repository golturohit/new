"use client"
import Link from "next/link";
import Image from "next/image";
import HeaderSixLogo from "@/svg/logo/header_6";
import FooterFiveLogo from "@/svg/logo/FooterFiveLogo";
import PhoneIcon from "@/assets/img/icon/phone-icon.png";
import { CopyRight, SocialLinksTwo } from "@/components/common/social-links";
import AuditFooterLogo from "@/svg/logo/AuditFooterLogo";

// footer five data type
interface footer_five_content_type {
	sm_des: string;
	phone_number: string;
	btn_text: string;
	work_title: string;
	work_times: {
		id: number;
		day: string;
		time: string;
	}[];
	footer_link_data: {
		id: number;
		cls: string;
		title: string;
		links: {
			id: number,
			title: string,
			link: string,
		}[];
	}[];
}
// footer five content 
const footer_five_content: footer_five_content_type = {
	sm_des: "Best Award-winning SEO agency.!",
	phone_number: "(229) 888-5203",
	btn_text: "Enquire Now",
	work_title: "Information",
	work_times: [
		{ id: 1, day: "Working days:", time: "10AM - 8PM" },
		{ id: 2, day: "Saturday:", time: "19AM - 6PM" },
		{ id: 3, day: "Sunday:", time: "Closed" },
	],
	footer_link_data: [
		{
			id: 1,
			cls: "footer-5-col-2",
			title: "About",
			links: [
				{ id: 1, title: "Home", link: "/" },
				{ id: 2, title: "Pricing", link: "/pricing" },
				{ id: 3, title: "About us", link: "/about" },
				{ id: 4, title: "SEO Blog", link: "/blog-grid" },
				{ id: 5, title: "Services", link: "/service" },
				{ id: 6, title: "ontact", link: "/contact" },
				{ id: 7, title: "Why SEO?", link: "/seo-audit" },
				{ id: 8, title: "", link: "" },
				{ id: 9, title: "Team", link: "/team" },
			]
		},
		{
			id: 2,
			cls: "footer-5-col-3",
			title: "Expertise",
			links: [
				{ id: 1, title: "On Page SEO", link: "/seo-audit" },
				{ id: 2, title: "Keyword Research", link: "/keyword-search" },
				{ id: 3, title: "SEO Consulting", link: "/marketing-analysis" },
				{ id: 4, title: "Off Page SEO", link: "/keyword-search" },
				{ id: 5, title: "SEO Audit", link: "/seo-audit" },
			]
		},
	]

}
const { sm_des, phone_number, btn_text, work_title, work_times, footer_link_data } = footer_five_content

const FooterFive = ({ style, style_audit, style_2 }: any) => {
	return (
		<>
			<footer>
				<div className={`footer-area ${style ? "footer-inner" : ""} ${style_audit ? "footer-inner seo-audit-f" : ""} ${style_2 ? "fw-blog-details" : "footer-5"}  pt-100`}>
					<div className="container">
						<div className="footer-top">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="footer-widget footer-5-col-1 mb-40">
										<div className="footer-widget-logo mb-20">
											<Link href="/">
												<span>
													{style_audit ? <AuditFooterLogo />
														:
														<>{style ? <HeaderSixLogo /> : <FooterFiveLogo />}</>
													}
												</span>
											</Link>
										</div>
										<div className="footer-widget-content">
											<p className="footer-widget-text mb-20">{sm_des}</p>
											<div className="footer-widget-btn">
												<div className="phone-call">
													<a href="tel:0123456789">
														<i><Image src={PhoneIcon} alt="theme-pure" /></i><span>{phone_number}</span>
													</a>
												</div>
												<div className="submit-call">
													<button className="light-blue-btn">{btn_text}</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								{footer_link_data.map((item, i) =>
									<div key={i} className="col-lg-3 col-md-6 col-sm-6">
										<div className={`footer-widget tpfooter-hover ${item.cls} mb-40`}>
											<h4 className="footer-widget-title mb-15">{item.title}</h4>
											<div className="footer-widget-link">
												<ul>
													{item.links?.map((link, index) =>
														<li key={index}><Link href={link.link}>{link.title}</Link></li>
													)}
												</ul>
											</div>
										</div>
									</div>
								)}
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="footer-widget footer-5-col-4 mb-40">
										<h4 className="footer-widget-title mb-20">{work_title}</h4>
										<div className="footer-widget-link">
											<ul>
												{work_times.map((w_day, w_index) =>
													<li key={w_index}><span>{w_day.day}</span>{w_day.time}</li>
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-bottom-5">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-8">
									<div className="footer-widget-copyright">
										<span><CopyRight /> </span>
									</div>
								</div>
								<div className="col-lg-6 col-md-4">
									<div className="footer-widget-social text-end">
										<SocialLinksTwo />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default FooterFive;