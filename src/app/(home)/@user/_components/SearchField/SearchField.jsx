import SearchbarField from "../SearchbarField";
import SearchbarLabel from "../SearchbarLabel";
import SearchbarInput from "../SearchbarInput";

const SearchField = () => (
  <SearchbarField>
    <SearchbarLabel htmlFor="search">Search</SearchbarLabel>
    <SearchbarInput
      id="search"
      name="search"
      type="search"
      enableEmpty={true}
    />
  </SearchbarField>
);

export default SearchField;
