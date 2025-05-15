"use client";

function getAuthUser() {
  return localStorage.getItem("authToken")
}

export default getAuthUser;