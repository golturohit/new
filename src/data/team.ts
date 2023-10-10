
// team avatar 
import { StaticImageData } from "next/image";
import team_img_1 from "@/assets/img/team/team-5-1.png";
import team_img_2 from "@/assets/img/team/team-5-2.png";
import team_img_3 from "@/assets/img/team/team-5-3.png";
import team_img_4 from "@/assets/img/team/team-5-4.png";
import team_img_5 from "@/assets/img/team/team-5-5.png";
import team_img_6 from "@/assets/img/team/team-5-6.png";
import team_img_7 from "@/assets/img/team/team-5-7.png";
import team_img_8 from "@/assets/img/team/team-5-8.png";


// team data type
interface team_data_type {
    id: number;
    avatar: StaticImageData;
    cls: string;
    name: string;
    job_title: string;
}

const team_data: team_data_type[] = [
    {
        id: 1,
        avatar: team_img_1,
        cls: "",
        name: "Danny Russell",
        job_title: "Founder & CEO",
    },
    {
        id: 2,
        avatar: team_img_2,
        cls: "team-5-item-2",
        name: "Ezekiel Pearce",
        job_title: "Founder & CEO",
    },
    {
        id: 3,
        avatar: team_img_3,
        cls: "team-5-item-3",
        name: "Byron Conner",
        job_title: "Founder & CEO",
    },
    {
        id: 4,
        avatar: team_img_4,
        cls: "team-5-item-4",
        name: "Anna Lin",
        job_title: "Founder & CEO",
    },
    {
        id: 5,
        avatar: team_img_5,
        cls: "team-5-item-5",
        name: "Guy Hawkins",
        job_title: "Developer",
    },
    {
        id: 6,
        avatar: team_img_6,
        cls: "team-5-item-6",
        name: "Deli Yanky",
        job_title: "Consulting Officer",
    },
    {
        id: 7,
        avatar: team_img_7,
        cls: "team-5-item-7",
        name: "Zin Denvar",
        job_title: "Sales Manager ",
    },
    {
        id: 8,
        avatar: team_img_8,
        cls: "team-5-item-8",
        name: "Maurice Craig",
        job_title: "Financial Manager",
    },

]

export default team_data