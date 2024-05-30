import React from "react";
import { gridItems } from "../data/Data";

const TrendingGrid = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12 mt-32">
          {gridItems.map((val, index) => (
            <div key={index} className="trend">
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
                <p className="mb-4 text-gray-500 text-lg">{val.description}</p>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingGrid;
