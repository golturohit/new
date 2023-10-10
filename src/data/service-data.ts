import { StaticImageData } from "next/image";

import service_img_1 from "@/assets/img/services/case-1.jpg";
import service_img_2 from "@/assets/img/services/case-2.jpg";
import service_img_3 from "@/assets/img/services/case-3.jpg";
import service_img_4 from "@/assets/img/services/case-4.jpg";



interface service_data_type {
    id: number;
    img: StaticImageData;
    category_1: string;
    category_2: string;
    title: string;
}
const service_data: service_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        category_1: "SEO Analysis",
        category_2: "Marketing",
        title: "Online Media Management",
    },
    {
        id: 2,
        img: service_img_2,
        category_1: "SEO Analysis",
        category_2: "Marketing",
        title: "Twice Profit Than Before",
    },
    {
        id: 3,
        img: service_img_3,
        category_1: "SEO Analysis",
        category_2: "Marketing",
        title: "Social Engagement",
    },
    {
        id: 4,
        img: service_img_4,
        category_1: "SEO Analysis",
        category_2: "Marketing",
        title: "Media Management",
    },
]

export default service_data