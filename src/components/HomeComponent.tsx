"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Button
        onClick={() => router.push("/simpleForm")}
        className=" w-[90%] sm:w-[350px] h-[40px] text-[18px] font-bold bg-pink-500"
      >
        Simple Form
      </Button>
      <Button
        onClick={() => router.push("/reactForm")}
        className=" w-[90%] sm:w-[350px] h-[40px] text-[18px] font-bold bg-green-500"
      >
        React-hook-form Form
      </Button>
      <Button
        onClick={() => router.push("/shadcnForm")}
        className=" w-[90%] sm:w-[350px] h-[40px] text-[18px] font-bold bg-orange-500"
      >
        Shadcn Form
      </Button>
    </div>
  );
};

export default HomeComponent;
