
import React from "react";
import { StaticImageData } from "next/image";
import masonry_thumb_1  from "@/assets/img/blog/blog-masonry-1.jpg";
import masonry_thumb_2  from "@/assets/img/blog/blog-masonry-2.jpg";
import masonry_thumb_3  from "@/assets/img/blog/blog-masonry-3.jpg";
import masonry_thumb_4  from "@/assets/img/blog/blog-masonry-5.jpg";
import masonry_thumb_5  from "@/assets/img/blog/blog-masonry-6.jpg";
import masonry_thumb_6  from "@/assets/img/blog/blog-masonry-4.jpg";
// import masonry_thumb_7  from "@/assets/img/blog/blog-masonry-3.jpg";
import masonry_thumb_8  from "@/assets/img/blog/blog-masonry-9.jpg";
import masonry_thumb_9  from "@/assets/img/blog/blog-masonry-8.jpg";
import masonry_thumb_10 from "@/assets/img/blog/blog-masonry-7.jpg";
import masonry_thumb_11 from "@/assets/img/blog/blog-masonry-10.jpg";
import masonry_thumb_12 from "@/assets/img/blog/blog-masonry-11.jpg";
import masonry_thumb_13 from "@/assets/img/blog/blog-masonry-12.jpg";

import QuteIcon from "@/svg/qute_icon";


interface blog_masonry_data_type {
    id: number;
    cls?: string;
    img?: StaticImageData;
    catagory?: string;
    title?: string;
    time?: string;
    post_writer?: string;
    video?: boolean;
    icon?: () => JSX.Element;
    sub_title?: string;
    sm_info?: string;
    post_by?: string;
    qute?: boolean;
    withoutVideo?:  boolean;
}[]
const blog_masonry_data: blog_masonry_data_type[] = [
    {
        id: 1, 
        img: masonry_thumb_1,
        catagory: "Business",
        title: "Success Story: Businessman in Harlem",
        time: "May 05, 2023",
        post_writer: "Hans Down",
    },
    {
        id: 2, 
        img: masonry_thumb_2,
        catagory: "Marketing",
        title: "Get the Most out of Simplify by Money Flow",
        time: "Jun 20,2023",
        post_writer: "Justin Case",
    },
    {
        id: 3, 
        cls: "col-xl-6 col-lg-8 col-md-12",
        img: masonry_thumb_3,
        catagory: "Technical SEO",
        title: "10 Quick Tips About <br /> Blogging",
        time:  "Oct 16,2023",
        post_writer: "Eleanor Fant",
        // video 
        video: true,
    },
    {
        id: 4, 
        img: masonry_thumb_4,
        catagory: "Business",
        title: "Getting Ready to Chase Google Sitelinks",
        time: "May 05, 2023",
        post_writer: "Giles Posture",
    },
    {
        id: 5, 
        img: masonry_thumb_5,
        catagory: "Business",
        title: "10 Quick Tips About Blogging",
        time: "May 05, 2023",
        post_writer: "Hans Down",
    },
    {
        id: 6, 
        img: masonry_thumb_6,
        catagory: "Business",
        title: "Getting Ready to <br /> Chase Google Sitelinks",
        time: "Jun 05, 2023",
        post_writer: "Giles Posture",
    },
    {
        id: 7,  
        // img: masonry_thumb_7,
        icon: QuteIcon,
        qute: true,
        sub_title: "Social Distancing",
        sm_info: "Effortless and intuitive for beginners The best need design skills…", 
        post_by: "Giles Posture",
    },
    {
        id: 8,  
        img: masonry_thumb_8,
        catagory: "Business",
        title: "Content Marketing Tools To try in 2023",
        time: " May 05, 2023",
        post_writer: "Hans Down",
    },
    {
        id: 11, 
        // img: masonry_thumb_9,
        icon: QuteIcon,
        qute: true,
        sub_title: "Social Distancing",
        sm_info: "Effortless and intuitive for beginners The best need design skills…", 
        post_by: "Giles Posture",
    },
    {
        id: 9, 
        img: masonry_thumb_9,
        catagory: "Business",
        title: "7 of the Best Examples of Beautiful Blog Design",
        time: "Marc 05, 2023",
        post_writer: "Jim Séchen",
    },
    {
        id: 10, 
        cls: "col-xl-6 col-lg-8 col-md-12",
        img: masonry_thumb_10,
        withoutVideo: true,
        catagory: "Technical SEO",
        title: "10 Quick Tips About <br /> Blogging",
        time: "Oct 16,2023",
        post_writer: "Eleanor Fant",
    }, 
    {
        id: 12, 
        img: masonry_thumb_11,
        catagory: "Business",
        title: "Get the Most out of Simplify by Money Flow",
        time: "May 05, 2023",
        post_writer: "Joss Sticks",
    },
    {
        id: 13, 
        img: masonry_thumb_12,
        catagory: "Business",
        title: "Getting Ready to <br /> Chase Google Sitelinks",
        time: "Jun 10, 2023",
        post_writer: "Giles Posture",
    },
    {
        id: 14, 
        img: masonry_thumb_13,
        catagory: "Business",
        title: "Complete Link Building Guide for Beginners",
        time: "Oct 16, 2023",
        post_writer: "Ravi O'Leigh",
    },
    {
        id: 3, 
        cls: "col-xl-6 col-lg-8 col-md-12",
        img: masonry_thumb_3,
        catagory: "Technical SEO",
        title: "10 Quick Tips About <br /> Blogging",
        time:  "Oct 16,2023",
        post_writer: "Eleanor Fant",
        // video 
        video: true,
    },
    {
        id: 4, 
        img: masonry_thumb_4,
        catagory: "Business",
        title: "Getting Ready to Chase Google Sitelinks",
        time: "May 05, 2023",
        post_writer: "Giles Posture",
    }, 
   
]
export default blog_masonry_data