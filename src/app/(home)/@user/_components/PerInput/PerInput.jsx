"use client";

import { useAppSelector } from "@/models/hooks";
import { testsSelectors } from "@/models/tests/selectors";
import SearchField from "../SearchField";

const PerInput = (props) => {
  const totalCount = useAppSelector(testsSelectors.selectTotalCount);

  return (
    <SearchField
      name="per"
      id="per"
      type="number"
      defaultValue={5}
      min={1}
      max={totalCount || 1}
      {...props}
    />
  );
};

export default PerInput;
