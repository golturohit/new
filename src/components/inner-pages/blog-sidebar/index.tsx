
import BlogSearch from "@/components/forms/BlogSearch";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import Tags from "./Tags";
import SocialLinks from "@/components/common/social-links";


type blog_sidebar_content_type = {
    widget_title: string;
    categories: string;
    tags: string;
    newsletter: string;
    newsletter_info: string;
    social: string;
    subscribe: string;
}
const blog_sidebar_content: blog_sidebar_content_type = {
    widget_title: "Recent Post",
    categories: "Categories",
    tags: "Tags",
    newsletter: "Newsletter",
    newsletter_info: "Register Now to Get Latest Updates On Promotions & Coupons.",
    social: "Social",
    subscribe: "Subscribe"
}
const { widget_title, categories, tags, newsletter, newsletter_info, social, subscribe } = blog_sidebar_content

const BlogSidebar = () => {
    return (
        <>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper ml-30">

                    <div className="sidebar__widget mb-20">
                        <div className="sidebar__widget-content">
                            <div className="sidebar__search">
                                <BlogSearch />
                            </div>
                        </div>
                    </div>

                    <div className="sidebar__widget mb-20">
                        <h3 className="sidebar__widget-title">{widget_title}</h3>
                        <div className="sidebar__widget-content">
                            <div className="sidebar__post rc__post">
                                <RecentPost />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar__widget mb-20">
                        <h3 className="sidebar__widget-title">{categories}</h3>
                        <Categories />
                    </div>
                    <div className="sidebar__widget mb-20">
                        <h3 className="sidebar__widget-title">{tags}</h3>
                        <div className="sidebar__widget-content">
                            <Tags />
                        </div>
                    </div>
                    <div className="sidebar__widget mb-20">
                        <h3 className="sidebar__widget-title">{social}</h3>
                        <div className="sidebar__widget-content">
                            <div className="sidebar__widget-social">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar__widget sidebar__newsletter mb-40">
                        <h3 className="sidebar__widget-title">{newsletter}</h3>
                        <p>{newsletter_info}</p>
                        <div className="sidebar__widget-content">
                            <div className="sidebar__widget-input">
                                <input type="email" placeholder="Type your email..." />
                                <button className="blog-btn" type="submit">{subscribe}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;