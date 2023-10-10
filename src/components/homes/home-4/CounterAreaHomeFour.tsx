import Image from "next/image";
import Count from "@/components/common/count";
import HappyIcon from "@/svg/counter_icon/HappyIcon";
import SuccessfulIcon from "@/svg/counter_icon/SuccessfulIcon";
import TeamMembersIcon from "@/svg/counter_icon/TeamMembersIcon";
// counter shape images
import counter_shape_1 from "@/assets/img/shape/counter-shape-4-1.png";
import counter_shape_2 from "@/assets/img/shape/counter-shape-4-2.png";
import counter_shape_3 from "@/assets/img/shape/counter-shape-4-3.png";
import counter_shape_4 from "@/assets/img/shape/counter-shape-4-4.png";
import counter_shape_5 from "@/assets/img/shape/counter-shape-4-5.png";


interface counter_data_type {
    id: number;
    icon: JSX.Element;
    counter_number: number;
    title: string;
}

const counter_data: counter_data_type[] = [
    {
        id: 1, 
        icon: <SuccessfulIcon />,
        counter_number: 120,
        title: "Successful Projects",
    },
    {
        id: 2, 
        icon: <HappyIcon />,
        counter_number: 180,
        title: "Happy Customers",
    },
    {
        id: 3, 
        icon: <TeamMembersIcon />,
        counter_number: 64,
        title: "Team Members",
    },
]
const CounterAreaHomeFour = () => {
    return (
        <>
            <section className="counter-area pb-140">
                <div className="container">
                    <div className="counter-bg-4 p-relative fix">
                        <div className="counter-shape-4  d-none d-md-block">
                            <Image src={counter_shape_1} alt="counter_shape_1" className="counter-shape-4-1" />
                            <Image src={counter_shape_2} alt="counter_shape_2" className="counter-shape-4-2" />
                            <Image src={counter_shape_3} alt="counter_shape_3" className="counter-shape-4-3" />
                            <Image src={counter_shape_4} alt="counter_shape_4" className="counter-shape-4-4" />
                            <Image src={counter_shape_5} alt="counter_shape_5" className="counter-shape-4-5" />
                        </div>
                        <div className="counter-wrapper d-flex align-items-center justify-content-between">

                            {counter_data.map((item, i) => 
                                <div key={i} className="counter-item-4 d-flex">
                                    <div className="counter-item-4-icon">
                                        <i>{item.icon}</i>
                                    </div>
                                    <div className="counter-item-4-content">
                                        <h3 className="counter-item-4-count">
                                        <span data-purecounter-duration="1" 
                                        data-purecounter-end={item.counter_number}  
                                        className="purecounter"> <Count number={item.counter_number} /> </span>
                                        </h3>
                                        <p>{item.title}</p>
                                    </div>
                                </div>                            
                            )} 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CounterAreaHomeFour;