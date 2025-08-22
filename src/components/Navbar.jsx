import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href="/products">Product List</Link>
        </li>
        <li>
          <Link href="/dashboard/add-product">Add Product</Link>
        </li>
      </>
    );
  };
  return (
    <div>
      <div className="navbar top-0 fixed z-50 bg-base-100 border-b border-b-gray-400 ">
        <div className="flex container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navMenu()}
              </ul>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Image
                src="/asests/books.png"
                width={40}
                height={40}
                alt="books"
              />
              <Link href={"/"} className="text-2xl font-bold   ">
                BookNest
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
          </div>
          <div className="navbar-end">
            {session?.user ? (
              <Logout />
            ) : (
              <Link href="/login" className="btn bg-black text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
