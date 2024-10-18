import getInitialState from "@/lib/getInitialState";
import ReduxProvider from "./ReduxProvider";

const ReduxProviderContainer = async ({ children }) => {
  const preloadedState = await getInitialState();
  return <ReduxProvider preloadedState={preloadedState} children={children} />;
};

export default ReduxProviderContainer;
