



import Image from "next/image";
import team_avatar from "@/assets/img/team/details/team-details-1.png";
import { SocialLinksTwo } from "@/components/common/social-links";

import team_details_shape_1 from "@/assets/img/shape/about-inner-shape-2.png";
import team_details_shape_2 from "@/assets/img/team/details/team-details-shape-1.png";
import team_details_shape_3 from "@/assets/img/team/details/team-details-shape-2.png";

const team_details_content = {
    bg_img: "/assets/img/bg/team-details-bg.png",
    job_title: "Founder & CEO",
    name: "Danny Russell",
    email: "danny@gmail.com",
    phone: "+(476) 964 223 55",
    about_text: "About Me",
    about_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    title_2: "Background & Experience",
    sm_des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore duis aute irure dolor.",
    fetures: [
        "Brand Identity Solutions.",
        "Retium nibh ipsum consequat nisl vel pretium.",
        "Nam libero justo laoreet sit amet.",
        "Visual Identity Improved.",
    ],
}
const {bg_img, job_title, name, email, phone , about_text, about_title, title_2, sm_des, fetures }  = team_details_content




const TeamDetailsDynamic = ({single_member} : any) => {
     
    return (
        <>
            <section className="team-area team-details-bg pt-200 pb-100" style={{backgroundImage: `url(${bg_img})`}}>
                <div className="container">
                    <div className="row justify-content-center"> 
                            <div  className="col-xl-8 col-lg-10 col-md-11 col-12">
                                <div className="team-details p-relative">
                                    <div className="team-details-info d-flex align-items-center mb-50">
                                        <div className="team-details-thumb">
                                            <Image src={single_member.avatar} className="single_avater" alt="theme-pure" />
                                        </div>
                                        <div className="team-details-content">
                                        <span className="team-details-position">{single_member.job_title}</span>
                                        <h4 className="team-details-title">{single_member.name}</h4>
                                        <a className="team-details-email" href={`mailto:${email}`}><span>Email:</span>{email}</a>
                                        <a className="team-details-number" href={`tel:${phone}`}><span>Phone:</span> {phone}</a>
                                        <div className="team-details-social">
                                            <SocialLinksTwo />   
                                        </div>
                                        </div>
                                    </div>
                                    <div className="team-details-about mb-45">
                                        <h3 className="team-details-about-title">{about_text}</h3>
                                        <p>{about_title}</p>
                                    </div>
                                    <div className="team-details-exprience">
                                        <h3 className="team-details-exprience-title">{title_2}</h3>
                                        <p>{sm_des}</p>
                                        <ul> {fetures.map((item, i)  => <li key={i}>{item}</li>)}</ul>   
                                    </div>
                                    <div className="team-details-shape">
                                        <Image className="team-details-shape-1" src={team_details_shape_1} alt="theme-pure" />
                                        <Image className="team-details-shape-2" src={team_details_shape_2} alt="theme-pure" />
                                        <Image className="team-details-shape-3" src={team_details_shape_3} alt="theme-pure" />
                                    </div>
                                </div>
                            </div>   
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamDetailsDynamic;