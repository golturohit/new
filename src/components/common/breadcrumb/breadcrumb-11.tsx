import Image from "next/image";
import Link from "next/link";
import avater_img from "@/assets/img/blog/comments/blog-details-avatar-1.png";
import ClockBlogIcon from "@/svg/blogs_icon/ClockBlogIcon";
import CommentBlogIcon from "@/svg/blogs_icon/CommentBlogIcon";
import ViewsBlogIcon from "@/svg/blogs_icon/ViewsBlogIcon";


type breadcrumb_11_content_type = {
	category: string;
	title: JSX.Element;
	user_name: string;
	time: string;
	total_comments: string;
}
const breadcrumb_11_content: breadcrumb_11_content_type = {
	category: "Technical SEO",
	title: <>10 Quick Tips About <br /> Blogging</>,
	user_name: "Jim Séchen",
	time: "Oct 16,2023",
	total_comments: "05",

}
const { category, title, user_name, time, total_comments } = breadcrumb_11_content

const BreadcrumbElever = () => {
	return (
		<>
			<section className="blog-details-area blog-details-2-bg pb-50 pt-170">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog-details-content text-center">
								<div className="blog-details-tag">
									<span><Link href="/blog-details">{category}</Link></span>
								</div>
								<h4 className="blog-details-banner-title">{title}</h4>
								<div className="blog-details-meta">
									<span className="blog-details-meta-author">
										<a href="#">
											<Image src={avater_img} alt="theme-pure" />
											{user_name}
										</a>
									</span>
									<span> <i> <ClockBlogIcon /> </i>
										{time}
									</span>
									<span>
										<a href="#">
											<i> <CommentBlogIcon />  </i>
											{total_comments} Comment
										</a>
									</span>
									<span>
										<i> <ViewsBlogIcon /> </i> Views
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbElever;