import Image from "next/image";
import Link from "next/link";

import shape from '@/assets/img/shape/inner-dots-shape.png';

type breadcrumb_9_content_type = {
    top_title?: string;
    title?: string;
}


const BreadcrumbNine = ({title, top_title}: breadcrumb_9_content_type) => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-overlay p-relative pb-115 pt-195 jarallax"
                style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)` }}>
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
                    <Image src={shape} alt="theme-pure" />
                </div>
            </section>
        </>
    );
};

export default BreadcrumbNine;