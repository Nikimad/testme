import SpinnerContainer from "./SpinnerContainer";
import DefaultSpinner from "@/components/Spinner";
import s from "./Spinner.module.scss";

const Spinner = () => (
  <SpinnerContainer>
    <div className={s.spinner}>
      <DefaultSpinner>Tests</DefaultSpinner>
    </div>
  </SpinnerContainer>
);

export default Spinner;
