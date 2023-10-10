import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import dots_shape_img from "@/assets/img/shape/inner-dots-shape.png";


type breadcrumb_4_content_type = {
    top_title: string;
    title: string;
    dots_shape: StaticImageData;
}

const breadcrumb_4_content: breadcrumb_4_content_type = {
    top_title: "Services",
    title: "SEO Services",
    dots_shape: dots_shape_img,

}
const {top_title, title} = breadcrumb_4_content
 

const BreadcrumbFour = () => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-overlay pb-115 pt-195 p-relative jarallax" 
                             style={{backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content breadcrumb__content-2 text-center p-relative z-index-1">
                                <h3 className="breadcrumb__title">{top_title}</h3>
                                <div className="breadcrumb__list">
                                    <span><Link href="/">Home</Link></span>
                                    <span className="dvdr"></span>
                                    <span>{title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-shape-dots">
                    <Image src={dots_shape_img} alt="theme-pure" />
                </div>
            </section>
        </>
    );
};

export default BreadcrumbFour;