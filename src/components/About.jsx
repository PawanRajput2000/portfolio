import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

       

        <br />

        <p className="text-xl ">
        Highly motivated and results-oriented software engineer with 2 
        years of experience in full-stack web development. At Osnil Web Solution Pvt. Ltd.,
         I work with the MERN stack, leveraging Nodemailer, React, and React-Router-Dom to build dynamic user interfaces, while ensuring secure authentication 
         using JWT and bcrypt. I manage data with Mongoose, Redis, and MongoDB, 
         utilize AWS S3 for image storage, and develop REST APIs with Express,
          deploying applications on Netlify. My projects include Appsala,
           Appsala Admin Panel, Brandemy, and Wisul. Additionally,
            I successfully integrated third-party services for email 
            notifications and user authentication and collaborated closely with 
            cross-functional teams. Previously, as a Backend Developer Trainee 
            and Teaching Assistant at FunctionUp, I mentored junior developers and supported them in resolving technical issues and mastering backend development skills.
        </p>
      </div>
    </div>
  );
};

export default About;
