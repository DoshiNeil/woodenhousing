"use client";
import React, { useEffect, useReducer } from "react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  isCompleted: boolean;
  progress: number; // 0 to 100,
}

const initialState = {
  activeStep: 0,
  steps: [
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
  ],
  completedLoops: 0,
};
const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case "NEXT_STEP":
      if ((state.activeStep + 1) % state.steps.length === 0)
        return {
          ...state,
          activeStep: 0,
          steps: state.steps.map((step, index) =>
            index === 0
              ? { ...step, isCompleted: true }
              : { ...step, isCompleted: false },
          ),
        };
      return {
        ...state,
        activeStep: (state.activeStep + 1) % state.steps.length,
        steps: state.steps.map((step, index) =>
          index === state.activeStep + 1
            ? { ...step, isCompleted: true }
            : step,
        ),
      };
    default:
      return state;
  }
};

const ProgressStepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "NEXT_STEP" });
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [dispatch]);
  return (
    <div className="mx-auto my-6">
      <div className="flex my-2 relative w-full">
        {state.steps.map((s: Step, idx: number) => (
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
                  <div
                    className={`absolute top-0 left-0 w-full ${!s.isCompleted ? "h-[3px] bg-[#f3d8d2] " : "h-[5px] bg-orange-200"} top-1/2 -translate-y-1/2`}
                  />
                </div>
              )}
            </div>
            <p
              className={`-translate-x-10 pt-4 pr-8 text-center text-sm ${s.isCompleted ? "font-bold" : "font-normal text-gray-800"} leading-relaxed  transition-all duration-200 ease-linear`}
            >
              {s.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <img
          src={`/howItWorks/${state.activeStep + 1}.svg`}
          className="object-cover item-center max-h-[400px]"
        />
      </div>
      <div className="mt-2 flex justify-center">
        <p className="font-lexend text-[200px] text-[#f2f2f2] z-0">
          0{state.steps[state.activeStep].id}
        </p>
        <div className="flex flex-col -translate-x-20 justify-center z-5">
          <p className="font-lexend font-medium text-xl leading-8">
            {state.steps[state.activeStep].id}.
            {state.steps[state.activeStep].title}
          </p>
          <p className="font-lexend font-light text-lg leading-8">
            {state.steps[state.activeStep].subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
