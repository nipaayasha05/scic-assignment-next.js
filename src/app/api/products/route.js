import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const booksCollection = dbConnect(collectionNameObj.booksCollection);
  const result = await booksCollection.insertOne(body);

  return NextResponse.json(result);
};
