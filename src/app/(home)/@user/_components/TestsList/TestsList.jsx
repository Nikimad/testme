import Status from "../Status";
import Tests from "../Tests";
import s from "./TestsList.module.scss";

const TestsList = () => (
  <div className={s.list__container}>
    <p className={s.list__status}>
      <Status />
    </p>
    <ul className={s.list}>
      <Tests />
    </ul>
  </div>
);

export default TestsList;
