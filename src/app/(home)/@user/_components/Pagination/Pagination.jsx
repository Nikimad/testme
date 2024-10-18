import cn from "classnames";
import s from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onChange,
  onBlur,
  onGoToLast,
  onGoToFirst,
}) => (
  <div className={s.pagination__container}>
    <form className={s.pagination}>
      <button
        className={s.pagination__button}
        type="button"
        disabled={currentPage == 1}
        onClick={onGoToFirst}
      >
        {currentPage == 1 ? <>&#9665;&#9665;</> : <>&#9664;&#9664;</>}
        <span className="visually-hidden">Go to first page</span>
      </button>
      <input
        name="page"
        min={1}
        max={totalPages || 1}
        onChange={onChange}
        onBlur={onBlur}
        value={currentPage}
        type="number"
        className={cn("input", s.pagination__input)}
      />
      <button
        className={s.pagination__button}
        type="button"
        disabled={currentPage == totalPages}
        onClick={onGoToLast}
      >
        {currentPage == totalPages ? <>&#9655;&#9655;</> : <>&#9654;&#9654;</>}
        <span className="visually-hidden">Go to last page</span>
      </button>
    </form>
  </div>
);

export default Pagination;
