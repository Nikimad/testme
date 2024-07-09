import { useSearchParams } from "next/navigation";
import TestsLink from "./TestsLink";

const TestsLinkContainer = ({ href, ...props }) => {
    const searchParams = useSearchParams();
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", href);

    return <TestsLink href={`?${newSearchParams.toString()}`} {...props} />;
};

export default TestsLinkContainer;
