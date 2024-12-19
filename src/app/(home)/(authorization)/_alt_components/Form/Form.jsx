import cn from "classnames";
import Field from "@/components/alt/Field";
import ErrorMessage from "@/components/alt/ErrorMessage";
import Spinner from "@/components/Spinner";
import s from "./Form.module.scss";

const Form = ({
  title,
  action,
  isSignUp,
  isLoading,
  isSuccess,
  values,
  errors,
}) => (
  <form
    action={action}
    aria-describedby={`sing-${title}-form-error`}
    className={cn(s.form, {
      [s.form_success]: isSuccess,
      [s.form_invalid]: errors?.error,
    })}
  >
    <div className={s.form__header}>
      <h2 className="m_0">Sign {title}</h2>
      {isLoading && <Spinner>sign {title}</Spinner>}
    </div>
    <div className="form-grid">
      <Field
        label="Username"
        id="username"
        name="username"
        defaultValue={values.username}
        error={errors?.username}
        isLoading={isLoading}
      />
      <Field
        label="Password"
        id="password"
        name="password"
        type="password"
        defaultValue={values.password}
        error={errors?.password}
        isLoading={isLoading}
      />
      {isSignUp && (
        <Field
          label="Password confirmation"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          defaultValue={values.password_confirmation}
          error={errors?.password_confirmation}
          isLoading={isLoading}
        />
      )}
      <button type="submit" className="pill" disabled={isLoading}>
        Sign {title}
      </button>
      <ErrorMessage id={`sing-${title}-form`} error={errors?.error} />
    </div>
  </form>
);

export default Form;
