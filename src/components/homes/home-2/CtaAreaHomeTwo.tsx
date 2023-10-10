import Link from "next/link";
import UnderlineNine from "@/svg/underline_9";


interface cta_content_type {
    sub_title: string;
    title_1: string;
    title_2: string;
    phone: string;
}

const cta_content: cta_content_type = {
    sub_title: "No time to wait ? Call us ☕️ 🍞",
    title_1: "Let's Collaboration With",
    title_2: "Our SEO Expert",
    phone: "+44 123 654 7890",
}
const {sub_title, title_1, title_2, phone} = cta_content

const CtaAreaHomeTwo = () => {
    return (
        <>
            <section className="cta-area pt-105">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tpsection-wrapper text-center mb-50">
                                <p>{sub_title}</p>
                                <h2 className="tpsection-title-two">{title_1} <br />
                                    <span className="big-shape2">
                                        {title_2} <UnderlineNine />
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tpcta-wrapper text-center">
                                <Link className="tpcta-btn mr-5" href={`tel:${phone}`}>{phone}</Link>
                                <Link className="green-btn" href="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaAreaHomeTwo;