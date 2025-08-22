"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addProduct = Object.fromEntries(formData);
    // console.log(addProduct);
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(addProduct),
    });
    const response = await res.json();
    // console.log(response);
    toast.success("product added successfully");
    form.reset();
  };

  return (
    <div className="mt-16 container mx-auto flex flex-col items-center ">
      {" "}
      <p className="text-center  font-bold text-3xl py-5  ">AddProduct </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl border border-gray-200 shadow-md mx-auto ml-5 mr-5 mb-5 p-5 rounded-xl "
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Book Name</legend>
          <input
            type="text"
            name="title"
            className="input   w-[300px] "
            placeholder="book name"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Author</legend>
          <input
            type="text"
            name="author"
            className="input w-[300px]"
            placeholder="author"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Publisher</legend>
          <input
            type="text"
            name="publisher"
            className="input w-[300px]"
            placeholder="publisher"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <input
            type="text"
            name="description"
            className="input w-[300px]"
            placeholder="description"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Price</legend>
          <input
            type="text"
            name="price"
            className="input w-[300px]"
            placeholder="price"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Category</legend>
          <input
            type="text"
            name="category"
            className="input w-[300px]"
            placeholder="category"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Image</legend>
          <input
            type="text"
            name="image"
            className="input w-[300px]"
            placeholder="paste imgbb hosted image URL here"
          />
        </fieldset>
        <input className="btn bg-black text-white w-full mt-5" type="submit" />
      </form>
    </div>
  );
}
