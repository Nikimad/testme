import SpinnerContainer from "./SpinnerContainer";
import DefaultSpinner from "@/components/Spinner";
import Title from "../Title";

const Spinner = () => (
  <SpinnerContainer>
    <DefaultSpinner>
      <Title />
    </DefaultSpinner>
  </SpinnerContainer>
);

export default Spinner;
