import React from "react";

const brands = [
  "/IMG/adidas.png",
  "/IMG/balance.png",
  "/IMG/adidas.png",
  "/IMG/jordan.png",
  "/IMG/Nike-1.png",
  "/IMG/puma.png",

]

const Brand = () => {
  return (
    <section className="max-w-7xl mx-auto py-5 px-4 mt-1 ">
      <h2 className="text-center text-xl font-semibold mb-8 ms-5  ">
        Replacement Shoelaces for Popular Brands
      </h2>

      <div className="grid grid-cols-6  sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-5 items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center hover:scale-110 duration-300 cursor-pointer"
          >
            <img
              src={brand}
              alt="brand"
              className="h-20 object-contain grayscale "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
