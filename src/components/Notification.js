"use client";
import { Home_Route } from "@/constants/routes";
import { usePathname } from "next/navigation";
import React, { use } from "react";

export default function Notification() {
  const pathname = usePathname();
  return (
    <div
      className={`${pathname == Home_Route ? "block" : "hidden"} bg-black w-full text-center text-white`}
    >
      Notification here!
    </div>
  );
}
