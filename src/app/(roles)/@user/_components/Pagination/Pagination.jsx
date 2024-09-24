import cn from "classnames";
import SearchField from "../SearchField";
import Loader from "../Loader";
import s from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
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
    <div>
    <SearchField
      name="page"
      min={1}
      max={totalPages || 1}
      type="number"
      className={cn("input", s.pagination__input)}
      disabled={totalPages === null}
    />
    <Loader />
    </div>
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
