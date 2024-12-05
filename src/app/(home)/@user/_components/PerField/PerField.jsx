import SearchbarField from "../SearchbarField";
import SearchbarLabel from "../SearchbarLabel";
import PerInput from "../PerInput";

const PerField = () => (
  <SearchbarField>
    <SearchbarLabel htmlFor="per">Tests per page</SearchbarLabel>
    <PerInput />
  </SearchbarField>
);

export default PerField;
