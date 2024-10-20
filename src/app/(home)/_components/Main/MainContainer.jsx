import Main from "./Main";

const MainContainer = ({ user, children }) => (
  <main className="container">
    <Main user={user}>{children}</Main>
  </main>
);

export default MainContainer;
