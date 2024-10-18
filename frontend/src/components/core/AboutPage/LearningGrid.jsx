import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "",
    highlightText: "OUR TEAM",
    description:
      "We 4 Worked on the Project",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Achintya Tiwari",
    description:
      "Worked in Complete Frontend and Backend,built a user friendly frontend and various backend API",
  },
  {
    order: 2,
    heading: "Sainkee Thakur",
    description:
      "Worked in building a various components of frontend and worked on the assets",
  },
  {
    order: 3,
    heading: "Aayushman Srivas",
    description:
      "Worked with the complete testing of the Project and make sure all the API are working right",
  },
  {
    order: 4,
    heading: "Ajay Kushwaha",
    description:
      "Worked on building the various backend API and Successfully fetching data from DB",
  },
  // {
  //   order: 5,
  //   heading: "Ready to Work",
  //   description:
  //     "CourseKArt partners with more than 10000 teachers",
  // },
];

const LearningGrid = () => {

  return (
    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
              } ${card.order === 3 && "lg:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;