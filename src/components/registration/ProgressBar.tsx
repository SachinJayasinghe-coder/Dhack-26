"use client";

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({
  currentStep,
}: ProgressBarProps) {
  const steps = [
    "Category",
    "Team",
    "Members",
    "Verification",
    "Project",
    "Submit",
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map(
          (step, index) => {
            const stepNumber =
              index + 1;

            return (
              <div
                key={step}
                className="flex flex-1 items-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${
                      currentStep >=
                      stepNumber
                        ? "bg-cyan-500 text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {stepNumber}
                  </div>

                  <span className="mt-2 text-xs text-gray-400">
                    {step}
                  </span>
                </div>

                {index <
                  steps.length - 1 && (
                  <div
                    className={`mx-2 h-1 flex-1 rounded ${
                      currentStep >
                      stepNumber
                        ? "bg-cyan-500"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}