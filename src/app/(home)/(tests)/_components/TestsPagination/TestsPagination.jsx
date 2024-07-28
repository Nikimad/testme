import cn from "classnames";
import TestsLink from "../Link";
import s from "./TestsPaginaation.module.scss";

const TestsPagination = ({ pagination, currentPage, lastPage }) => (
  <nav className={s.pagination}>
    <TestsLink className={s.pagination__link} href="1">{"<<"}</TestsLink>
    {pagination.map((page, i) =>
      page === null ? (
        <span key={i} className={s.pagination__separator}>...</span>
      ) : (
        <TestsLink
          key={i}
          href={page}
          className={cn(s.pagination__link, {
            [s.pagination__link_active]: currentPage === String(page),
          })}
        >
          {page}
        </TestsLink>
      )
    )}
    <TestsLink className={s.pagination__link} href={lastPage}>{">>"}</TestsLink>
  </nav>
);

export default TestsPagination;
