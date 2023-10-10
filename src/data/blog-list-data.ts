
import { StaticImageData } from "next/image";
import blog_thumb_1 from "@/assets/img/blog/blog-list-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-list-2.jpg";
import blog_thumb_3 from "@/assets/img/blog/blog-list-3.jpg";
import blog_thumb_4 from "@/assets/img/blog/blog-list-5.jpg";

import blog_slider_1 from "@/assets/img/blog/blog-list-4.jpg";
import blog_slider_2 from "@/assets/img/blog/blog-list-3.jpg";
import blog_slider_3 from "@/assets/img/blog/blog-list-2.jpg";

interface blog_list_type {
    id: number;
    img?: StaticImageData;
    thumb?: StaticImageData;
    video?: boolean;
    slider?: StaticImageData[];
    catagory: string;
    title: string;
    sm_des: string;
    time: string;
    post_writer: string;
}[]

const blog_list: blog_list_type[] = [
    {
        id: 1,
        img: blog_thumb_1,
        catagory: "SEOMY SEO",
        title: "Paid Ads vs. SEO: Which is Better?",
        sm_des: "No one rejects, dislikes, or avoids pleasure sit itself, because it is pleasure",
        time: "Jun 23, 2023",
        post_writer: "Joss Sticks",
    },
    {
        id: 2, 
        thumb: blog_thumb_2,
        video: true,
        catagory: "Technical SEO",
        title: "10 Quick Tips About Blogging",
        sm_des: "No one rejects, dislikes, or avoids pleasure sit itself, because it is pleasure",
        time: "Oct 16,2023",
        post_writer: "Eleanor Fant",
    },
    {
        id: 3,
        img: blog_thumb_3, 
        catagory: "Business",
        title: "Six Ways to Improve Conversions",
        sm_des: "No one rejects, dislikes, or avoids pleasure sit itself, because it is pleasure",
        time: "Oct 16,2023",
        post_writer: "Joss Sticks",
    },
    {
        id: 4,  
        slider: [blog_slider_1, blog_slider_2, blog_slider_3],
        catagory: "LINK BUILDING",
        title: "Content Marketing Tools to try in 2023",
        sm_des: "No one rejects, dislikes, or avoids pleasure sit itself, because it is pleasure",
        time: "May 05, 2023",
        post_writer: "Hans Down",
    },
    {
        id: 5,
        img: blog_thumb_4, 
        catagory: "Marketing",
        title: "Getting Ready To Google Sitelinks",
        sm_des: "No one rejects, dislikes, or avoids pleasure sit itself, because it is pleasure",
        time: "Jun 10, 2023",
        post_writer: "Giles Posture",
    },


]
export default blog_list