import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-gray-200 mt-32 py-16">
        <div className="w-10/12 m-auto">
          <h1 className="text-3xl font-bold mb-4">Subscribe to NewsLetter</h1>
          <div className="md:flex gap-4">
            <div className="w-9/12 mb-4 w-fullscreen768">
              <input
                type="text"
                placeholder="Enter Your Email Here..."
                className="focus:outline-none border rounded-xl px-8 py-3 w-full"
              />
            </div>
            <div className="w-1/4 w-fullscreen768">
              <button className="w-full px-8 py-3 border bg-yellow-600 text-white text-base rounded-full hover:bg-white hover:shadow-lg hover:text-black font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
