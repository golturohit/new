import Link from "next/link";
import Image, { StaticImageData } from "next/image";
 
 import service_inner_thumb_1 from "@/assets/img/services/social-media/services-inner-thumb-1.png";
 import service_inner_thumb_2 from "@/assets/img/services/social-media/services-inner-thumb-2.png";
 import service_inner_thumb_3 from "@/assets/img/services/social-media/services-inner-thumb-3.png";
 import service_inner_shape from "@/assets/img/services/social-media/services-inner-shape-1.png";

// media service data type
 interface media_service_content_type {
    title: string;
    media_service_data: ({
        id: number;
        img: StaticImageData;
        inner_shape?: StaticImageData;
        title: JSX.Element;
        sm_des: string;
    })[];
}
// media service data 
 const media_service_content: media_service_content_type = {
    title: "How can a perth social media help grow my business?",
    media_service_data : [
        {
            id: 1 ,
            img: service_inner_thumb_1,
            inner_shape: service_inner_shape,
            title: <>Growing <br /> your business</>,
            sm_des: "With SEOMY, you get everything you need for a fast website",
        },
        {
            id: 2 ,
            img: service_inner_thumb_2,
            title: <>Speed <br /> Optimization</>,
            sm_des: "With SEOMY, you get everything you need for a fast website",
        },
        {
            id: 3 ,
            img: service_inner_thumb_3,
            title: <>Testing <br /> Capabilities</>,
            sm_des: "With SEOMY, you get everything you need for a fast website",
        },
     ]
 }
 const {title, media_service_data}  = media_service_content
 
const MediaServicesArea = () => {
    return (
        <>
           <section className="services-area services-inner-bg pt-95 pb-100 mb-110">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-wrapper mb-60 text-center">
                            <h5 className="section-title-4 fs-54">{title}</h5>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {media_service_data.map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="services-inner-item mb-30">
                                    <div className="services-inner-content">
                                        <h4 className="services-inner-title">
                                            <Link href="/seo-audit">{item.title}</Link></h4>
                                        <p>{item.sm_des}</p>
                                    </div>
                                    <div className="services-inner-thumb">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    {item.inner_shape && 
                                        <div className="services-inner-shape-1">
                                            <Image src={item.inner_shape} alt="theme-pure" />
                                        </div>                                    
                                    }
                                </div>
                            </div> 
                        )} 
                    </div>
                </div>
            </section> 
        </>
    );
};

export default MediaServicesArea;