import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular_items } from "../data/Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularPost = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "260px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: true,
    nextArrow: <FaChevronLeft />,
    prevArrow: <FaChevronRight />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          centerPadding: "initial",
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 m-auto mt-32">
        <h1 className="text-center text-4xl font-bold mt-4 mb-6">
          Most Popular Posts
        </h1>
        <Slider {...settings}>
          {popular_items.map((val, index) => (
            <div key={index}>
              <div className="trend mx-10">
                <div>
                  <img
                    src={val.trending_img}
                    alt="img--trending"
                    className="rounded-lg w-full height-full"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex gap-3">
                    <p className="font-bold">{val.purpose}</p>
                    <span className="text-gray-500"> &#x2015; {val.date}</span>
                  </div>
                  <h2 className="text-xl font-bold my-3">{val.title}</h2>
                  <p className="mb-4 text-gray-500 text-lg">
                    {val.description}
                  </p>
                  <div className="flex gap-4">
                    <div className="h-12 w-12">
                      <img
                        src={val.logo}
                        alt="log"
                        className="rounded-full border-red-800"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{val.name}</h4>
                      <p className="text-gray-500">{val.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularPost;
