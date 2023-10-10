
import { StaticImageData } from "next/image";
import testimonial_img_1 from "@/assets/img/team/testimonial-1.png";
import testimonial_img_2 from "@/assets/img/team/testimonial-2.png";  

// testimonial data type
interface testimonial_data_type {
    id: number;
    img: StaticImageData;
    info: string;
    avatar_name: string;
    job_title: string;
}
// testimonial data 
const testimonial_data: testimonial_data_type[] =  [
    {
        id: 1,
        img: testimonial_img_1,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Nathalie Grossman",
        job_title: "CEO of Advisor Fuel",
    },
    {
        id: 2,
        img: testimonial_img_2,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Robert Fox",
        job_title: "CEO of Advisor Fuel",
    },
    {
        id: 3,
        img: testimonial_img_1,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Leslie Alexander",
        job_title: "CEO of Advisor Fuel",
    },
    {
        id: 4,
        img: testimonial_img_2,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Annette Black",
        job_title: "CEO of Advisor Fuel",
    },
    {
        id: 5,
        img: testimonial_img_2,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Kathryn Murphy",
        job_title: "CEO of Advisor Fuel",
    },
    {
        id: 6,
        img: testimonial_img_1,
        info: "We help our clients succeed by creating brand identities, digital experiences, material that communicate clearly, achieve marketing goals!",
        avatar_name: "Guy Hawkins",
        job_title: "CEO of Advisor Fuel",
    },
]
export default testimonial_data