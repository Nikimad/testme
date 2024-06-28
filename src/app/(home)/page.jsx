"use client";

import useAuth from "@/hooks/useAuth";
import Greet from "@/components/Greet";
import TestsTable from "@/components/TestsTable";

const HomePage = () => {
  useAuth();

  return (
    <main>
      <Greet />
      <TestsTable />
    </main>
  );
};

export default HomePage;
