import { LuDumbbell } from "react-icons/lu";
import { FaPersonRunning } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { BsHeartPulseFill } from "react-icons/bs";

export const programsData = [
  {
    icon: <LuDumbbell size={40} />,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    icon: <FaPersonRunning size={40} />,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    icon: <AiFillFire size={40} />,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose weight.",
  },
  {
    icon: <BsHeartPulseFill size={40} />,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];
