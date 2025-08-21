import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductList() {
  //   const res = await fetch("/book.json");
  const booksCollection = dbConnect(collectionNameObj.booksCollection);
  const data = await booksCollection.find({}).toArray();

  return (
    <div className="container mx-auto py-5">
      <h3 className="text-3xl font-bold text-center  ">
        Explore Our Collection
      </h3>
      <div className="grid pt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
        {data.map((item) => {
          return (
            <div className="m-5" key={item._id}>
              <div className="card bg-gray-50   shadow-md">
                <figure className="w-[350px] sm:w-[250px]    h-[200px] flex items-center justify-center overflow-hidden mx-auto  bg-gray-200">
                  {item.image && (
                    <Image
                      src={item.image}
                      width={350}
                      height={200}
                      className="    object-cover"
                      alt={item.title}
                      unoptimized
                    />
                  )}
                </figure>
                <div className="card-body bg-gray-50">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <p>
                    <strong>Price</strong>
                    {item.price}$
                  </p>
                  <div className="card-actions justify-end">
                    <Link href={`/products/${item._id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
}
