import List from "../List";
import Status from "../Status";
import s from "./Main.module.scss";

const Main = () => (
  <div className={s.main}>
    <List className={s.main__list} />
    <Status className={s.main__status} />
  </div>
);

export default Main;
