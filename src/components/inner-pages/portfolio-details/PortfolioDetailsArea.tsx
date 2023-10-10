'use client'
import Link from "next/link";
import Image from "next/image";
import portfolio_details_1 from "@/assets/img/portfolio/details/portfolio-details-1.jpg"; 
import portfolio_details_2 from "@/assets/img/portfolio/details/portfolio-details-2.jpg"; 
import CheckBox from "@/svg/inner-pages-icons/CheckBox";
import PrevIcon from "@/svg/inner-pages-icons/PrevIcon";
import BoxIcon from "@/svg/inner-pages-icons/BoxIcon";
import NextIcon from "@/svg/inner-pages-icons/NextIcon";
import portfolio_data_2 from "@/data/portfolio-data-2";


type portfolio_details_content_type = {
    title: JSX.Element;
    features: {
        id: number;
        sub_title: string;
        title: string;
    }[];
    challenge_title: JSX.Element;
    challenge_text_title: string;
    challenge_fetures: string[];
    challenge_text_title_2: JSX.Element;
    challenge_title_2: string;
    challenge_text_title_3: string;
    challenge_fetures_lists: string[];
    challenge_title_3: string;
    challenge_text_title_4: string;
    prev_text: string;
    next_text: string;
}


const portfolio_details_content: portfolio_details_content_type = {
    title: <>Free 3d Curved Paper <br /> Mockup</>,
    features: [
        {
            id: 1,
            sub_title:"Client",
            title: "Invision Studio",
        },
        {
            id: 2,
            sub_title:"Services",
            title: "SEO Optimization",
        },
        {
            id: 3,
            sub_title:"Duration",
            title: "04 Months",
        },
        {
            id: 4,
            sub_title:"Website",
            title: "example.com",
        },
    ],
    challenge_title: <>Our <br /> Challenge</>,
    challenge_text_title: "Adipiscing ipsum dolor sit amet, consectetur Lorem elit lobortis arcu enim urna adipiscing praesent  If you see whence all this born error is the pleasure of those who accuse and those who praise pain.",
    challenge_fetures: [
        "Develop easy-to-find and easy-to-navigate mobile friendly website",
        "Showcase each type of content: interactive books, animated stories & picture books, audio stories. Create an experience people want to share with others",
        "Persuade to download app and subscribe",
    ],
    challenge_text_title_2: <>Stay focused & productive with a clean and clutter-free note space. The flexi bleways organize <br /> your notes: hashtags, nested notebooks, etc.!</>,
    challenge_title_2: "Solution & Result",
    challenge_text_title_3: "Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable",
    challenge_fetures_lists: [
        "Web Clipper Extension",
        "Automatically sync in real time",
        "Create & Save your notes with multi-media",
        "Complete note editor with rich text options",
    ],
    challenge_title_3: "Solution & Result",
    challenge_text_title_4: "Our approach was to present the site as a visual editorial platform with quarterly features based on events and occasions the brand was focused on. Each quarterly focus would be marked by the hero and custom tags that filter content. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable",
    prev_text: "Applications Design",
    next_text: "Creative Landing Page",

}
const { title, features , challenge_title, challenge_text_title, challenge_fetures, challenge_text_title_2, challenge_title_2, challenge_text_title_3, challenge_fetures_lists, challenge_title_3, challenge_text_title_4, prev_text, next_text} = portfolio_details_content

const PortfolioDetailsArea = () => {
    return (
        <>
            <section className="portfolio-area-start pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-details mb-95">
                                <div className="portfolio-details-top text-center">
                                    <h4 className="portfolio-details-title mb-50">{title}</h4>
                                </div>
                                <ul className="portfolio-details-info text-center pl-170 pr-170">
                                    {features.map((feature, i) => 
                                        <li key={i}>
                                            <div className="portfolio-details-info-item">
                                                <span>{feature.sub_title}</span>
                                                <p>{feature.title}</p>
                                            </div>
                                        </li>                                    
                                    )} 
                                </ul>
                                <div className="portfolio-details-thumb">
                                    <Image src={portfolio_details_1} alt="theme-pure" />
                                </div>
                                <div className="portfolio-details-content pt-65 pl-100 pr-100">
                                    <div className="portfolio-details-challenge mb-50">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3">
                                                <div className="challenge-title">
                                                    {challenge_title} 
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <div className="portfolio-details-challenge-text pl-50 mb-35">
                                                    <p>{challenge_text_title}</p>
                                                    <ul className="list">
                                                        {challenge_fetures.map((chal_item, chal_i) =>
                                                            <li key={chal_i}>{chal_item}</li> 
                                                        )} 
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <p>{challenge_text_title_2}</p>
                                    </div>
                                    <div className="portfolio-details-result mb-55">
                                        <h4 className="challenge-title">{challenge_title_2}</h4>
                                        <p>{challenge_text_title_3}</p>
                                        <ul>
                                            {challenge_fetures_lists.map((c_f_list, c_f_i) => 
                                                <li key={c_f_i}> <span> <CheckBox /> </span>{c_f_list}</li> 
                                            )} 
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-details-thumb">
                                    <Image src={portfolio_details_2} alt="theme-pure" />
                                </div>
                                <div className="portfolio-details-content pt-65 pl-100 pr-100">
                                    <div className="portfolio-details-result mb-55">
                                        <h4 className="challenge-title">{challenge_title_3}</h4>
                                        <p>{challenge_text_title_4} </p>
                                    </div>
                                </div>
                                <div className="portfolio-details-more d-flex align-items-center justify-content-between mt-65">
                                    <Link href="/portfolio-details" className="portfolio-details-prev d-flex align-items-center">
                                        <div className="portfolio-details-prev-icon d-none d-md-block">
                                            <span><PrevIcon /> </span>
                                        </div>
                                        <div className="portfolio-details-prev-content">
                                            <span>Prev</span>
                                            <p>{prev_text}</p>
                                        </div>
                                    </Link>
                                    <Link className="" href="/portfolio">
                                        <span> <BoxIcon /> </span>
                                    </Link>
                                    <Link href="/portfolio-details" className="portfolio-details-next d-flex align-items-center justify-content-md-end">
                                        <div className="portfolio-details-next-content text-md-end">
                                            <span>Next</span>
                                            <p>{next_text}</p>
                                        </div>
                                        <div className="portfolio-details-next-icon d-none d-md-block">
                                            <span> <NextIcon /> </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-details-related">
                                <h4 className="portfolio-details-related-title">Related Project:</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio_data_2.slice(0, 3).map((portfolio_item, index) => 
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="portfolio-inner-item-2 mb-40">
                                    <div className="portfolio-inner-thumb-2">
                                        <Image src={portfolio_item.img} alt="theme-pure" />
                                    </div>
                                    <div className="portfolio-inner-content-2">
                                        <div className="portfolio-inner-title-2"><Link href="/portfolio-details">{portfolio_item.title}</Link></div>
                                        <p>{portfolio_item.sm_des}</p>
                                        <div className="portfolio-inner-tag-2">
                                            <a href="#">Branding</a>{' '}
                                            <a href="#">Website</a>{' '}
                                            <a href="#">Design</a>{' '}
                                        </div>
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

export default PortfolioDetailsArea;