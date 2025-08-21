"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="btn" onClick={() => signOut()}>
      Logout
    </div>
  );
}
