import cn from "classnames";
import Form from "../Form";
import Button from "../Button";
import s from "./AuthForm.module.scss";

const AuthForm = ({ error, isLoading, isSuccess, title, children }) => (
  <>
    <Form title={title} className={s.form} aria-describedby="form-loading_status">
      {children}
      <Button type="submit" className={s.form__submit}>
        {title}
      </Button>
    </Form>
    {error || isLoading || isSuccess ? (
      <div className={cn(s.form__loader, { [s.form__loader_loading]: isLoading })}>
        <span id="form-loading_status" aria-live="polite">
          {isLoading ? "Loading..." : error ?? "Success"}
        </span>
      </div>
    ) : null}
  </>
);

export default AuthForm;
