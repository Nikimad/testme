"use client";

import { useCallback, useState, useRef } from "react";
import useDebounce from "@/hooks/useDebounce";
import Select from "./Select";

const SelectContainer = ({
  label,
  id,
  name,
  value,
  setValue,
  options,
  className,
  classNames,
}) => {
  const stylesNames = {
    ...(classNames || {}),
    select: classNames?.select || className,
  };

  const comboboxRef = useRef(null);

  const getPreselectIndex = useCallback(
    (value, options) => options.findIndex((option) => option.value === value),
    []
  );

  const currentSelect = getPreselectIndex(value, options);
  const [preselect, setPreselect] = useState(getPreselectIndex(value, options));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleListbox = useCallback(
    () => setIsExpanded((isExpanded) => !isExpanded),
    []
  );

  const openListbox = useCallback(
    () => isExpanded || setIsExpanded(true),
    [isExpanded]
  );
  const closeListbox = useCallback(
    () => isExpanded && setIsExpanded(false),
    [isExpanded]
  );

  const handlePreselect = useCallback(
    (index) => index !== preselect && setPreselect(index),
    [preselect]
  );

  const handleSelect = useCallback(
    (position) => {
      const limitedPosition =
        position < 0
          ? 0
          : position > options.length - 1
          ? options.length - 1
          : position;
      handlePreselect(limitedPosition);
      setValue(options[limitedPosition].value);
    },
    [options, handlePreselect, setValue]
  );

  const dissmiss = useCallback(
    ({ relatedTarget }) => {
      const nextValue = relatedTarget?.getAttribute("data-value");
      nextValue && setValue(nextValue);
      closeListbox();
      handlePreselect(getPreselectIndex(value, options));
    },
    [value, options, closeListbox, setValue, handlePreselect, getPreselectIndex]
  );

  const input = useRef({
    query: "",
    isQueryIncludesOnlyIdenticalChars: true,
  });

  const setInput = useDebounce(
    (char) => {
      if (char.length === 1) {
        if (
          input.current.isQueryIncludesOnlyIdenticalChars &&
          input.current.query.length > 0
        ) {
          input.current.isQueryIncludesOnlyIdenticalChars =
            input.current.query[input.current.query.length - 1] === char;
        }
        input.current.query += char;
      }
    },
    100,
    { leading: true, maxWait: 400 }
  );

  const clearInput = useDebounce(() => {
    input.current.query = "";
    input.current.isQueryIncludesOnlyIdenticalChars = true;
  }, 400);

  const search = useCallback(
    (query) => {
      const queryText = (
        input.current.isQueryIncludesOnlyIdenticalChars ? query[0] || "" : query
      ).toLowerCase();

      if (queryText === "") return;

      const pool = options.reduce((acc, option, i) => {
        const text = option.label.toLowerCase();

        if (text.indexOf(queryText) === 0) {
          acc = [...acc, i];
        }

        return acc;
      }, []);

      if (pool.length === 0) return;

      const currentPositionInPool = pool.indexOf(preselect);
      const nextSelect = pool[currentPositionInPool + 1] ?? pool[0];

      handleSelect(nextSelect);
    },
    [options, preselect, handleSelect]
  );

  const handleKeyDown = useCallback(
    (e) => {
      const isAlt = e.altKey;
      switch (e.code) {
        case "Escape":
          dissmiss(e);
          break;
        case "Enter":
          openListbox();
          handleSelect(preselect);
          closeListbox();
          break;
        case "Tab":
          handleSelect(preselect);
          closeListbox();
          break;
        case "Space":
          e.preventDefault();
          openListbox();
          break;
        case "End":
          handleSelect(options.length - 1);
          break;
        case "PageDown":
          e.preventDefault();
          if (isExpanded) {
            handleSelect(options.length - 1);
            break;
          }
          handleSelect(preselect + 3);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (isAlt) {
            toggleListbox();
            break;
          }
          handleSelect(preselect + 1);
          break;
        case "Home":
          handleSelect(0);
          break;
        case "PageUp":
          e.preventDefault();
          if (isExpanded) {
            handleSelect(0);
            break;
          }
          handleSelect(preselect - 3);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isAlt) {
            toggleListbox();
            break;
          }
          handleSelect(preselect - 1);
          break;
        default:
          setInput(e.key);
          search(input.current.query);
          clearInput();
          break;
      }
    },
    [options, isExpanded, preselect, openListbox, toggleListbox, closeListbox, handleSelect, dissmiss, search, setInput, clearInput]
  );

  return (
    <Select
      comboboxRef={comboboxRef}
      label={label}
      id={id}
      name={name}
      value={value}
      options={options}
      preselect={preselect}
      isExpanded={isExpanded}
      stylesNames={stylesNames}
      onToggle={toggleListbox}
      onBlur={dissmiss}
      onKeyDown={handleKeyDown}
      onMouseOver={handlePreselect}
    >
      {options[currentSelect].label}
    </Select>
  );
};

export default SelectContainer;
