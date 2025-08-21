import Image from "next/image";
import React from "react";

export default function ProductsListPage() {
  return (
    <div className="mt-16">
      <p className="text-3xl font-bold py-5"> ProductsList</p>
      <Image
        src="/asests/booknest1.jpg"
        width={1200}
        height={500}
        alt={"banner"}
        className="w-full h-[70vh] mt-"
      />
      <p>sdewiojrefd9iruf3we</p>
    </div>
  );
}
