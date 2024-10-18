import Main from "./Main";

const MainContainer = ({ user, children }) => (
  <main className="container">
    <Main user={user} children={children} />
  </main>
);

export default MainContainer;
