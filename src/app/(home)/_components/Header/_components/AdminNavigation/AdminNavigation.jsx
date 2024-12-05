import Link from "next/link";

const AdminNavigation = ({ onClick }) => (
  <Link href="/test/create" className="interactivetext" onClick={onClick}>
    Create test
  </Link>
);

export default AdminNavigation;
