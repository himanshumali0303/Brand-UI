import React from "react";

const products = [
  {
    id: 1,

    image: "/IMG/model-1.jpg",
  },

  {
    id: 2,

    image: "/IMG/model-2.jpg",
  },

  {
    id: 3,

    image: "/IMG/model-3.jpg",
  },
];

const Model = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-5">
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
          >
            <div className="flex items-center  text-white hover:scale-110 font-medium  rounded-lg transition">
             
              <img
                src={item.image}
                className="w-full h-[520px]  object-cover  rounded-xl duration-500"
              />
            </div>

          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Model;
