import LoaderContainer from "./LoaderContainer";
import Spinner from "@/components/Spinner";
import s from "./Loader.module.scss";

const Loader = () => (
  <LoaderContainer>
    <Spinner className={s.loader}>Tests</Spinner>
  </LoaderContainer>
);

export default Loader;
