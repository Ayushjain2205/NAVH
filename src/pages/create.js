import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import InfoSection from "../components/Sections/InfoSection";
import ChooseTemplate from "../components/Sections/ChooseTemplate";
import Customise from "../components/Sections/Customise";
import Pay from "../components/Sections/Pay";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <Layout>
      <div>
        <div className="text-[16px] breadcrumbs">
          <ul>
            {[
              "Choose templates",
              "About your project",
              "Customise templates",
              "Attestation & Pay",
            ].map((step, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  currentStep === index + 1
                    ? "text-black"
                    : "text-black opacity-40"
                }`}
                onClick={() => setCurrentStep(index + 1)}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {currentStep === 1 && (
          <div>
            <ChooseTemplate handleNext={handleNext} />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <InfoSection handleNext={handleNext} />
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <Customise handleNext={handleNext} />
          </div>
        )}
        {currentStep === 4 && <Pay />}
      </div>
    </Layout>
  );
};

export default Create;
