import Placeholder from "@/components/Placeholder";
import Form from "../Form";

const Test = ({ isLoading, questions }) => (
  <Placeholder isLoading={isLoading} isFullHeight={true}>
    <Form questions={questions} />
  </Placeholder>
);

export default Test;
