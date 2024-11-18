"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useMemo } from "react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  isCompleted: boolean;
  progress: number; // 0 to 100
}

const ProgressStepper = () => {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      title: "Raise a request",
      subtitle:
        "Reach out to us to express your interest in building a wooden house/cottage.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 2,
      title: "Meet Our Expert",
      subtitle:
        "Our architect will visit you to discuss your ideas, preferences, and budget, ensuring we capture your vision perfectly.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 3,
      title: "Explore Design Options",
      subtitle:
        "We’ll present you with various design options and reference images to help you choose the style and layout that best suits your needs.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 4,
      title: "Book with Us",
      subtitle:
        "Once you’re satisfied with the design, secure your booking to begin the next steps.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 5,
      title: "Receive 3D Design",
      subtitle:
        "Work with us to select the perfect materials, from wood types to finishes, ensuring every detail aligns with your preferences.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 6,
      title: "Finalize Materials & Specifications",
      subtitle:
        "Work with us to select the perfect materials, from wood types to finishes, ensuring every detail aligns with your preferences.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 7,
      title: "Monitor Construction Progress",
      subtitle:
        "Stay informed as our team keeps you updated on the construction progress, from foundation to final touches.",
      isCompleted: false,
      progress: 0,
    },
    {
      id: 8,
      title: "Handover to Client",
      subtitle:
        "Upon completion, we hand over your fully finished wooden house, ready for you to move in and enjoy.",
      isCompleted: false,
      progress: 0,
    },
  ]);

  const currentStep = useMemo(() => {
    const firstIncompleteIndex = steps.findIndex((step) => !step.isCompleted);

    if (firstIncompleteIndex == -1) return steps[0];

    return steps[firstIncompleteIndex];
  }, [steps]);

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
      <div className="mt-8 flex justify-center">
        <img
          src={`/howItWorks/${currentStep.id}.svg`}
          className="object-cover item-center max-h-[400px]" 
        />
      </div>
      <div className="mt-2 flex justify-center">
        <p className="font-lexend text-[200px] text-[#f2f2f2] z-0">
          0{currentStep.id}
        </p>
        <div className="flex flex-col -translate-x-20 justify-center z-5">
          <p className="font-lexend font-medium text-xl leading-8">
            {currentStep.id}.{currentStep.title}
          </p>
          <p className="font-lexend font-light text-lg leading-8">
            {currentStep.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
