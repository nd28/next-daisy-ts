import { NextPage } from "next";
import ThoughtOfTheMoment from "../components/ThoughtOfTheMoment";
// import { ReactComponent as CalenderSvg } from "../assets/svg/calender1.svg";
import CalenderSvgPath from "../assets/svg/calender1.svg";
import Image from "next/image";
import WeekendPlanShowCase from "../components/WeekendPlanShowCase";

const momentaryThought = {
  title: "Well, Here is my stupidity!!",
  message:
    "I am working on something to help me have more fun at weekend, the irony is that I working on it on weekend! It's like I am working on weekend so i don't work on the weekends",
};

const PlanMyWeekend: NextPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <figure>
          <Image
            src={CalenderSvgPath}
            alt="Weekend Calender"
            className="max-w-sm rounded-lg drop-shadow-2xl"
          />
        </figure>
        <div>
          <ThoughtOfTheMoment {...momentaryThought} />
          <div className="p-3">
            <h1 className="text-5xl font-bold">Plan My Weekend </h1>
            <WeekendPlanShowCase />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanMyWeekend;
