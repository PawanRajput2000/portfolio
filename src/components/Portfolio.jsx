import React from "react";
import shopingCart from "../assets/portfolio/shopingCart.jpg";
import urlshortner from "../assets/portfolio/urlshortner.jpg";
import intership from "../assets/portfolio/intership.jpg";
import bookmanagement from "../assets/portfolio/bookmanagement.jpg";
import todo from "../assets/portfolio/todo.webp";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shopingCart,
      link : "https://github.com/PawanRajput2000/-E-Commerce-website.git"
    },
    {
      id: 2,
      src: bookmanagement,
      link : "https://github.com/PawanRajput2000/Book_management.git"
    },
    {
      id: 3,
      src: intership,
      link : "https://github.com/PawanRajput2000/Internship.git"
    },
    {
      id: 4,
      src: todo,
      link : "https://github.com/PawanRajput2000/todoApplication.git"
    },
    {
      id: 5,
      src: urlshortner,
      link : "https://github.com/PawanRajput2000/url---shortner.git"
    },
    {
      id: 6,
      src: reactWeather,
      link : "https://weatherapp-pawanrajput.netlify.app"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
               
                <a
                  href={link}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 inline-block text-center bg-blue-500 text-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
