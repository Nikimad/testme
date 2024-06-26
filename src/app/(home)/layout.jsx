import Header from "@/components/Header";

const HomeLayout = ({children}) => (
  <>
    <Header />
    {children}
  </>
);

export default HomeLayout;
