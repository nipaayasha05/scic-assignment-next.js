import Image from "next/image";
import React from "react";

export default function () {
  return (
    <div className=" ">
      <figure className="   flex items-center justify-center">
        <Image
          src="/asests/booknest1.jpg"
          width={1200}
          height={500}
          alt={"banner"}
          className="w-full h-[70vh] mt-"
        />
      </figure>
    </div>
  );
}
