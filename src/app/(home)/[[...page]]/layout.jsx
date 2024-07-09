import LayoutContainer from "@/components/LayoutContainer";
import TestsWrapper from "@/components/TestsWrapper";
import TestsPagination from "@/components/TestsPagination";

const TestsLayout = ({ children }) => (
  <LayoutContainer element="section">
    <TestsWrapper>{children}</TestsWrapper>
    <TestsPagination />
  </LayoutContainer>
);

export default TestsLayout;
