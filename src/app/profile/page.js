"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";
import Loader from "../Components/Loader";
import { useRouter } from "next/navigation";

function page() {
  const { logout, isAuthenticated, user } = useAuth();
  const router = useRouter();
  function handleClick() {
    logout();
  }
  React.useEffect(() => {
    if (!isAuthenticated) {
      //   window.location.href = "/login";
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center mb-8">
        <img
          alt="Your Company"
          src="ACAAI's_Logo.png"
          className="mx-auto h-28 w-auto"
        />
        <h1 className="text-2xl font-bold mt-8">Profile</h1>
        <p>User Name: {user?.email}</p>
        <p>Region: {user?.region}</p>
      </div>
      <button
        class="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
        onClick={handleClick}
      >
        <span class="relative z-10">Logout</span>
      </button>
    </div>
  );
}

export default page;
