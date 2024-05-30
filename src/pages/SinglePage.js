import React, { useEffect, useState } from "react";
import { gridItems } from "../data/Data";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const SinglePage = () => {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openImg = (index) => {
    setCurrentImg(index);
    setSliderOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeSlider = () => {
    setSliderOpen(false);
  };

  const previousImg = () => {
    setCurrentImg((prev) => (prev === 0 ? gridItems.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setCurrentImg((prev) => (prev === gridItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (sliderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sliderOpen]);
  return (
    <>
      <div className="w-1/2 m-auto w-fullscreen768 p-2">
        {!sliderOpen ? (
          <div className="mt-16">
            {gridItems.slice(0, 1).map((val, index) => (
              <div key={index} className="trend">
                <div className="">
                  <div className="flex justify-center">
                    <div className="grid place-items-center">
                      <div className="h-20 w-20">
                        <img
                          src={val.logo}
                          alt="logo"
                          className="rounded-full border-red-800"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-500 text-xl">
                          {val.name}
                        </h4>
                        <p className="text-gray-500">{val.designation}</p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-4xl text-center font-bold my-6">
                    {val.title}
                  </h2>
                </div>
                <div>
                  <img
                    src={val.trending_img}
                    alt="img--trending"
                    className="rounded-lg w-full height-full"
                  />
                </div>
                <div>
                  <p className="mt-4 text-xl text-gray-500">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar. When
                    she reached the first hills of the Italic Mountains, she had
                    a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek, then she continued her way.
                  </p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-1 mt-4">
              {gridItems.map((val, i) => (
                <div
                  key={i}
                  onClick={() => openImg(i)}
                  className="cursor-pointer"
                >
                  <img
                    src={val.trending_img}
                    alt="trendimg"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xl text-gray-500">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. When she reached the first hills of the
              Italic Mountains, she had a last view back on the skyline of her
              hometown Bookmarksgrove, the headline of Alphabet Village and the
              subline of her own road, the Line Lane. Pityful a rethoric
              question ran over her cheek, then she continued her way.
            </p>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={closeSlider}
              className="absolute top-2 right-2 text-2xl font-bold bg-white rounded-full p-2"
            >
              <FaTimes />
            </button>
            <div className="flex justify-center items-center h-screen">
              <button onClick={previousImg} className="text-2xl font-bold mx-4">
                <FaArrowAltCircleLeft />
              </button>
              <img
                src={gridItems[currentImg].trending_img}
                alt=""
                className="rounded-lg max-w-full max-h-screen shadow-2xl transition-all ease-linear"
              />
              <button onClick={nextImg} className="text-2xl font-bold mx-4">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        )}

        <div className="border-t mt-8">
          <h5 className="text-gray-400 font-bold text-base my-4">Share</h5>
          <div className="flex gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div>
        <div className="w-10/12 m-auto">
          <div className="mt-32">
            <h1 className="font-bold text-3xl">Related Products</h1>
          </div>
          <div className="mt-8">
            {gridItems.map((val, index) => (
              <div key={index} className="trend mb-8">
                <Link to={"/singleproduct"}>
                  <div className="md:flex gap-8 items-start">
                    <div className="md:w-1/3">
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
                    <div className="md:w-2/3">
                      <div className="flex gap-3">
                        <p className="font-bold">{val.purpose}</p>
                        <span className="text-gray-500">
                          {" "}
                          &#x2015; {val.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold my-3">{val.title}</h2>
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsLetter />
    </>
  );
};

export default SinglePage;
