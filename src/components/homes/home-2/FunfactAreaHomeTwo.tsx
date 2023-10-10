import Image from "next/image";
import Count from "@/components/common/count";
import UnderlineEight from "@/svg/underline_8";
// icons
import icon_1 from "@/assets/img/icon/funfact-icon-1.png";
import icon_2 from "@/assets/img/icon/funfact-icon-2.png";
import icon_3 from "@/assets/img/icon/funfact-icon-3.png";

const funfact_content = {
    sub_title: "Anyone can make you Promises…",
    title_p_1: "We",
    title_p_2: "Can Give You",
    title_p_3: "Proof",
    counter_data: [
        {
            id: 1,
            img: icon_1,
            cls: "",
            count_num: 35,
            simble: "M",
            sm_des: <><span>Unique </span> URLs Checked In <br /> The World</>
        },
        {
            id: 2,
            img: icon_2,
            cls: "",
            count_num: 83000,
            simble: "",
            sm_des: <><span>Happy Customers</span> all Over <br /> Over 15 Years</>
        },
        {
            id: 3,
            img: icon_3,
            cls: "",
            count_num: 100,
            simble: "",
            sm_des: <><span>Countries </span> Served with Better<br /> SEO Services</>
        },
    ]
}
const {sub_title, title_p_1, title_p_2, title_p_3, counter_data}  = funfact_content


const FunfactAreaHomeTwo = () => {
    return (
        <>
            <section className="funfact-area pt-95">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tpsection-wrapper text-center mb-60">
                            <p>{sub_title}</p>
                            <h2 className="tpsection-title-two">
                                {title_p_1} <span className="big-shape2"> {title_p_2} <UnderlineEight /> </span> {title_p_3}
                            </h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {counter_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-4">
                                <div className={`funfact d-flex align-items-start ${item.id === 3 && "justify-content-end"} mb-30`}>
                                    <div className="funfact-icon">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="funfact-content">
                                        <h3 className="funfact-count">
                                        <span data-purecounter-duration="1" data-purecounter-end="100" className="purecounter">
                                            <Count number={item.count_num} add_style={false} />
                                        </span> 
                                        
                                        </h3>
                                        <p>{item.sm_des}</p>
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

export default FunfactAreaHomeTwo;