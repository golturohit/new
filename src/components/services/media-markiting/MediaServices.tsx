import Link from "next/link";
import MediaRightArrow from "@/svg/services_icon/MediaRightArrow";

type media_service_data_type ={
    id: number;
    title: string;
    sm_info: JSX.Element;
}[]
const media_service_data: media_service_data_type = [
    {
        id: 1,
        title: "Digital Marketing",
        sm_info: <>A strong social strategy is a road-map <br /> to developing customer.</>,
    },
    {
        id: 2,
        title: "SEO Analytics",
        sm_info: <>A strong social strategy is a <br /> road-map to developing customer.</>,
    },
    {
        id: 3,
        title: "Social Marketing",
        sm_info: <>A strong social strategy is a road-map <br /> to developing customer.</>,
    },
]
 
const MediaServices = () => {
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row">
                        {media_service_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="services-inner-2 mb-30">
                                    <div className="services-inner-2-content text-center">
                                        <h4 className="services-inner-2-title">{item.title}</h4>
                                        <p>{item.sm_info}</p>
                                        <Link href="/marketing-analysis">Learn More <span> <MediaRightArrow /> </span> </Link>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default MediaServices;