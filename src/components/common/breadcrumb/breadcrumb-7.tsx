'use client'
import Link from "next/link";

// breadcrumb data type
type breadcrumb__content_type = { 
    top_title?: string;
    title?: string;
}
// breadcrumb data
// const breadcrumb__content: breadcrumb__content_type = { 
//     top_title: "Case Studies",
//     title: "Case Studies",
// }
// const {title, top_title } = breadcrumb__content


const BreadcrumbSeven = ({top_title, title}: breadcrumb__content_type ) => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-2-bg pb-130 pt-195" style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-3.jpg)`}}>
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
            </section>
        </>
    );
};

export default BreadcrumbSeven;