import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import {ReactTyped} from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h6 className="text-4xl sm:text-7xl font-bold text-white">
            <ReactTyped
              strings={[
                "I'm a Full Stack Developer",
                "I'm a Backend Developer",
                "I'm a Frontend Developer"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h6>
          <p className="text-gray-500 py-4 max-w-md">
          I have 2 years of experience in building and designing software, with a strong focus on full-stack web development. My expertise spans across both frontend and backend technologies, including React, Node.js, MongoDB, and Express.js. I thrive in developing dynamic and scalable web applications, leveraging my skills to deliver efficient and robust solutions that enhance user experiences and meet business needs.
          </p>

          <div>
            <Link
              to="Resume"
              smooth
              download={true}
              href={"/resume.pdf"}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
