import ProcessShape from "@/svg/process_shape";
import Image, { StaticImageData } from "next/image";
import ProcessShapTwo from "@/svg/process_shap_2";
import WellcomeShapeTwo from "@/svg/wellcome_shape_2";
import proccess_rocket from "@/assets/img/shape/process-rocket.png";                               


interface process_content_type {
    sub_title: string;
    title: string;
    proccess_img: StaticImageData;
    tpprocess_items: ({
        id: number;
        cls_1: string;
        cls_2: string;
        cls_3?: string;
        title: JSX.Element;
        shape?: JSX.Element;
    } )[];
}


const process_content: process_content_type = {
    sub_title: "How we do it",
    title: "Helping others Succeed",
    proccess_img: proccess_rocket,
    tpprocess_items: [
        {
            id: 1,
            cls_1: "p-relative",
            cls_2: "",
            cls_3: "one", 
            title: <>Brainstorming and Creative <br /> ideas & Research</>,
            shape: <ProcessShape />,
        },
        {
            id: 2,
            cls_1: "p-relative ml-30",
            cls_2: "tpprocess__two",
            cls_3: "two", 
            title: <>Fully-Automated Keyword <br /> Grouping</>,
            shape: <ProcessShapTwo />,
        },
        {
            id: 3,
            cls_1: "p-relative ml-55",
            cls_2: "tpprocess__three",
            cls_3: "three", 
            title: <>Building the strategy to <br /> boost Your Sales</>,
            shape: <ProcessShape />,
        },
        {
            id: 4,
            cls_1: "d-flex justify-content-end",
            cls_2: "tpprocess__four", 
            title: <>Helping to achieve more <br /> People</>,
            
        },
    ]
}
const {sub_title, title, proccess_img, tpprocess_items} = process_content

const ProcessAreaHomeOne = ({style} : any) => {
    return (
        <>
        <section className={`process__area ${style ? "" : "pt-120 pb-120"}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tpsection__wrapper text-center mb-70">
                     <div className="tpbanner__sub-title mb-15">
                        <span>{sub_title}</span>
                        <i> <WellcomeShapeTwo /> </i>
                     </div>
                     <h2 className="tpsection__title">{title}</h2>
                  </div>
               </div>
            </div>
            <div className="tpprocess__border-bottom p-relative pb-45">
               <div className="tpprocess-shape-four d-none d-md-block">
                  <Image src={proccess_img} alt="theme-pure" />
               </div>
               <div className="row">
                {tpprocess_items.map((item, i) => 
                    <div key={i} className="col-lg-3 col-sm-6">
                        <div className={`tpprocess__item ${item.cls_1} mb-40`}>
                        <div className={`tpprocess__wrapper ${item.cls_2}`}>
                            <span className="tpprocess__count mb-25">{item.id}</span>
                            <h4 className="tpprocess__title">{item.title}</h4>
                        </div>
                        {item.shape && 
                            <div className={`tpprocess-shape-${item?.cls_3} d-none d-md-block`}>
                                 {item?.shape}
                            </div> 
                        }
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

export default ProcessAreaHomeOne;