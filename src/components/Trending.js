import React from "react";
import { trending } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-center text-4xl font-bold mt-4 mb-6">Trending</h1>
        <Slider {...settings}>
          {trending.map((val, index) => (
            <div key={index} className="trend">
              <div className="lg:flex gap-8 items-center">
                <div className="lg:w-1/3">
                  <div>
                    <div>
                      <img
                        src={val.trending_img}
                        alt="img--trending"
                        className="rounded-lg w-full height-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex gap-3">
                    <p className="font-bold">{val.purpose}</p>
                    <span className="text-gray-500"> &#x2015; {val.date}</span>
                  </div>
                  <h2 className="text-5xl font-bold my-3">{val.title}</h2>
                  <p className="mb-4 text-gray-500 text-lg">
                    {val.description}
                  </p>
                  <div className="flex gap-4">
                    <div className="h-12 w-12">
                      <img
                        src={val.logo}
                        alt=""
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

export default Trending;
