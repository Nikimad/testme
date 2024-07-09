"use client";

import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";

const HomeLayout = ({ children }) => {
  const isUserAuthorized = useAuth();

  return (
    <>
      <Header />
      <main>{isUserAuthorized ? children : <Dashboard />}</main>
    </>
  );
};

export default HomeLayout;
