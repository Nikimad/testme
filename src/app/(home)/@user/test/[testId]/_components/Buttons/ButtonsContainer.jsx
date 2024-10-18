"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useFormikContext } from "formik";
import Button from "./Buttons";

const ButtonsContainer = ({ onSubmit, mainRef }) => {
  const { back } = useRouter();
  const { submitCount, errors } = useFormikContext();

  const mainType =
    submitCount === 0 ? "submit" : errors.length === 0 ? "button" : "reset";
  const mainText =
    mainType === "submit"
      ? "Finish"
      : mainType === "reset"
      ? "Try again"
      : "End test";
  const altText = mainType === "reset" ? "End test" : "";

  const handleAltClick = useCallback(() => back(), [back]);
  const handleMainClick = useCallback(() => {
    mainType === "submit" && onSubmit();
    mainType === "button" && handleAltClick();
  }, [mainType, onSubmit, handleAltClick]);

  return (
    <Button
      mainRef={mainRef}
      mainType={mainType}
      mainText={mainText}
      altText={altText}
      onMainClick={handleMainClick}
      onAltClick={handleAltClick}
    />
  );
};

export default ButtonsContainer;
