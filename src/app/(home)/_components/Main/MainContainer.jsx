import cn from "classnames";
import Main from "./Main";
import s from "./Main.module.scss";

const MainContainer = ({ user, children }) => (
  <main className={cn("container", s.main)}>
    <Main user={user}>{children}</Main>
  </main>
);

export default MainContainer;
