import { SearchButton } from "../styles/Button.styled";

function Button({ bgColor }) {
  return (
    <SearchButton bgColor={bgColor} type="button">
      Search
    </SearchButton>
  );
}

export default Button;
