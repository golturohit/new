
import Link from "next/link";
import recent_post_thumb_1 from "@/assets/img/blog/sidebar/blog-sm-1.jpg";
import recent_post_thumb_2 from "@/assets/img/blog/sidebar/blog-sm-2.jpg";
import recent_post_thumb_3 from "@/assets/img/blog/sidebar/blog-sm-3.jpg";
import Image, { StaticImageData } from "next/image";


interface recent_post_data_type {
    id: number;
    img: StaticImageData;
    title: JSX.Element;
    time: string;
}[]

const recent_post_data: recent_post_data_type[] = [
    {
        id: 1,
        img: recent_post_thumb_1,
        title: <>Unpacking SEO for <br /> the Google Local Pack.</>,
        time: "July 28,2023",
    },
    {
        id: 2,
        img: recent_post_thumb_2,
        title: <>7 of the Best Examples of Beautiful Blog Design.</>,
        time: "July 21, 2021",
    },
    {
        id: 3,
        img: recent_post_thumb_3,
        title: <>Working From Home? Let’s Get Started.</>,
        time: "July 21, 2021",
    },
]

const RecentPost = () => {
    return (
        <>
            {recent_post_data.map((item, i) =>
                <div key={i} className="rc__post mb-10 d-flex align-items-center">
                    <div className="rc__post-thumb mr-20">
                        <Link href="/blog-details">
                            <Image src={item.img} alt="theme-pure" />
                        </Link>
                    </div>
                    <div className="rc__post-content">
                        <h3 className="rc__post-title">
                            <Link href="/blog-details">{item.title}</Link>
                        </h3>
                        <div className="rc__meta">
                            <span>{item.time}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecentPost;