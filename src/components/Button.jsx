import { SearchButton } from "../styles/Button.styled";

function Button({ bgColor }) {
  return (
    <SearchButton data-testid="search-button" bgColor={bgColor} type="button">
      Search
    </SearchButton>
  );
}

export default Button;
