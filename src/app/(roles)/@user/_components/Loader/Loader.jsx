import LoaderContainer from "./LoaderContainer";
import Spinner from "@/components/Spinner";
import s from "./Loader.module.scss";

const Loader = () => (
  <LoaderContainer>
    <div className={s.loader}>
      <Spinner>Tests</Spinner>
    </div>
  </LoaderContainer>
);

export default Loader;
