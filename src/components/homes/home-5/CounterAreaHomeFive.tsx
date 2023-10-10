 
 import Image from "next/image";
import count_img_1 from "@/assets/img/icon/counter-5-icon-1.svg";
 import count_img_2 from "@/assets/img/icon/counter-5-icon-2.svg";
 import count_img_3 from "@/assets/img/icon/counter-5-icon-3.svg";
import CountTwo from "@/components/common/CountTwo"; 


 const count_data_5  = [
    {
        id: 1, 
        icon: count_img_1,
        cls: "",
        count_number: 25,
        text: "Experience Year",
        width_prograsss: "60%",
        aria_valuenow: 70,      
    },
    {
        id: 2, 
        icon: count_img_2,
        cls: "counter-5-2",
        count_number: 120,
        text: "Successful Projects",
        width_prograsss: "77%",
        aria_valuenow: 75,      
    },
    {
        id: 3, 
        icon: count_img_3,
        cls: "counter-5-3",
        count_number: 160,
        text: "Happy Customers",
        width_prograsss: "60%",
        aria_valuenow: 25,       
    },
    {
        id: 4, 
        icon: count_img_1,
        cls: "counter-5-4",
        count_number: 35,
        text: "Team Members",
        width_prograsss: "65%",
        aria_valuenow: 25,      
    },
 ]

const CounterAreaHomeFive = () => {
    return (
        <>
            <div className="counter-area pb-90">
                <div className="container">
                    <div className="row">
                        {count_data_5.map((item, i)  => 
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className={`counter-5 ${item.cls} d-flex mb-30`}>
                                    <div className="counter-5-icon">
                                        <i>
                                        <Image src={item.icon} alt="theme-pure" />
                                        </i>
                                    </div>
                                    <div className="counter-5-content">
                                        <b className="counter-5-count mb-10">
                                        <span data-purecounter-duration="1" data-purecounter-end="35" className="purecounter">
                                            <CountTwo number={item.count_number} /> 
                                        </span>
                                        {/* <i className="fa-regular fa-plus"></i> */}
                                        </b>
                                        <p>{item.text}</p>
                                        <div className="counter-5-bar">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-label="Example with label"
                                            style={{width: `${item.width_prograsss}`}} 
                                            aria-valuenow={item.aria_valuenow} 
                                            aria-valuemin={0} aria-valuemax={100}></div> 
                                        </div>
                                        </div>
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

export default CounterAreaHomeFive;