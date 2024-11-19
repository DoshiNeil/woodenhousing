"use client";
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
      isCompleted: true,
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
      <div className="flex my-2 relative w-full">
        {steps.map((s, idx) => (
          <div className="flex flex-col flex-1" key={idx}>
            <div className="flex align-center">
              <button
                className={`min-w-[50px] min-h-[50px] rounded-full 
                border-[1.714px] border-[#d75337] ${!s.isCompleted && "text-[#d75337]"}
                flex items-center justify-center cursor-pointer
                ${s.isCompleted && "text-white-100 bg-[#d75337]"} border-[#d75337] transition-all duration-200 ease-linear`}
              >
                {s.id}
              </button>
              {s.id !== 8 && (
                <div className="relative w-full h-full mx-5">
                  <div className="absolute top-0 left-0 w-full h-[3px] top-1/2 -translate-y-1/2 bg-[#f3d8d2]" />
                </div>
              )}
            </div>
            <p
              className={`pt-4 pr-8 text-sm ${s.isCompleted ? "font-bold" : "font-normal text-gray-800"} leading-relaxed  transition-all duration-200 ease-linear`}
            >
              {s.title}
            </p>
          </div>
        ))}
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
