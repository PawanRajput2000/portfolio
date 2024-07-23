import React from "react";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import express from "../assets/express.png"
import github from "../assets/github.png";
import node from "../assets/node.png"
import mongoDB from "../assets/mongoDB.webp"
import awsS3 from "../assets/awsS3.webp"
import redis from "../assets/redis.webp"


const Experience = () => {
  const techs = [
    
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: express,
      title: "Express JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: awsS3,
      title: "AWS S3",
      style: "shadow-gray-400",
    },{
      id: 8,
      src: redis,
      title: "Redis",
      style: "shadow-gray-400",
    }
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white my">
        <div className=" mx-auto my-10">
          
        
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
