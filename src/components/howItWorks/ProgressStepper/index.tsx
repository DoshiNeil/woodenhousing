"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface Step {
  id: number;
  title: string;
  isCompleted: boolean;
  progress: number; // 0 to 100
}

const ProgressStepper = () => {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, title: "Raise a request", isCompleted: false, progress: 0 },
    { id: 2, title: "Meet Our Expert", isCompleted: false, progress: 0 },
    {
      id: 3,
      title: "Explore Design Options",
      isCompleted: false,
      progress: 0,
    },
    { id: 4, title: "Book with Us", isCompleted: false, progress: 0 },
    { id: 5, title: "Receive 3D Design", isCompleted: false, progress: 0 },
    {
      id: 6,
      title: "Finalize Materials & Specifications",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 7,
      title: "Monitor Construction Progress",
      isCompleted: false,
      progress: 0,
    },
    { id: 8, title: "Handover to Client", isCompleted: false, progress: 0 },
  ]);

  // Demo animation - you can remove this in production or trigger based on your needs
  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prevSteps) => {
        const firstIncompleteIndex = prevSteps.findIndex(
          (step) => !step.isCompleted,
        );
        if (firstIncompleteIndex === -1) return prevSteps;

        const newSteps = [...prevSteps];
        const currentStep = newSteps[firstIncompleteIndex];

        if (currentStep.progress < 100) {
          currentStep.progress += 2;
        } else {
          currentStep.isCompleted = true;
          if (firstIncompleteIndex < newSteps.length - 1) {
            newSteps[firstIncompleteIndex + 1].progress = 0;
          }
        }

        return newSteps;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto my-6">
      <div className="relative">
        {/* Steps Container */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              {/* Circle and Progress Line */}
              <div className="relative flex items-center justify-center w-full">
                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-6 w-full left-1/2 h-1 -translate-y-1/2">
                    <div
                      className="h-full bg-orange-100 transition-all duration-300 ease-in-out"
                      style={{
                        width: `${step.progress}%`,
                      }}
                    />
                  </div>
                )}

                {/* Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-300 bg-white-100
                    ${step.isCompleted
                      ? "border-2 border-white-100 font-lexend font-bold text-lg bg-orange-200 text-white-200"
                      : "border-2 border-orange-100 bg-white text-orange-100"
                    }`}
                >
                  {step.id}
                </div>
              </div>

              {/* Step Title */}
              <span
                className={cn(
                  "font-lexend mt-2 text-xs text-center w-40",
                  `${step.isCompleted
                    ? "font-semibold text-[#161616]"
                    : "font-medium text-[#696969]"
                  }`,
                )}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
