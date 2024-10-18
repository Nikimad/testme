import Searchbar from "../Searchbar";
import TestsList from "../TestsList";
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import s from "./Dashboard.module.scss";

const Dashboard = () => (
  <div className={s.dashboard}>
    <Searchbar />
    <TestsList />
    <div className={s.dashboard__footer}>
      <Spinner />
      <Pagination />
    </div>
  </div>
);

export default Dashboard;
