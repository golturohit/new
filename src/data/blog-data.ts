
//blog thumb
import { StaticImageData } from "next/image";
import blog_thumb_1 from "@/assets/img/blog/blog-1-bg-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-1-bg-2.jpg";
import blog_thumb_3 from "@/assets/img/blog/blog-1-bg-3.jpg";

// avatar img
import avatar_1 from "@/assets/img/blog/comments/blog-avatar-1.png";
import avatar_2 from "@/assets/img/blog/comments/blog-avatar-2.png";
import avatar_3 from "@/assets/img/blog/comments/blog-avatar-3.png";

interface blog_data_type {
    id: number;
    thumb: StaticImageData;
    tag_1: string;
    tag_2: string;
    title: string;
    sm_des: string;
    avatar: StaticImageData;
    avatar_name: string;
    titme: string;
}

const blog_data: blog_data_type[] = [
    {
        id: 1,
        thumb: blog_thumb_1,
        tag_1: "SEO Analysis",
        tag_2: "Marketing",
        title: "Simple ways to Optimize your Website For SEO",
        sm_des: " Optimize your Website For SEO Simple ways to Optimize your Website For SEO Website  ways to Optimize your Website For SEO",
        avatar: avatar_1,
        avatar_name: "Nathalie Grossman",
        titme: "August 3, 2023",
    },
    {
        id: 2,
        thumb: blog_thumb_2,
        tag_1: "SEO Analysis",
        tag_2: "Marketing",
        title: "The Trend of Marketing With <br /> Tiktok, Should or not?",
        sm_des: " Optimize your Website For SEO Simple ways to Optimize your Website For SEO Website  ways to Optimize your Website For SEO",
        avatar: avatar_2,
        avatar_name: "Jason Responsen",
        titme: "March 16, 2023",
    },
    {
        id: 3,
        thumb: blog_thumb_3,
        tag_1: "SEO Analysis",
        tag_2: "Marketing",
        title: "How to Increase Your ROI Through scientific SEM?",
        sm_des: " Optimize your Website For SEO Simple ways to Optimize your Website For SEO Website  ways to Optimize your Website For SEO",
        avatar: avatar_3,
        avatar_name: "Eleanor Fant",
        titme: "November 24, 2023",
    },
]
export default blog_data 