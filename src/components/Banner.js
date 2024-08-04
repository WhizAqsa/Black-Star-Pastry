import React from "react";

function Banner() {
  return (
    <div className="w-[100vw] h-[200px] flex items-center relative bg-black bg-blend-darken bg-opacity-45 mb-12">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white">Welcome</h1>
      </div>

      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
}

export default Banner;
