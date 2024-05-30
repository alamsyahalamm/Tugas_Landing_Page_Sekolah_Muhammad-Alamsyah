import React from "react";
import { Carousel } from "flowbite-react";

function Karosel() {
  return (
      <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-[700px]">
        <Carousel className="-z-10">
          <img
            src="/gambar/banner-1.png"
            alt="..."
          />
          <img 
            src="/gambar/banner-2.png"
            alt=""
          />
          <img
            src="/gambar/banner-3.png"
            alt="..."
          />

        </Carousel>
      </div>
  );
}
export default Karosel;
