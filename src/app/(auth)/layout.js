"use client";

import React, { useEffect } from "react";
import getAuthUser from '@/helpers/authUser';
import { useRouter } from 'next/navigation';
import { Home_Route } from "@/constants/routes";

export default function layout({ children }) {


  const authUser = getAuthUser()

  const router = useRouter()

    console.log(authUser)

  // if user is already logged in, redirect to home page
  useEffect(() => {
    if (authUser) {
      router.push(Home_Route);
    }
  }, [authUser, router]);
  
  return (
    <div className="bg-gray-100 dark:bg-slate-500">
      <div className="max-w-screen-xl py-4 ps-4 min-h-svh">{children}</div>
    </div>
  );
}
