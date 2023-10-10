import Link from "next/link";

// type
interface social_data_type {
    id: number;
    color: string;
    icon: string;
    title: string;
}
// data
const social_data: social_data_type[] = [
    {
        id: 1, 
        color: "tpsocial-facebook",
        icon: "fa-brands fa-facebook",
        title: "Follow us on Facebook for Small Busoness Updates",
    },
    {
        id: 2, 
        color: "tpsocial-insta",
        icon: "fa-brands fa-instagram",
        title: "Follow us on Instagram for Small Business Inspiration",
    },
    {
        id: 3, 
        color: "tpsocial-pin",
        icon: "fa-brands fa-pinterest",
        title: "Get our Newsletter for Small Business Tips & News",
    },
    {
        id: 4, 
        color: "tpsocial-twitt",
        icon: "fa-brands fa-twitter",
        title: "Follow us on Instagram for Small Business Inspiration",
    },
]

type style_type = {
    style?: any,
}
const SocialAreaHomeTwo = ({style} : style_type) => {
    return (
        <> 
            <div className={`social-area pt-120 ${style ? "social-inner-wrapper pb-85" : ""}`}>
                <div className="container">
                    <div className="row">
                        {social_data.map((item, i) => 
                            <div key={i} className="col-lg-6">
                                <div className={`tpsocial ${item.color} mb-30`}>
                                    <div className="tpsocial-bg"></div>
                                    <div className="tpsocial-text">
                                        <Link href="#"><i className={item.icon}></i> {item.title}</Link>
                                    </div>
                                </div>
                            </div>  
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialAreaHomeTwo;