import s from "./TestsWrapper.module.scss";

const TestsWrapper = ({ children }) => <div className={s.wrapper}>{ children }</div>;

export default TestsWrapper;
