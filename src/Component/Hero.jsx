import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="flex items-center justify-between px-8 py-8 ">
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold leading-tight">
            YOUR FEET DESERVE THE BEST
          </h1>

          <p className="mt-6 text-gray-600">
            Your feet deserve the best and we're here to help you with our
            shoes. Discover quality, comfort and style.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 ">
              Shop Now
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-md">
              Category
            </button>
          </div>

          <div className="mt-8">
            <p className="text-gray-500">Available On</p>

            <div className="flex gap-4 mt-3">
              <img src="/Img/amazon.png" alt="amazon" className="w-8" />

              <img src="/Img/flipkart.png" alt="flipkart" className="w-8" />
            </div>
          </div>
        </div>

        <div>
          <img src="/Img/hero-image.png" alt="hero" className="w-[500px]" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
