import Image, { StaticImageData } from "next/image";
// award images
import award_img_1 from "@/assets/img/shape/award-shape-1.png";
import award_img_2 from "@/assets/img/shape/award-shape-2.png";
import award_img_3 from "@/assets/img/shape/award-shape-3.png";
// award data types
interface award_data_type {
    id: number;
    cls: string;
    img: StaticImageData;
    title: string;
    brand_name: string;
}
// award content
const award_data: award_data_type[] = [
    {
        id: 1,
        cls: "", 
        img: award_img_1,
        title: "Best of the Year",
        brand_name: "Best Apps - Apple",       
    },
    {
        id: 2,
        cls: "tpaward-border", 
        img: award_img_2,
        title: "Best of the Year",
        brand_name: "Best Apps - Apple",       
    },
    {
        id: 3,
        cls: "", 
        img: award_img_3,
        title: "Best of the Year",
        brand_name: "Innovation by Design - Fast Company",       
    },

]

const AwardAreaHomeFour = ({style} : any) => {
    return (
        <>
            <section className={`award-area ${style ? "pb-60" : "pb-80"}`}>
                <div className="container">
                    <div className="row">
                        {award_data.map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className={`tpaward ${item.cls} text-center mb-30`}>
                                    <div className="tpaward-icon mb-15">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="tpaward-content">
                                        <h4 className="title mb-5">{item.title}</h4>
                                        <p>{item.brand_name}</p>
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

export default AwardAreaHomeFour;