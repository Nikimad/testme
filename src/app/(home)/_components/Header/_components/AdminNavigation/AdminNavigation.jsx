import AdminNavigationContainer from "./AdminNavigationContainer";
import Link from "next/link";

const AdminNavigation = () => (
  <AdminNavigationContainer>
    <Link href="/test/constructor" className="interactivetext">
      Create test
    </Link>
  </AdminNavigationContainer>
);

export default AdminNavigation;
