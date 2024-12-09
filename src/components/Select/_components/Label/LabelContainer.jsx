"use client";

import { useCallback } from "react";
import Label from "./Label";

const LabelContainer = ({ id, className, comboboxRef, children }) => {
  const handleClick = useCallback(() => comboboxRef.current.focus(), [comboboxRef]);

  return (
    <Label id={id} className={className} onClick={handleClick}>
      {children}
    </Label>
  );
};

export default LabelContainer;
