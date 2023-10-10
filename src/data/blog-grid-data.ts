
import { StaticImageData } from "next/image";
import blog_thumb_1 from "@/assets/img/blog/blog-grid-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-grid-2.jpg";
import blog_thumb_3 from "@/assets/img/blog/blog-grid-3.jpg";
import blog_thumb_4 from "@/assets/img/blog/blog-grid-4.jpg";
import blog_thumb_5 from "@/assets/img/blog/blog-grid-5.jpg";
import blog_thumb_6 from "@/assets/img/blog/blog-grid-6.jpg";
import blog_thumb_7 from "@/assets/img/blog/blog-grid-7.jpg";
import blog_thumb_8 from "@/assets/img/blog/blog-grid-8.jpg";


interface blog_grid_data_type {
    id: number;
    img?: StaticImageData;
    catagory: string;
    title: string;
    time: string;
    post_writer: string;
    // slider 
    slider?: StaticImageData[]
    video?: boolean,
    thumb?: StaticImageData | any,
}[]

const blog_grid_data: blog_grid_data_type [] = [
    
    {
        id: 1, 
        img: blog_thumb_1,
        catagory: "Technical SEO",
        title: "10 Quick Tips About Blogging Beautiful Blog Design",
        time: "Oct 16,2023",
        post_writer: "Eleanor Fant",
    },
    {
        id: 2, 
        img: blog_thumb_2,
        catagory: "LINK BUILDING",
        title: "7 of the Best Examples of Beautiful Blog Design",
        time: "August 16, 2023",
        post_writer: "Jim Séchen",
    },
    {
        id: 3, 
        img: blog_thumb_3,
        catagory: "Business",
        title: "Success Story:  Businessman in Harlem",
        time: "May 05, 2023",
        post_writer: "Jim Séchen",
    },
    {
        id: 4, 
        // img: blog_thumb_4,
        catagory: "LINK BUILDING",
        title: "Complete Link Building Guide for Beginners",
        time: "Marc 16, 2023",
        post_writer: "Jim Séchen",
        // slider 
        slider: [
            blog_thumb_4, blog_thumb_3, blog_thumb_2
        ],        
    },
    {
        id: 5, 
        // img: blog_thumb_5,
        catagory: "Business",
        title: "Content Marketing Tools To try in 2023",
        time: "May 05, 2023",
        post_writer: "Jim Séchen",
        // video
        video: true,
        thumb: blog_thumb_5,
    },
    {
        id: 6, 
        img: blog_thumb_6,
        catagory: "Technical SEO",
        title: "Getting Ready to Chase Google Sitelinks",
        time: "Jun 10, 2023",
        post_writer: "Giles Posture",
    },
    {
        id: 7, 
        img: blog_thumb_7,
        catagory: "Marketing",
        title: "Get the Most out of Simplify by Money Flow",
        time: "Jun 20,2023",
        post_writer: "Justin Case",
    },
    {
        id: 8, 
        img: blog_thumb_8,
        catagory: "Marketing",
        title: "Get the Most out of Simplify Beautiful Blog Design",
        time: "Jun 23, 2023",
        post_writer: "Justin Case",
    },
]
export default blog_grid_data