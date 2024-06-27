"use client";

import useAuth from "@/hooks/useAuth";
import Greet from "@/components/Greet";

const HomePage = () => {
  useAuth();

  return <Greet />;
};

export default HomePage;
