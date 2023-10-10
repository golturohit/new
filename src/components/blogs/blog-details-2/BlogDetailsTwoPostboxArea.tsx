import Link from "next/link";
import Image from "next/image";

import CommentForm from "@/components/forms/CommentForm"; 
import NextDetailsIcon from "@/svg/blogs_icon/NextDetailsIcon";
import PrevDetailsIcon from "@/svg/blogs_icon/PrevDetailsIcon";
import blog_img_1 from "@/assets/img/blog/blog-details-2.jpg";
import blog_img_2 from "@/assets/img/blog/post-box-thumb-1.jpg"; 
import PostComments from "../blog-details/PostComments";


const blog_details_2_content = {
	title_1: "Perfect From Beginning to End",
	title_2: "“Success is the result of perfection, hard work, learning from failure, loyalty, and persistence”",
	title_3: "Quidem Facere aut Veritatis Saepe Quia Molestias Voluptatem.",
	title_4: "Set Up Google Search Console",
	title_5: "Set Up Google Search Console",
	title_6: "Recommended Reading",

	sm_des_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing
		praesent
		velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh
		justo, lorem
		aliquet donec sed sit mi dignissim at ante massa mattis.If you see whence all this born error
		is the
		pleasure of those who accuse and those who praise pain, I will open the whole matter, and I
		will explain
		the very things which were said by that discoverer of truth </>,
	sm_des_2: <>I will explain. For no one despises or hates or runs away from pleasure because it is
		pleasure, because
		great pains result to those who do not know how to follow pleasure with reason. Nor,
		moreoveris there
		any one who, because he likes pain, pursues it, wants to gain it, but because such times
		never occur in
		which he seeks some great pleasure through labor and pain.</>,
	sm_des_3: <>Even if you don’t have directories you want to disallow from indexing, having a robots.txt
		file is a best
		practice since it also points crawl bots to your sitemap.Not sure if you already have a
		robots.txt file? <br />
		Go to yourdomain.com/robots.txt. If you see a file, you’re all set. If not, Yoast can help
		you generate
		one, or you can manually create one using a text editor and upload it to the root of your
		domain. Once
		your file is in place, use Google’s tester tool to verify everything works correctly.</>,
	sm_des_4: <>Pug twee fam pour-over seitan single-origin coffee crucifix blue bottle aesthetic
		flexitarian. Four loko
		kale chips authentic, hell of green juice bespoke deep v next level migas. Woke bushwick
		prism live
		edge austin tote bag.</>,
	quote_write: "Guy Hawkins",

	fetures_list: [
		"Google Analytics Starter Guide — Best Beginner SEO Reports",
		"How To Add a User to Google Analytics",
		"How To Measure Website Traffic with Google Analytics",
		"How To Track SEO Conversions: 10 Metrics To Measure",
		"How To Set Up Google Analytics Goals",
	],
	tags_list: [
		"Technology",
		"Envato",
		"Keywords",
		"SEO",
		"WordPress",
		"SEO Report",
	],
}
const {
	title_1,
	title_2,
	title_3,
	title_4,
	title_5,
	title_6,
	sm_des_1,
	sm_des_2,
	sm_des_3,
	sm_des_4,
	quote_write,
	fetures_list,
	tags_list
} = blog_details_2_content


const BlogDetailsTwoPostboxArea = () => {
	return (
		<>
			<section className="postbox-area pb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog-details-2-thumb text-center mb-50">
								<Image src={blog_img_1} alt="theme-pure" />
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="postbox-main">
								<div className="postbox-single-text mb-40">
									<h3 className="postbox-title mb-15">{title_1}</h3>
									<p>{sm_des_1}</p>
								</div>
								<div className="postbox-quote">
									<h4 className="postbox-quote-title">{title_2}</h4>
									<span>By: {quote_write}</span>
								</div>
								<div className="postbox-single-box">
									<h4 className="blog-details-title">{title_3}</h4>
									<p>{sm_des_2}</p>
								</div>
								<div className="postbox-content mb-50">
									<h3 className="postbox-title">{title_4}</h3>
									<p>{sm_des_3}</p>
								</div>
								<div className="postbox-img">
									<Image src={blog_img_2} alt="theme-pure" />
								</div>
								<div className="postbox-feature mb-30">
									<h4 className="postbox-feature-title">{title_5}</h4>
									<p>
										{sm_des_4}
									</p>
									<span>{title_6}</span>
									<ul>
										{fetures_list.map((list, i) =>
											<li key={i}>{list}</li>
										)}
									</ul>
								</div>
								<div className="tagcloud">
									{tags_list.map((tag, index) => <a key={index} href="#">{tag}</a>)}
								</div>
							</div>
							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="postbox-more-left mb-55">
										<div className="postbox-more-icon">
											<Link href="/blog-details">
												<span>
													<PrevDetailsIcon />
												</span>
												Previous
											</Link>
										</div>
										<div className="postbox-more-content">
											<span><Link href="/blog-details">10 Quick Tips About Blogging</Link></span>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="postbox-more-right mb-55">
										<div className="postbox-more-icon text-md-end">
											<Link href="/blog-details">
												Next
												<span>
													<NextDetailsIcon />
												</span>
											</Link>
										</div>
										<div className="postbox-more-content d-flex align-items-center justify-content-md-end">
											<span className="text-end"><a href="blog-deatails.html">Getting Ready To Google
												Sitelinks</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="postbox-author d-flex mb-95">
								<div className="postbox-author-thumb">
									<img src="assets/img/blog/comments/postbox-author-1.png" alt="theme-pure" />
								</div>
								<div className="postbox-author-content">
									<span>About Author</span>
									<h4 className="postbox-author-title">Peter Bowman</h4>
									<p>Eget lorem dolor sed viverra ipsum nunc aliqueted bibendum felis donec et odio pellentesque
										diames volutpat commodo.</p>
									<div className="postbox-author-social">
										<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i className="fa-brands fa-twitter"></i></a>
										<a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
										<a href="#"><i className="fa-brands fa-instagram"></i></a>
									</div>
								</div>
								<span></span>
							</div>
							<div className="postbox-comment mb-100">
								<h3 className="postbox-comment-title mb-35">3 Comments</h3>
								<PostComments />
							</div>
							<div className="postbox-comment-form">
								<h3 className="postbox-comment-form-title">Leave a Comment</h3>
								<p>Your email address will not be published. Required fields are marked *</p>
								<CommentForm />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetailsTwoPostboxArea;