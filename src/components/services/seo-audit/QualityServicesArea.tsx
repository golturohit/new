
import service_tab_img_1 from "@/assets/img/bg/services-tab/value-tab-1.svg";
import service_tab_img_2 from "@/assets/img/bg/services-tab/value-tab-2.svg";
import service_tab_img_3 from "@/assets/img/bg/services-tab/value-tab-3.svg";
import service_tab_img_4 from "@/assets/img/bg/services-tab/value-tab-4.svg";
import Image from "next/image";

interface quality_data_type {
    id: number;
    tab_id: string;
    img: any;
    title: JSX.Element;
    info: JSX.Element;
    features: string[];
}[]
const quality_data: quality_data_type[] = [
    {
        id: 1,
        tab_id: "home",
        img: service_tab_img_1,
        title: <>What is Covered in the <br /> SEO Audit</>,
        info: <>Broken links are links that point to a website <br /> or page that no longer exists.</>,
        features: [
            "Link Building ",
            "Social Networking",
            "Content Marketing",
            "Brand mentions",
        ],
    },
    {
        id: 2,
        tab_id: "profile",
        img: service_tab_img_2,
        title: <>How is Covered in the <br /> SEO Audit</>,
        info: <>Broken links are links that point to a website <br /> or page that no longer exists.</>,
        features: [
            "Link Building ",
            "Social Networking",
            "Content Marketing",
            "Brand mentions",
        ],
    },
    {
        id: 3,
        tab_id: "messages",
        img: service_tab_img_3,
        title: <>Why need Covered in the <br /> SEO Audit</>,
        info: <>Broken links are links that point to a website <br /> or page that no longer exists.</>,
        features: [
            "Link Building ",
            "Social Networking",
            "Content Marketing",
            "Brand mentions",
        ],
    },
    {
        id: 4,
        tab_id: "settings",
        img: service_tab_img_4,
        title: <>Benifits of SEO audit<br /> at present</>,
        info: <>Broken links are links that point to a website <br /> or page that no longer exists.</>,
        features: [
            "Link Building ",
            "Social Networking",
            "Content Marketing",
            "Brand mentions",
        ],
    },
]

const QualityServicesArea = () => {
    return (
        <>
            <section className="quality-services-area quality-services-bg pb-125 pt-95 mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="optimize-subtitle mb-60">
                                <span>Value Proposition</span>
                                <h5 className="section-title-4 fs-54">High-quality <br /> Link building services</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="quality-services-nav">
                                <div className="d-flex align-items-start">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                            aria-selected="true">
                                            <span>
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4"
                                                            d="M22.5898 15.6093C22.5219 18.5796 22.2382 20.3145 21.0528 21.4999C19.4944 23.0583 16.9861 23.0583 11.9697 23.0583C6.95319 23.0583 4.44496 23.0583 2.88654 21.4999C1.32812 19.9415 1.32812 17.4333 1.32812 12.4168C1.32812 7.40033 1.32812 4.89209 2.88654 3.33368C4.07194 2.14828 5.80688 1.86455 8.7772 1.79663"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path
                                                            d="M7.63008 15.3456L9.22924 13.9261M9.22924 13.9261L11.3585 16.3248L14.157 13.8407L12.0278 11.442M9.22924 13.9261L12.0278 11.442M15.3141 8.52492C15.6753 8.93747 16.1147 9.27447 16.6067 9.51654C17.0988 9.7586 17.6339 9.90094 18.1812 9.93535C18.7285 9.96977 19.2772 9.89558 19.7957 9.71707C20.3142 9.53856 20.7923 9.25924 21.2024 8.8952C21.6125 8.53116 21.9466 8.08959 22.1853 7.59592C22.4241 7.10225 22.5628 6.56622 22.5936 6.0187C22.6243 5.47119 22.5465 4.92299 22.3645 4.40569C22.1825 3.88839 21.9 3.4122 21.5332 3.00453C20.7954 2.20186 19.7718 1.72109 18.683 1.66577C17.5941 1.61045 16.5271 1.98501 15.7117 2.70877C14.8964 3.43252 14.3979 4.44758 14.3237 5.5353C14.2494 6.62302 14.6054 7.69639 15.3149 8.52421L15.3141 8.52492ZM15.3141 8.52492L12.0278 11.442"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                </i>
                                                One-way <br /> Link building
                                            </span>
                                        </button>
                                        <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                                            aria-selected="false">
                                            <span>
                                                <i>
                                                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4"
                                                            d="M16.9089 11.4114C16.9089 11.4114 16.6959 12.7134 12.2951 17.9214C8.16397 22.8299 14.1407 26.5666 14.8505 26.9963C14.8931 27.0223 14.9356 27.0223 14.9924 26.9963C15.9578 26.4494 26.7043 20.1087 16.9089 11.4114Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                        <path
                                                            d="M13.4966 8.53391C13.4966 5.53932 12.219 2.80513 10.9413 1.24274C10.5154 0.852138 9.80559 0.982337 9.66363 1.50314C9.09578 3.45613 7.39222 7.62252 3.27529 12.5701C-1.97734 18.8197 2.84942 25.5901 7.81813 26.8921C10.5154 27.5431 7.10833 25.5901 6.68244 21.5539C6.25655 16.4761 13.4966 12.7003 13.4966 8.53391Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </i>
                                                Find powerful <br /> backlinks
                                            </span>
                                        </button>
                                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages" type="button" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false">
                                            <span>
                                                <i>
                                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.6134 11.2617V7.14623C21.6134 5.67042 20.4856 4.03862 19.1057 3.52268L13.1185 1.27897C12.1226 0.907012 10.4908 0.907012 9.49494 1.27897L3.50769 3.53468C2.12786 4.05062 1 5.68241 1 7.14623V16.0611C1 17.4769 1.93588 19.3367 3.07574 20.1886L8.23509 24.0401C9.07499 24.688 10.1909 25 11.3067 25"
                                                            fill="white" fillOpacity="0.2" />
                                                        <path
                                                            d="M21.6134 11.2617V7.14623C21.6134 5.67042 20.4856 4.03862 19.1057 3.52268L13.1185 1.27897C12.1226 0.907012 10.4908 0.907012 9.49494 1.27897L3.50769 3.53468C2.12786 4.05062 1 5.68241 1 7.14623V16.0611C1 17.4769 1.93588 19.3367 3.07574 20.1886L8.23509 24.0401C9.07499 24.688 10.1909 25 11.3067 25"
                                                            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                        <path
                                                            d="M10.9974 12.9999C11.7338 12.9999 12.3307 12.403 12.3307 11.6666C12.3307 10.9302 11.7338 10.3333 10.9974 10.3333C10.261 10.3333 9.66406 10.9302 9.66406 11.6666C9.66406 12.403 10.261 12.9999 10.9974 12.9999Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                                            strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.9961 13V15" stroke="currentColor" strokeWidth="1.5"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4"
                                                            d="M17.4334 23.2C19.8818 23.2 21.8667 21.2151 21.8667 18.7666C21.8667 16.3181 19.8818 14.3333 17.4334 14.3333C14.9849 14.3333 13 16.3181 13 18.7666C13 21.2151 14.9849 23.2 17.4334 23.2Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M22.3357 23.6665L21.4023 22.7332" stroke="currentColor"
                                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </i>
                                                Resource <br /> link building
                                            </span>
                                        </button>
                                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-settings" type="button" role="tab"
                                            aria-controls="v-pills-settings" aria-selected="false">
                                            <span>
                                                <i>
                                                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3398 2.19995V2.21152" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.3398 7.40747V7.41904" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.3398 12.0371V12.0487" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M11.3398 16.6663V16.6778" stroke="currentColor"
                                                            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M11.3398 20.7168V20.7284" stroke="currentColor"
                                                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M11.3398 24.1882V24.1998" stroke="currentColor"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M1.5 7.40747V7.41904" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M21.1719 7.40747V7.41904" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M21.1719 12.0371V12.0487" stroke="currentColor"
                                                            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M1.5 12.0371V12.0487" stroke="currentColor"
                                                            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M21.1719 15.5085V15.5201" stroke="currentColor"
                                                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M21.1719 18.9807V18.9923" stroke="currentColor"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M1.5 15.5085V15.5201" stroke="currentColor"
                                                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M1.5 18.9807V18.9923" stroke="currentColor"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.47656 9.72241V9.73398" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.42188 4.86157V4.87315" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.1953 9.72241V9.73398" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.2539 4.86157V4.87315" stroke="currentColor" strokeWidth="3"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M6.47656 14.3516V14.3631" stroke="currentColor"
                                                            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M6.47656 17.8232V17.8348" stroke="currentColor"
                                                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M6.47656 21.2952V21.3067" stroke="currentColor"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M16.1953 14.3516V14.3631" stroke="currentColor"
                                                            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M16.1953 17.8232V17.8348" stroke="currentColor"
                                                            strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                        <path opacity="0.4" d="M16.1953 21.2952V21.3067" stroke="currentColor"
                                                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </i>
                                                Citation <br /> link building
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="services-quality-tab">
                                <div className="tab-content" id="v-pills-tabContent">
                                    {quality_data.map((item, i) =>
                                        <div key={i} className={`tab-pane fade ${i === 1 ? "show active" : ""}`} id={`v-pills-${item.tab_id}`} role="tabpanel"
                                            aria-labelledby={`v-pills-${item.tab_id}-tab`} >
                                            <div className="services-quality-wrapper">
                                                <div className="services-quality-thumb">
                                                    <Image src={item.img} alt="theme-pure" />
                                                </div>
                                                <div className="services-quality-content">
                                                    <h4 className="services-quality-title">{item.title}</h4>
                                                    <p> {item.info}   </p>
                                                    <ul>
                                                        {item.features.map((feature, index) =>
                                                            <li key={index}>{feature} </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QualityServicesArea;