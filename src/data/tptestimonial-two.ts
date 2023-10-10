import { StaticImageData } from "next/image";
import avatar_1 from "@/assets/img//team/testimonial-2-avater-1.png";
import avatar_2 from "@/assets/img//team/testimonial-2-avater-2.png";
import avatar_3 from "@/assets/img//team/testimonial-2-avater-3.png";
import avatar_4 from "@/assets/img//team/testimonial-2-avater-4.png";

interface testimonial_data_two_type {
  id: number;
  img: StaticImageData;
  sm_des: string;
  name: string;
  job_title: string;
}
[];

const testimonial_data_two: testimonial_data_two_type[] = [
  {
    id: 1,
    img: avatar_1,
    sm_des:
      "I'm the kind of person who obsesses over and hand- <br /> tunes the performance of  my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!",
    name: "Alex Baradi",
    job_title: "Developer advocate at graph expert.",
  },
  {
    id: 2,
    img: avatar_2,
    sm_des:
      "I'm the kind of person who obsesses over and hand- <br /> tunes the performance of  my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!",
    name: "Robert Fox",
    job_title: "Developer advocate at graph expert.",
  },
  {
    id: 3,
    img: avatar_3,
    sm_des:
      "I'm the kind of person who obsesses over and hand- <br /> tunes the performance of  my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!",
    name: "Anna Lin",
    job_title: "Developer advocate at graph expert.",
  },
  {
    id: 4,
    img: avatar_4,
    sm_des:
      "I'm the kind of person who obsesses over and hand- <br /> tunes the performance of  my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!",
    name: "Byron Conner",
    job_title: "Developer advocate at graph expert.",
  },
  {
    id: 5,
    img: avatar_3,
    sm_des:
      "I'm the kind of person who obsesses over and hand- <br /> tunes the performance of  my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. SEOMY stood out was surprised by approach.!",
    name: "Anna Lin",
    job_title: "Developer advocate at graph expert.",
  },
];
export default testimonial_data_two;
