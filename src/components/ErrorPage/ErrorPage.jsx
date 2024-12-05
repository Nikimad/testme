import s from "./ErrorPage.module.scss";

const ErrorPage = ({ text }) => (
    <div className={s.container}>
      <h2 className="m_0">{text}</h2>
    </div>
);

export default ErrorPage;
