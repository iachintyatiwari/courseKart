import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"

import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import Img from "../components/common/Img"
import ReviewSlider from './../components/common/ReviewSlider';

import { motion } from 'framer-motion';
import { fadeIn } from "../components/common/motionFrameVarients"





const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header
            className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"
          >
            <motion.p
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
            > Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"} />
            </motion.p>

            <motion.p
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              CourseKart is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="" />
            <Img src={BannerImage2} alt="" />
            <Img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              During our research, we found that there was no platform that specifically helped teachers easily list their courses online and sell them to earn money. This gap inspired us to build an e-learning platform aimed at empowering educators globally. Our key goals included creating an intuitive interface for course creation, supporting diverse monetization models, and connecting educators with a global audience. Challenges arose with seamless technical integration and course visibility. Despite these setbacks, the project successfully created a scalable platform that offers teachers a hassle-free way to share their expertise and generate income.
              </p>
              
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.1)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            {/* <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div> */}

            {/* <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>*/}
          </div>
        </div> 
      </section>

      {/* <StatsComponenet /> */}

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Reviws from Other Learner */}
      <div className=" my-20 px-5 text-white ">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default About