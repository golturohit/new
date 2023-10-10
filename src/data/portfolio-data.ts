

import { StaticImageData } from "next/image";
import portfolio_img_1 from "@/assets/img/portfolio/portfolio-1.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-2.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-3.jpg";
import portfolio_img_4 from "@/assets/img/portfolio/portfolio-4.jpg";
import portfolio_img_5 from "@/assets/img/portfolio/portfolio-5.jpg";
import portfolio_img_6 from "@/assets/img/portfolio/portfolio-6.jpg";


interface portfolio_data_type {
    id: number;
    img: StaticImageData;
    category: string;
    title: string;
}[]
const portfolio_data: portfolio_data_type[] = [
    {
        id: 1, 
        img: portfolio_img_1,
        category: "Marketing",
        title: "Online Media Management",
    },
    {
        id: 2, 
        img: portfolio_img_2,
        category: "Design",
        title: "Tips for the good UI Design",
    },
    {
        id: 3, 
        img: portfolio_img_3,
        category: "Marketing",
        title: "Sony Airpads Max",
    },
    {
        id: 4, 
        img: portfolio_img_4,
        category: "Design",
        title: "A1_Driven Security Solutions</",
    },
    {
        id: 5, 
        img: portfolio_img_5,
        category: "Design",
        title: "Tips for the good UI Design",
    },
    {
        id: 6, 
        img: portfolio_img_6,
        category: "Branding",
        title: "Twice Profit Than Before",
    },
    // update 
    {
        id: 1, 
        img: portfolio_img_1,
        category: "Design",
        title: "Online Media Management",
    },
    {
        id: 2, 
        img: portfolio_img_2,
        category: "Marketing",
        title: "Tips for the good UI Design",
    },
    {
        id: 3, 
        img: portfolio_img_3,
        category: "Design",
        title: "Sony Airpads Max",
    },
    {
        id: 4, 
        img: portfolio_img_4,
        category: "Design",
        title: "A1_Driven Security Solutions</",
    },
    {
        id: 5, 
        img: portfolio_img_5,
        category: "Branding",
        title: "Tips for the good UI Design",
    },
    {
        id: 6, 
        img: portfolio_img_6,
        category: "Marketing",
        title: "Twice Profit Than Before",
    },
]
export default portfolio_data