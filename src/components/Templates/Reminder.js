import React, { useState, useEffect } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import getColor from "../../utils/getColor";

const Reminder = ({ placeholder }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const bgColor = getColor();

  const handleSave = () => {
    setIsSaving(true);
  };
  useEffect(() => {
    if (isSaving) {
      setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
      }, 2000);
    }
  }, [isSaving]);
  return (
    <div>
      <TemplateHolder title="Create a reminder">
        <div className="flex flex-col max-h-[540px] overflow-scroll no-scrollbar">
          <input
            type="text"
            placeholder={placeholder ? placeholder : "Enter your reminder"}
            className="input input-bordered border-[#DDD] rounded-[12px] w-[705px] text-black"
          />
          <span className="mt-[8px] text-[14px] text-opacity-50 text-[#262626]">
            You’ll receive updates on your registered emailID!
          </span>
          <div className="flex flex-row justify-end">
            <button
              className="flex flex-row gap-[10px] items-center justify-center rounded-[10px] w-[174px] h-[48px] text-[#fff] font-bold text-[16px] bg-[#262626] mt-[32px]"
              onClick={handleSave}
            >
              {isSaving ? (
                <>
                  <span className="loading loading-spinner"></span>
                  SAVING
                </>
              ) : (
                "SAVE"
              )}
            </button>
          </div>
        </div>
      </TemplateHolder>
      {isSaved && (
        <p
          className="text-[28px] font-bold mt-[24px]"
          style={{ color: bgColor }}
        >
          👏 Wohooo! Creating Reminder was successful
        </p>
      )}
    </div>
  );
};

export default Reminder;
