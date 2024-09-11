import cn from "classnames";
import s from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onChange,
  onGoToLast,
  onGoToFirst,
}) => (
  <form className={s.pagination}>
    <button
      className={s.pagination__button}
      type="button"
      disabled={currentPage === 1}
      onClick={onGoToFirst}
    >
      {"< <"}
      <span className="visually-hidden">Go to first page</span>
    </button>
    <input
      min={1}
      max={totalPages}
      type="number"
      value={currentPage}
      onChange={onChange}
      className={cn("input", s.pagination__input)}
    />
    <button
      className={s.pagination__button}
      type="button"
      disabled={currentPage === totalPages}
      onClick={onGoToLast}
    >
      {"> >"}
      <span className="visually-hidden">Go to last page</span>
    </button>
  </form>
);

export default Pagination;
