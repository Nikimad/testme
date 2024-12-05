import s from "./ContentRoot.module.scss";

const ContentRoot = ({ rootRef, isInert, children }) => (
  <div
    id="content-root"
    className={s.content}
    ref={rootRef}
    {...(isInert && { inert: "true" })}
  >
    {children}
  </div>
);

export default ContentRoot;
