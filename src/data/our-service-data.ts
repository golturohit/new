import { StaticImageData } from "next/image";
import service_icon_1 from "@/assets/img/services/services-1-icon-1.png";
import service_icon_2 from "@/assets/img/services/services-1-icon-2.png";
import service_icon_3 from "@/assets/img/services/services-1-icon-3.png";
import service_icon_4 from "@/assets/img/services/services-1-icon-4.png";
import service_icon_5 from "@/assets/img/services/services-1-icon-5.png";
import service_icon_6 from "@/assets/img/services/services-1-icon-6.png";

interface our_service_data_type {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
}

const our_service_data: our_service_data_type[] = [
  {
    id: 1,
    img: service_icon_1,
    category: "Social Marketing",
    title: "Instant account activation <br /> if instant access.",
  },
  {
    id: 2,
    img: service_icon_2,
    category: "SEO Optimization",
    title: "Services activation <br /> if need access.",
  },
  {
    id: 3,
    img: service_icon_3,
    category: "One Page SEO",
    title: "Account activation <br /> if instant access.",
  },
  {
    id: 4,
    img: service_icon_4,
    category: "Content Marketing",
    title: "SEO account activation <br /> if instant access.",
  },
  {
    id: 5,
    img: service_icon_5,
    category: "Email Marketing",
    title: "Email Marketing activation <br /> if instant access.",
  },
  {
    id: 6,
    img: service_icon_6,
    category: "Keyword Research",
    title: "Keyword Research activation <br /> if instant access.",
  },
];

export default our_service_data;
