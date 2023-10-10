import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
// home demo
import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";
import home_demo_4 from "@/assets/img/menu/home-4.jpg";
import home_demo_5 from "@/assets/img/menu/home-5.jpg";
// service deme 
import service_demo_1 from "@/assets/img/header-icon/keyword.png";
import service_demo_2 from "@/assets/img/header-icon/audit.png";
import service_demo_3 from "@/assets/img/header-icon/building.png";
import service_demo_4 from "@/assets/img/header-icon/media.png";
import service_demo_5 from "@/assets/img/header-icon/analysis.png";

import menu_banner from "@/assets/img/header-icon/header-banner/header-banner-1.png";
 
// type MenuData =  
interface menu_data_type  {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;  
  img_dropdown?: boolean;  
  service_dropdown?: boolean;  
  blog_dropdown?: boolean;  
  sub_menus?: {
      link?: string | any;
      title?: string;
      demo_img?: StaticImageData | any ; 
      layout?: {
        link: string;
        title: string;
      }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    has_dropdown: true,
    img_dropdown: true,
    sub_menus: [
      { link: "/",       title: "SEO Marketing",  demo_img: home_demo_1,  },
      { link: "/home-2", title: "SEO Analysis",   demo_img: home_demo_2,  },
      { link: "/home-3", title: "Business SEO",   demo_img: home_demo_3,  },
      { link: "/home-4", title: "SEO Agency",     demo_img: home_demo_4,  },
      { link: "/home-5", title: "SEO Campaign",   demo_img: home_demo_5,  },
    ],
  },
  {
    id: 2,
    title: "About",    
    link: "/about",
    has_dropdown: false, 
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    service_dropdown: true,
    inner_title: "Services Overview",
    sub_menus: [
      { link: "/keyword-search",           title: "Keyword Research",         demo_img: service_demo_1,  },
      { link: "/seo-audit",                title: "SEO Audit Services",       demo_img: service_demo_2,  },
      { link: "/social-services",          title: "Link Building Services",   demo_img: service_demo_3,  },
      { link: "/media-markiting",          title: "Social Media Marketing",   demo_img: service_demo_4,  },
      { link: "/marketing-analysis",       title: "SEO analysis.",            demo_img: service_demo_5,  },
    ],
    banner_sub_title: "SEO Agency",
    banner_title: <>The #1 SEO <br/> agency for fast growing <br /> companies.</>,
    icon: <RightArrowMenu />,
    m_banner: menu_banner,
  },
  {
    id: 4,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    has_megamenu: true,
    sub_menus: [
      {  
      layout: [
          { link: "/about",                 title: "About Us" }, 
          { link: "/service",               title: "Services" }, 
          { link: "/team",                  title: "Team Member" }, 
          { link: "/team-details",          title: "Team Details" }, 
          { link: "/sign-in",               title: "Sign In" }, 
          { link: "/sign-out",              title: "Sign Up" }, 
        ],
      },
      {  
        layout: [
            { link: "/pricing",            title: "Pricing" },  
            { link: "/portfolio",          title: "Case Studies 2 Columns" },  
            { link: "/portfolio-2",        title: "Case Studies 3 Columns" },  
            { link: "/portfolio-details",  title: "Case Studies Details" },  
            { link: "/blog-grid",          title: "Blog Grid" },  
            { link: "/blog-masonry",       title: "Blog Masonry" },  
          ],
      },
      {  
        layout: [
            { link: "/blog-list",          title: "Blog List" },  
            { link: "/blog-details",       title: "Blog Details" },  
            { link: "/blog-details-2",     title: "Blog Details Full Width" },  
            { link: "/faq",                title: "FAQ" },  
            { link: "/contact",            title: "Contact" },  
          ],
      }, 
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    blog_dropdown: true,
    sub_menus: [
      { link: "/blog",                    title: "Blog" },
      { link: "/blog-grid",               title: "Blog Grid" },
      { link: "/blog-masonry",            title: "Blog Masonry" },
      { link: "/blog-list",               title: "Blog List" },
      { link: "/blog-details",            title: "Blog Details" },
      { link: "/blog-details-2",          title: "Blog Details Full Width" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,     
  },  
];
export default menu_data;
