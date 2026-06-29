"use client";

import { useState } from "react";

import CategorySelection from "./CategorySelection";
import ProgressBar from "./ProgressBar";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

export default function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <section className="min-h-screen bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <h1 className="text-center text-6xl font-black">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DHACK 2026 Registration
          </span>
        </h1>

        {/* Progress Bar */}

        <div className="registration-progress">
          <ProgressBar currentStep={currentStep} />
        </div>

        {/* Step Content */}

        <div className="registration-content">

          {currentStep === 1 && (
            <CategorySelection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              nextStep={nextStep}
            />
          )}

          {currentStep === 2 && (
            <StepOne
              category={selectedCategory}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {currentStep === 3 && (
            <StepTwo
              category={selectedCategory}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {currentStep === 4 && (
            <StepThree
              category={selectedCategory}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {currentStep === 5 && (
            <StepFour
              category={selectedCategory}
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {currentStep === 6 && (
            <StepFive
              category={selectedCategory}
              formData={formData}
              previousStep={previousStep}
            />
          )}

        </div>

      </div>
    </section>
  );
}