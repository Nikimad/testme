"use client";

import { useField } from "formik";
import Select from "@/components/Select";
import s from "./QuestionType.module.scss";

const QuestionType = ({ id }) => {
  const [{ value }, _, { setValue }] = useField("question_type");

  const options = [
    { label: "Single", value: "single" },
    { label: "Multiple", value: "multiple" },
    { label: "Number", value: "number" },
  ];

  const classNames = {
    select: "form__input",
    popup: s.select__popup,
    option: s.select__option,
  };

  return (
    <Select
      label="Question type"
      id={`${id}-question_type`}
      name="question_type"
      options={options}
      value={value}
      classNames={classNames}
      setValue={setValue}
    />
  );
};

export default QuestionType;
