"use client";
import React from "react";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function Logout() {
  return (
    <div className="btn bg-black text-white" onClick={() => signOut()}>
      Logout
    </div>
  );
}
