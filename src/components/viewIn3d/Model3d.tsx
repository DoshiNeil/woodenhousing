"use client";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Button } from "../common/button";
import { useState } from "react";
export default function Model3d({ models }: { models: Array<string> }) {
  const [selected, useSelected] = useState<number>(6);
  const getPageNumbers = () => {
    if (selected >= 2 && selected <= 11)
      return [selected - 2, selected - 1, selected, selected + 1, selected + 2];
    return [-1];
  };
  return (
    <div className="flex flex-col flex-1 my-6">
      <div className="flex gap-8 ">
        {models.map((m, idx) => (
          <div key={idx} className="relative">
            <img
              src={m}
              alt="3d models"
              className="h-64 min-w-96 object-cover rounded-lg"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black-100 to-transparent rounded-lg" />
            <img src="/expandIcon.svg" className="absolute right-2 bottom-2" />
          </div>
        ))}
      </div>
      <div className="flex flex-1 justify-between min-w-[1200px] mx-auto py-4 my-6">
        <CircleChevronLeft className="color-purple-200 w-8 h-8" />
        <div className="w-64">
          <span className="font-lexend font-normal text-slate-500 text-lg">
            ...
          </span>
          {getPageNumbers().map((no, idx) => (
            <Button
              key={idx}
              variant={`${selected !== no ? "ghost" : "default"}`}
              className={`font-lexend font-normal text-slate-500 text-lg ${selected === no && "bg-orange-100 rounded-full text-white-100"}`}
            >
              {idx + 1}
            </Button>
          ))}
          <span className="font-lexend font-normal text-slate-500 text-lg">
            ...
          </span>
        </div>
        <CircleChevronRight className="color-purple-200 w-8 h-8" />
      </div>
    </div>
  );
}
