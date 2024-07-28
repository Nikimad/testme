import Placeholder from "@/components/Placeholder";
import Controls from "../Controls";
import List from "../List";
import s from "./Tests.module.scss";

const Test = ({ isLoading }) => (
  <div className={s.wrapper}>
    <Controls />
    <Placeholder isLoading={isLoading}>
      <List />
    </Placeholder>
  </div>
);

export default Test;
