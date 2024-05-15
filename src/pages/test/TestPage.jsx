import Button from "@/components/Button";
import StyledContainer from "@/components/StyledContainer";

const TestPage = ({ title, totalQuestions, nextHref }) => (
  <StyledContainer>
    <h2>{title}</h2>
    <p>Number of test questions: {totalQuestions}</p>
    <Button
      onClick={() => console.log("Hello")}
      href={nextHref}
      linkAction="push"
    >
      Go to first question
    </Button>
  </StyledContainer>
);

export default TestPage;
