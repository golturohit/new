import Link from "next/link";
import Image  from "next/image"; 
import { TeamSocialLinks } from "@/components/common/social-links";
import team_data from "@/data/team";

// team data type
interface team_content_type {
    title: JSX.Element;
    sm_info: string;  
}
// team content 
 const team_content: team_content_type = {
    title: <>Meet our team <br />of expert</>,
    sm_info: "We're a 100% remote team spread all across the world!", 
 }
 const {title, sm_info, }  = team_content

const TeamAreaHomeFive = ({style} : any) => {
    return (
        <>
            <section className={`team-area ${style ? "pb-50" : "pt-105 pb-140"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`section-3 text-center ${style ? "mb-35" : "mb-65"}`}>
                                <div className="section-3-title mb-15">{title}</div>
                                <p>{sm_info}</p>
                            </div>
                            {style && 
                                <div className="team-inner-all  text-center mb-70">
                                    <Link href="/team" className="tp-btn">Join Our Team</Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row gx-9 pb-30">
                        {team_data.slice(0, 4).map((item, i) => 
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className={`team-5-item ${item.cls} text-center mb-40`}>
                                    <div className="team-5-thumb mb-25">
                                        <Image src={item.avatar} alt="theme-pure" />
                                        <div className="team-5-social">
                                        <span className="icon"></span>
                                        <TeamSocialLinks /> 
                                        </div>
                                    </div>
                                    <div className="team-5-content">
                                        <h4 className="team-5-title"><Link href="/team-details">{item.name}</Link></h4>
                                        <p>{item.job_title}</p>
                                    </div>
                                </div>
                            </div>                            
                        )} 
                    </div>
                    {!style && 
                        <div className="row">
                            <div className="col-12">
                                <div className="team-5-all text-center">
                                    <Link href="/team" className="light-blue-btn">Join Our Team</Link>
                                </div>
                            </div>
                        </div>                   
                    }
                </div>
            </section>
        </>
    );
};

export default TeamAreaHomeFive;