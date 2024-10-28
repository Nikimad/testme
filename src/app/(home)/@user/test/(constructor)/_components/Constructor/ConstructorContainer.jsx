"use client";

import { useParams } from "next/navigation";

const ConstructorContainer = ({ children }) => {
  const { testId } = useParams();

  return (
    <>
      <h1>{testId}</h1>
      {children}
    </>
  );
};

export default ConstructorContainer;
