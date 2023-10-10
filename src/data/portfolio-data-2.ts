

import { StaticImageData } from "next/image";
import portfolio_img_1 from "@/assets/img/portfolio/portfolio-2/portfolio-1.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-2/portfolio-2.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-2/portfolio-3.jpg";
import portfolio_img_4 from "@/assets/img/portfolio/portfolio-2/portfolio-4.jpg";
import portfolio_img_5 from "@/assets/img/portfolio/portfolio-2/portfolio-5.jpg";
import portfolio_img_6 from "@/assets/img/portfolio/portfolio-2/portfolio-6.jpg";


interface portfolio_data_2_type {
    id: number;
    img: StaticImageData;
    category: string,
    title: string;
    sm_des: string;
}[]

const portfolio_data_2: portfolio_data_2_type[] = [
    {
        id: 1, 
        img: portfolio_img_1,
        category: "Marketing", 
        title: "Ad Campaign",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 2, 
        img: portfolio_img_2,
        category: "Branding",
        title: "Digital Art",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 3, 
        img: portfolio_img_3,
        category: "Design",
        title: "Landing Page",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 4, 
        img: portfolio_img_4,
        category: "Website",
        title: "Applications",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 5, 
        img: portfolio_img_5,
        category: "SEO",
        title: "Website",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 6, 
        img: portfolio_img_6,
        category: "Marketing",
        title: "Strategic",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    // update
    {
        id: 1, 
        img: portfolio_img_1,
        category: "Branding", 
        title: "Ad Campaign",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 2, 
        img: portfolio_img_2,
        category: "Marketing",
        title: "Digital Art",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 3, 
        img: portfolio_img_3,
        category: "Website",
        title: "Landing Page",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 4, 
        img: portfolio_img_4,
        category: "DesignWebsite",
        title: "Applications",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 5, 
        img: portfolio_img_5,
        category: "Marketing",
        title: "Website",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
    {
        id: 6, 
        img: portfolio_img_6,
        category: "SEO",
        title: "Strategic",
        sm_des: "They produce really great content that also performs well when it comes to SEO.",
    },
]
export default portfolio_data_2