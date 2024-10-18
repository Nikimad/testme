import FormikProvider from "../FormikProvider";
import Fields from "../Fields";
import Spinner from "../Spinner";
import Title from "../Title";
import s from "./Form.module.scss";

const Form = ({ children }) => (
  <div className={s.form__container}>
    <div className={s.form__header}>
      <h2 className="m_0">
        <Title />
      </h2>
      <Spinner />
    </div>
    <FormikProvider>
      <Fields>{children}</Fields>
    </FormikProvider>
  </div>
);

export default Form;
