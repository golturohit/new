 
import Image, { StaticImageData } from "next/image"; 
import counter_shape_1 from "@/assets/img/shape/counter-shape-1.png";
import counter_shape_2 from "@/assets/img/shape/counter-shape-2.png";
import counter_shape_3 from "@/assets/img/shape/counter-shape-3.png";
import Count from "@/components/common/count";

type about_content_type = {
    id: number,
    cls: string,
    img: StaticImageData,
    count_number: number ,
    info: JSX.Element,
}
 const about_counter: about_content_type[] = [
    {
        id: 1,
        cls: "",
        img: counter_shape_1,
        count_number: 25,
        info: <>Years <br /> Of Experience</>,
    },
    {
        id: 2,
        cls: "ml-70",
        img: counter_shape_2,
        count_number: 340,
        info: <>Project <br /> Complite</>,
    },
    {
        id: 3,
        cls: "d-flex justify-content-end",
        img: counter_shape_3,
        count_number: 25,
        info: <>Satisfied Clients On <br /> 24 Countries</>,
    },

 ]

const AboutCounterArea = () => {
    return (
        <>
            <div className="counter-area pb-120">
                <div className="container">
                    <div className="counter-border">
                        <div className="row">
                            {about_counter.map((item, i) => 
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className={`inner-counter ${item.cls}`}>
                                        <div className={`inner-counter-shape inner-counter-shape-${item.id}`}>
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="inner-counter-count d-flex align-items-center">
                                        <div className="inner-counter-list">
                                            <span data-purecounter-duration="1" data-purecounter-end="340" className="purecounter">
                                                <Count number={item.count_number} />
                                            </span> 
                                        </div>
                                        <div className="inner-counter-info">
                                            <span>{item.info}</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>                            
                            )} 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCounterArea;