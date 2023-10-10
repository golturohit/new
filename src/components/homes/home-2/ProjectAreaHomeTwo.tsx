"use client"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from 'react';
import UnderlineSeven from "@/svg/underline_7";
// project thumb 
import project_thumb_1 from "@/assets/img/banner/project-2-thumb-2.jpg";
import project_thumb_2 from "@/assets/img/banner/project-2-thumb-3.jpg";
import project_thumb_3 from "@/assets/img/banner/project-2-thumb-1.jpg";
import project_thumb_4 from "@/assets/img/banner/project-2-thumb-4.jpg";
import panel_icon from "@/assets/img/icon/panel-icon-3.png";

// project content data type
interface project_content_type {
    title: JSX.Element;
    title_2: JSX.Element;
    sm_info: string;
    sm_info_2: string;
    project_data: {
        id: number;
        img: StaticImageData;
        title: string;
        meta_tag_1: string;
        meta_tag_2: string;
    }[];
}
// project content data
const project_content: project_content_type = {
    title: <>Our Handpicked <br /> <span> SEO Projects <UnderlineSeven /> </span></>,
    title_2: <>Our Handpicked <br /> <span>SEO Projects</span></>,
    sm_info: "Cold pressed before they sold out flexitarian chicharrones. Retro lo-fi hot chicken.",
    sm_info_2: "Cold pressed before they sold out flexitarian chicharrones. Retro lo-fi hot chicken.",
    project_data: [
        {
            id: 1,
            img: project_thumb_1,
            title: "SEO Fashion Website",
            meta_tag_1: "Digital Art",
            meta_tag_2: "Illustrations",
        },
        {
            id: 2,
            img: project_thumb_2,
            title: "SEO Fashion Website",
            meta_tag_1: "Digital Art",
            meta_tag_2: "Illustrations",
        },
        {
            id: 3,
            img: project_thumb_3,
            title: "SEO Fashion Website",
            meta_tag_1: "Digital Art",
            meta_tag_2: "Illustrations",
        },
        {
            id: 4,
            img: project_thumb_4,
            title: "SEO Fashion Website",
            meta_tag_1: "Digital Art",
            meta_tag_2: "Illustrations",
        },
    ]
}
const {title, title_2, sm_info, sm_info_2, project_data}  = project_content

const ProjectAreaHomeTwo = ({style}: any ) => { 

    const [active, setActive] = useState<number>(3);
    const handleToggle = (id: number): void => {
      setActive(id);
    };


    const [allActive, setAllActive] = useState<boolean>(false)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 992) {
          setAllActive(true);
        } else {
          setAllActive(false);
        }
      };  
      // Initial check for window size on component mount
      handleResize();  
      // Attach event listener to update state on window resize
      window.addEventListener('resize', handleResize);
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



    return (
      <> 
        <section className={`${style ? "project-area pt-110" : ""}`}>
          <div  className={`${style ? "project-5 pb-120 p-relative" : "project-area pt-105"} fix`}>
            <div className="container">
              {style ? 
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="tpsection-wrapper mb-20">
                        <h2 className="tpsection-title-two mb-65">{title_2}</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tp-panel-top mb-30">
                        <p>{sm_info_2}</p>
                        <div className="tp-panel-btn">
                          <Link className="light-blue-btn" href="/portfolio-2">View all Projects</Link>
                        </div>
                    </div>
                  </div>
              </div>
              :
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="tpsection-wrapper mb-20">
                      <h2 className="tpsection-title-two mb-65">{title}</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tp-panel-top mb-30">
                      <p>{sm_info}</p>
                      <div className="tp-panel-btn">
                        <Link className="green-btn" href="/portfolio">
                          View all Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div className="row-custom">
                {project_data.map((item, i) => (
                  <div
                    key={i}
                    className={`col-custom ${item.id === active && !allActive ? "active" : ""} ${allActive? "active" : ""}`}
                    onClick={() => handleToggle(item.id)}>
                    <div className="tp-panel-item p-relative">
                      <div className="tp-panel-thumb">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="tp-panel-content">
                        <div className="tp-panel-icon mb-15">
                          <span>
                            <Image src={panel_icon} alt="theme-pure" />
                          </span>
                        </div>
                        <div className="tp-panel-text">
                          <h4 className="tp-panel-title mb-15">
                            <Link href="/portfolio-details">{item.title}</Link>
                          </h4>
                          <ul className="tp-panel-meta">
                            <li>{item.meta_tag_1}</li>
                            <li>{item.meta_tag_2}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default ProjectAreaHomeTwo;