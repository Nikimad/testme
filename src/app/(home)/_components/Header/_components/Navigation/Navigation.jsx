import NavigationContainer from "./NavigationContainer";
import NavigationItem from "../NavigationItem";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItem href="/signin">Sign in</NavigationItem>
    <NavigationItem href="/signup">Sign up</NavigationItem>
  </NavigationContainer>
);

export default Navigation;
