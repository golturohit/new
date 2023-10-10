'use client'
import Image, { StaticImageData }  from 'next/image';
 
import breadcrumb_bg from "@/assets/img/services/social-media/services-social-media-bg.png";
import breadcrumb_shape_1 from "@/assets/img/cta/cta-inner-shape-1.png";
import breadcrumb_shape_2 from "@/assets/img/cta/cta-inner-shape-2.png";
import breadcrumb_shape_3 from "@/assets/img/cta/cta-inner-shape-3.png";
import breadcrumb_shape_4 from "@/assets/img/cta/cta-inner-shape-4.png";
import breadcrumb_shape_5 from "@/assets/img/cta/cta-inner-shape-5.png";
import breadcrumb_shape_6 from "@/assets/img/cta/cta-inner-shape-6.png";
 
const service_inner_shapes = [
    {id: 1, img: breadcrumb_shape_1},
    {id: 2, img: breadcrumb_shape_2},
    {id: 3, img: breadcrumb_shape_3},
    {id: 4, img: breadcrumb_shape_4},
    {id: 5, img: breadcrumb_shape_5},
    {id: 6, img: breadcrumb_shape_6},
]
type props_type = {
    sub_title: string,
    title: JSX.Element,
    img: StaticImageData,
    style: boolean,
}
const BreadcrumbThree = ({sub_title, title, img , style} : props_type) => { 
    return (
        <>
             <section className="markiting-area markiting-wrap">
                <div className="markiting-shape services-inner-banner-shape-wrap">
                    <Image src={breadcrumb_bg} alt="theme-pure" />
                    <div className="services-inner-banner-shape">
                        {service_inner_shapes.map((item, i) => 
                            <Image key={i} className={`services-inner-banner-shape-${item.id}`} src={item.img} alt="theme-pure" />
                        )} 
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-10">
                        <div className="markiting-content">
                            <span>{sub_title}</span>
                            <h4 className="markiting-title">{title}</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* <!-- markiting-area-start --> */}
            <div className={`${style ? "pb-105" : ""}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="markiting-bg">
                            <Image src={img} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- markiting-area-end --> */}
        </>
    );
};

export default BreadcrumbThree;