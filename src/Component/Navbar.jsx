import React from "react";

const Navbar = () => {
  return (
    <div>
      
      <div className="max-w-7xl mx-auto">
        
        <nav className="flex justify-between items-center py-6 px-8">
        <div>
          <img src="/Img/Nike-1.png" alt="logo" className="w-20" />
        </div>

        <ul className="flex gap-10 font-medium">
          <li className="cursor-pointer hover:text-red-600">Home</li>
          <li className="cursor-pointer hover:text-red-600">About</li>
          <li className="cursor-pointer hover:text-red-600">List</li>
          <li className="cursor-pointer hover:text-red-600">Contact</li>
        </ul>

        <button className="bg-red-600 text-white px-5  py-2 rounded-md hover:bg-red-700 ">
          Login
        </button>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
