import { useState } from "react";
import TestsTable from "./TestsTable";

const TestsTableContainer = () => {
    const [isTableAsc, setIsTableAsc] = useState(true);
    const tests = [];
    const testsLength = tests.length;

    const handleSort = () => setIsTableAsc(!isTableAsc);

    return <TestsTable tests={tests} testsLength={testsLength} onSort={handleSort} isTableAsc={isTableAsc} />;
};

export default TestsTableContainer;
