import DefaultSpinner from "@/components/Spinner";
import s from "./Spinner.module.scss";

const Spinner = () => (
  <DefaultSpinner className={s.spinner}>Authentication</DefaultSpinner>
);

export default Spinner;
