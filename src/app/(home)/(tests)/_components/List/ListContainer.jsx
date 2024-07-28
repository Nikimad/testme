import { useSelector } from "react-redux";
import { testsSelectors } from "@/models/tests/selectors";
import List from "./List";

const ListContainer = () => {
  const tests = useSelector(testsSelectors.selectTests);

  return <List tests={tests} />;
};

export default ListContainer;
