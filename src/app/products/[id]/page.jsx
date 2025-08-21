import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function BooksPage({ params }) {
  const p = await params;
  const booksCollection = dbConnect(collectionNameObj.booksCollection);
  const data = await booksCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="container mx-auto py-5 text-xl">
      <div className="flex flex-col items-center justify-center mx-auto space-y-2">
        <p className="text-3xl text-center font-bold">{data.title}</p>
        <figure className="w-[350px] sm:w-[500px]   p-5   flex items-center justify-center overflow-hidden mx-auto  bg-gray-200">
          {data.image && (
            <Image
              src={data.image}
              width={350}
              height={200}
              className=" h-auto   object-cover"
              alt={data.title}
              unoptimized
            />
          )}
        </figure>
        <p className="badge p-5 bg-amber-200 text-xl font-bold">
          {data.category}
        </p>
        <div className="text-start w-[350px] sm:w-[500px]   p-5 ">
          <p className="text-xl">{data.description}</p>
          <p>
            <strong>Author : </strong>
            {data.author}
          </p>
          <p>
            <strong>Publisher : </strong>
            {data.publisher}
          </p>
          <p>
            <strong>Year : </strong>
            {data.year}
          </p>
          <p>
            <strong>Price</strong>
            {data.price}$
          </p>
        </div>
      </div>
    </div>
  );
}
