import Image from "next/image";
import team_data from "@/data/team";
import { TeamSocialLinks } from "@/components/common/social-links";
import Link from "next/link";



const AboutArea = () => {
    return (
        <>
            <section className="team-area pt-100 pb-40">
                <div className="container">
                    <div className="row gx-9">
                        {team_data.map((item, i) =>
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className={`team-5-item ${item.cls} text-center mb-80`}>
                                    <div className="team-5-thumb mb-25">
                                        <Image src={item.avatar} alt="theme-pure" />
                                        <div className="team-5-social">
                                            <span className="icon"></span>
                                            <TeamSocialLinks /> 
                                        </div>
                                    </div>
                                    <div className="team-5-content">
                                        <h4 className="team-5-title">
                                            <Link href={`team-details/${item.id}`}>{item.name}</Link>
                                        </h4>
                                        <p>{item.job_title}</p>
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

export default AboutArea;