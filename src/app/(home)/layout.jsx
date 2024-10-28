import ReduxProvider from "./_components/ReduxProvider";
import InertProvider from "./_components/InertProvider";
import Header from "./_components/Header";
import Main from "./_components/Main";

const HomeLayout = ({ user, children }) => (
  <ReduxProvider>
    <InertProvider>
      <Header />
      <Main user={user}>{children}</Main>
    </InertProvider>
  </ReduxProvider>
);

export default HomeLayout;
