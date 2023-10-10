
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import user_1 from "@/assets/img/blog/comments/comment-1.jpg";
import user_2 from "@/assets/img/blog/comments/comment-3.jpg";
import user_3 from "@/assets/img/blog/comments/comment-2.jpg";
import ReplyIcon from '@/svg/blogs_icon/ReplyIcon';

interface comment_data_type {
    id: number;
    img: StaticImageData;
    name: string;
    time: string;
    comment_text: React.JSX.Element;
    reply?: JSX.Element;
}[]

const comment_data: comment_data_type[] = [
    {
        id: 1, 
        img: user_1,
        name: "Collin Davis",
        time: "March 26, 2020 at 6:17 pm",
        comment_text: <>Hello Collin,thanks for your response. Where did you read that you can use only one <br /> sitemap index for each website?</>,    
        reply: <ReplyIcon />,    
    },
    {
        id: 2, 
        img: user_2,
        name: "Ben Chiwell",
        time: "March 26, 2020 at 6:17 pm",
        comment_text: <>Filip however if you think about it, look at the sitemap generation tools <br /> used in Wordpress.</>,        
    },
    {
        id: 3, 
        img: user_3,
        name: "Robert Fox",
        time: "March 26, 2020 at 6:17 pm",
        comment_text: <>Thank you for this post! Looks like we’re “headed in the right direction”.</>, 
        reply: <ReplyIcon />,       
    },
] 
const PostComments = () => {
    return (
        <>
            <ul>
                {comment_data.map((item, i) =>  
                    <li key={i} className={`${item.id == 2 ? "children" : ""}`}>
                        <div className="postbox-comment-box p-relative">
                            <div className="postbox-comment-info d-flex align-items-center mb-10">
                                <div className="postbox-comment-avater">
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                                <div className="postbox-comment-name d-flex align-items-center">
                                    <h5>{item.name}</h5>
                                    <span className="post-meta"> {item.time}</span>
                                </div>
                            </div>
                            <div className="postbox-comment-text ml-65 grey-bg-2">
                                <p>{item.comment_text}</p>
                            </div>
                            {item.reply && 
                                <div className="postbox-comment-reply">
                                    <a href="#"><span> {item.reply} </span> Reply</a>
                                </div>                           
                            }
                        </div>
                    </li>
                
                )} 
            </ul>
        </>
    );
};

export default PostComments;